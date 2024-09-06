import Image from "apps/website/components/Image.tsx";

export interface Props {
  quote: string;
  fontSize: number;
  subtitle: string;
  variation?: "variation-1" | "variation-2";
}

const DEFAULT_PROPS: Props = {
  quote: "We are the first step for every start up",
  fontSize: 72,
  subtitle:
    "Made partnerships with VCs that believe in the pitch idea to form an stellar team",
  variation: "variation-1",
};

export default function WhatWeAre(props: Props) {
  const { quote, subtitle, fontSize = 72, variation } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const isFirstVariation = variation === "variation-1";

  return (
    <div
      class={`w-full min-h-[982px] px-24 py-20 flex flex-col font-inter relative justify-center ${
        isFirstVariation ? "items-center text-center" : "items-start"
      }`}
    >
      <Image
        src={isFirstVariation
          ? "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/575b2b59-74db-489f-bb56-b037d304ea38/gradient.png"
          : "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/bee4cf02-9227-4390-bee0-df5d93f17609/gradient-2.png"}
        width={isFirstVariation ? 1184 : 1365}
        height={isFirstVariation ? 693 : 570.22}
        alt="Gradient"
        loading="lazy"
        class="absolute w-full h-full left-1/2 -translate-x-1/2"
      />

      <div
        class={`flex flex-col gap-8 text-primary z-10 justify-center ${
          isFirstVariation ? "items-center" : "items-start"
        }`}
      >
        <h2
          class={`${
            isFirstVariation
              ? "max-w-[770px] leading-[79.2px]"
              : "max-w-[872px] leading-[110px]"
          } font-semibold`}
          style={{ fontSize }}
        >
          {quote}
        </h2>

        <p
          class={`${
            isFirstVariation ? "w-full" : "max-w-[878px]"
          } font-normal text-2xl leading-[29.05px]`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
