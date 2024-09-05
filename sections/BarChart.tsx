import { Color, RichText } from "apps/admin/widgets.ts";

interface Chart {
  value: number;
  year: string;
  color: Color;
}

export interface Props {
  title: RichText;
  charts: Chart[];
}

const DEFAULT_PROPS: Props = {
  title:
    "<p>This pitch structure has helped participants raise more than <br><strong>$10M in funding</strong></p>",
  charts: [
    { year: "2024", value: 1000000, color: "#CCCCCC" },
    { year: "2025", value: 2000000, color: "#999999" },
    { year: "2026", value: 3000000, color: "#666666" },
    { year: "2027", value: 5000000, color: "#333333" },
    { year: "2028", value: 10000000, color: "#000000" },
  ],
};

export default function BarChart(props: Props) {
  const { title, charts } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full min-h-[982px] flex items-center justify-center px-24 py-20 bg-secondary font-inter text-base-100">
      <div class="flex flex-col items-center justify-center gap-[72px] max-w-[1096px] mx-auto">
        <div
          class="text-[64px] leading-[77.45px] text-center font-semibold"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />

        <Charts charts={charts} />
      </div>
    </div>
  );
}

function Charts({ charts }: { charts: Props["charts"] }) {
  const values = charts.map((item) => item.value);
  const maxValue = Math.max(...values);

  const reversedValues = values.reverse();

  return (
    <div class="flex items-center justify-center gap-4 p-20 border-2 border-base-100 bg-primary h-[609px] w-full rounded-[40px] font-semibold leading-[19.36px] text-center">
      <ul class="flex flex-col items-center justify-start h-full pb-[60px]">
        {reversedValues.map((value) => (
          <li
            style={{ height: `${(value / maxValue) * 100}%` }}
            class="h-full"
          >
            {value / 1_000_000}M
          </li>
        ))}
      </ul>

      <ul class="flex items-center justify-between gap-[42px] w-full h-full">
        {charts?.map((chart) => (
          <li class="flex flex-col justify-end gap-2.5 w-full h-full">
            <div
              style={{
                height: `${(chart.value / maxValue) * 100}%`,
                background: chart.color,
              }}
              class="w-full"
            />
            <span>{chart.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
