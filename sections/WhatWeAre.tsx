import Image from "apps/website/components/Image.tsx";

export interface Props {
  quote: string;
  fontSize: number;
  subtitle: string;
}

const DEFAULT_PROPS: Props = {
  quote: "We are the first step for every start up",
  fontSize: 72,
  subtitle:
    "Made partnerships with VCs that believe in the pitch idea to form an stellar team",
};

export default function WhatWeAre(props: Props) {
  const { quote, subtitle, fontSize = 72 } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full min-h-[982px] px-24 py-20 flex flex-col items-center justify-center font-inter relative">
      <Image
        src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/575b2b59-74db-489f-bb56-b037d304ea38/gradient.png"
        width={1184}
        height={693}
        alt="Gradient"
        loading="lazy"
        class="absolute w-full h-full left-1/2 -translate-x-1/2"
      />

      <div class="flex flex-col gap-8 text-primary text-center z-10">
        <h2
          class="max-w-[770px] leading-[79.2px] font-semibold mx-auto"
          style={{ fontSize }}
        >
          {quote}
        </h2>

        <p class="font-normal text-2xl leading-[29.05px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
