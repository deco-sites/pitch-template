export interface Props {
  title: string;
  serviceableObtainableMarket: number;
  serviceableAvailableMarket: number;
  totalAddressableMarket: number;
}

const DEFAULT_PROPS: Props = {
  title:
    "In 2028, the Pitch Platform is the first and obvius choice for any startup founder",
  serviceableAvailableMarket: 1,
  serviceableObtainableMarket: 10,
  totalAddressableMarket: 100,
};

export default function SectionMarket(props: Props) {
  const {
    title,
    serviceableAvailableMarket,
    serviceableObtainableMarket,
    totalAddressableMarket,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full min-h-[982px] flex flex-col items-start justify-center px-24 py-20 gap-20 font-inter">
      <div class="max-w-[760px] text-[64px] leading-[80px] text-primary font-semibold">
        <h2>{title}</h2>
      </div>

      <div class="w-full h-full flex">
        <div class="w-full h-full min-w-[480px] max-w-[480px] min-h-[500px] max-h-[500px] bg-secondary-content border-2 border-base-100 absolute left-[120px] rounded-[40px] flex flex-col items-start justify-between">
          <p class="w-full max-w-[178px] ml-[155px] p-6 text-2xl leading-[29.05px] text-neutral">
            Serviceable Available Market
          </p>

          <p class="text-5xl text-neutral font-semibold ml-[155px] p-6">
            {`$${serviceableAvailableMarket}B`}
          </p>
        </div>

        <div class="w-full h-full min-w-[180px] max-w-[180px] min-h-[500px] max-h-[500px] bg-primary-content border-2 border-base-100 relative left-[1px] rounded-[40px] flex flex-col items-start justify-between">
          <p class="p-6 text-2xl leading-[29.05px] text-neutral">
            Serviceable Obtainable Market
          </p>

          <p class="text-5xl text-neutral font-semibold p-6">
            {`$${serviceableObtainableMarket}B`}
          </p>
        </div>

        <div class="w-full h-full min-w-[880px] max-w-[880px] min-h-[500px] max-h-[500px] bg-accent-content border-2 border-base-100 left-[720px] rounded-[40px] flex flex-col items-start justify-between">
          <p class="max-w-[170px] p-6 ml-[323px] text-2xl leading-[29.05px] text-neutral">
            Total Addressable Market
          </p>

          <p class="text-5xl text-neutral font-semibold p-6 ml-[323px]">
            {`$${totalAddressableMarket}B`}
          </p>
        </div>
      </div>
    </div>
  );
}
