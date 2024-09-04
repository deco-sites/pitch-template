/**
 * @titleBy description
 */
interface Result {
  number: string;
  description: string;
}

export interface Props {
  /**
   * @minItems 02
   * @maxItems 06
   */
  results: Result[];
  variation?: "variation-1" | "variation-2";
}

const DEFAULT_PROPS: Props = {
  results: [
    { number: "1.250", description: "Presentations created by participants" },
    { number: "$10M", description: "Dollars raised by startups" },
    { number: "50%", description: "Of the startups got funded" },
    { number: "30m", description: "Average time to fill the template" },
    { number: "1.250", description: "Presentations created by participants" },
    { number: "1.250", description: "Presentations created by participants" },
  ],
  variation: "variation-1",
};

export default function Numbers(props: Props) {
  const { results, variation = "variation-1" } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full min-h-[982px] flex items-center justify-center px-24 py-20 bg-secondary font-inter text-base-100">
      {variation === "variation-1"
        ? (
          <ul class="flex flex-col gap-8 w-full">
            {results.map(({ number, description }) => (
              <li class="flex flex-row justify-between items-center gap-6 pb-8 border-b-2 border-base-100 last:border-none w-full">
                <span class="font-semibold text-8xl leading-[116.18px]">
                  {number}
                </span>
                <span class="font-normal text-[40px] leading-[48.41px] max-w-[424px]">
                  {description}
                </span>
              </li>
            ))}
          </ul>
        )
        : (
          <ul class="grid grid-cols-3 gap-x-6 gap-y-16 w-full">
            {results.map(({ number, description }) => (
              <li class="flex flex-col gap-6 pt-8 border-t-2 border-base-100">
                <span class="font-semibold text-7xl leading-[87.14px]">
                  {number}
                </span>
                <span class="font-normal text-[32px] leading-[38.73px]">
                  {description}
                </span>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
