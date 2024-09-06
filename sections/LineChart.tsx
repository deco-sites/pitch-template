import { RichText } from "apps/admin/widgets.ts";
import { Head } from "$fresh/runtime.ts";
import { useScript } from "deco/hooks/useScript.ts";

interface Chart {
  labels: string[];
  data: number[];
}

export interface Props {
  title: RichText;
  chart: Chart;
}

const DEFAULT_PROPS: Props = {
  title:
    "<p>This pitch structure has helped participants raise more than<br><strong>$10M in funding</strong></p>",
  chart: {
    labels: ["2024", "2025", "2026", "2027", "2028"],
    data: [1_000_000, 2_000_000, 3_000_000, 5_000_000, 10_000_000],
  },
};

// deno-lint-ignore no-explicit-any
declare const Chart: any;

export default function LineChart(props: Props) {
  const { title, chart } = { ...DEFAULT_PROPS, ...props };

  const script = (chart: Chart) => {
    const canvas = document.getElementById("myChart") as
      | HTMLCanvasElement
      | null;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#E9E9E9");
        gradient.addColorStop(1, "#FFFFFF");

        const labels = chart.labels;
        const itemData = chart.data;

        const data = {
          labels,
          datasets: [{
            data: itemData,
            borderColor: "#000",
            pointBackgroundColor: "#000",
            backgroundColor: gradient,
            fill: true,
          }],
        };

        const config = {
          type: "line",
          data: data,
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        };

        new Chart(ctx, config);
      } else {
        console.error("Não foi possível obter o contexto 2D do canvas.");
      }
    } else {
      console.error(
        'Não foi possível encontrar o elemento canvas com id "myChart".',
      );
    }
  };

  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js" />
      </Head>

      <div class="w-full min-h-[982px] flex flex-col gap-[72px] items-center justify-center px-24 py-20 bg-secondary font-inter text-base-100">
        <div
          class="max-w-[1096px] text-[64px] leading-[77.45px] text-center font-semibold"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />

        <div class="flex items-center justify-center w-full h-full max-w-[1094px] max-h-[609px] p-20 border-2 border-base-100 bg-primary rounded-[40px]">
          <canvas id="myChart" class="w-full h-full" />
        </div>
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(script, chart) }}
      />
    </>
  );
}
