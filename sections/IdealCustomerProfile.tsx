export interface Props {
  title: string;
  /**
   * @minItems 01
   * @maxItems 12
   */
  tags: string[];
}

const DEFAULT_PROPS: Props = {
  title: "Built for young professionals looking for an unprecedented future",
  tags: [
    "Age: 20 - 25",
    "Developers",
    "Engineers",
    "Designers",
    "Top students",
    "Graduated on the best universities",
    "Top students",
    "Based in Brasil",
  ],
};

export default function IdealCustomerProfile(props: Props) {
  const { title, tags = [] } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="flex items-center w-full min-h-[982px] px-24 py-20 font-inter">
      <div class="flex flex-col gap-20 max-w-[760px] w-full leading-[80px] font-semibold">
        <h2 class="text-[64px] text-primary">{title}</h2>

        <ul class="flex flex-wrap items-center w-full gap-2">
          {tags?.map((tag) => (
            <li class="flex items-center justify-center text-center text-base-100 h-12 bg-primary p-4 text-2xl leading-[25px] rounded-2xl pointer-events-none">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
