import { Color, RichText } from "apps/admin/widgets.ts";
import { useScript } from "@deco/deco/hooks";

interface Chart {
  labels: string[];
  data: number[];
  backgroundColor?: Color[];
  borderColor?: Color[];
  borderWidth?: number;
  /**
   * @default false
   */
  displayGrids?: boolean;
  /**
   * @default false
   */
  displayBorders?: boolean;
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
    data: [1000000, 2000000, 3000000, 5000000, 10000000],
    backgroundColor: ["#000", "#000", "#000", "#000", "#000"],
    borderColor: ["#000", "#000", "#000", "#000", "#000"],
    displayBorders: false,
    displayGrids: false,
  },
};

// deno-lint-ignore no-explicit-any
declare const Chart: any;

export default function BarChart(props: Props) {
  const { title, chart } = { ...DEFAULT_PROPS, ...props };

  const script = (chart: Chart) => {
    const canvas = document.getElementById("myBarChart") as
      | HTMLCanvasElement
      | null;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const labels = chart.labels;
        const itemData = chart.data;
        const data = {
          labels,
          datasets: [{
            data: itemData,
            backgroundColor: chart.backgroundColor,
            borderColor: chart.borderColor,
            borderWidth: chart.borderWidth,
            fill: true,
          }],
        };
        const config = {
          type: "bar",
          data: data,
          options: {
            scales: {
              y: {
                grid: {
                  display: chart.displayGrids,
                },
                border: {
                  display: chart.displayBorders,
                },
              },
              x: {
                grid: {
                  display: chart.displayGrids,
                },
                border: {
                  display: chart.displayBorders,
                },
              },
            },
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
      <div class="w-full min-h-[982px] flex flex-col gap-[72px] items-center justify-center px-24 py-20 bg-secondary font-inter text-base-100">
        <div
          class="max-w-[1096px] text-[64px] leading-[77.45px] text-center font-semibold"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />

        <div class="flex items-center justify-center w-full h-full max-w-[1094px] max-h-[609px] p-20 border-2 border-base-100 bg-warning-content rounded-[40px]">
          <canvas id="myBarChart" class="w-full h-full" />
        </div>
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(script, chart) }}
      />
    </>
  );
}
