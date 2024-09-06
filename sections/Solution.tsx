import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface ImageProps {
  source: ImageWidget;
  description: string;
  width?: number;
  height?: number;
  /**
   * @description Write as a percentage. Example: 100%
   */
  maxWidth?: string;
  /**
   * @description Enable this if you want to give loading priority to the image (Recommended only for images that appear at the beginning)
   */
  preload?: boolean;
}

export interface Props {
  solution: RichText;
  subtitle: string;
  image: ImageProps;
  variation?: "variation-1" | "variation-2";
}

const DEFAULT_PROPS: Props = {
  solution:
    '<p>Creating a template in the <a target="_blank" rel="noopener noreferrer nofollow" href="http://Deco.cx"><strong>Deco.cx</strong></a> platform solves this issue</p>',
  subtitle:
    "Made partnerships with VCs that believe in the pitch idea to form an stellar team",
  image: {
    source:
      "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/e2032a16-486b-461a-8ee5-c8a0acd08820/Frame.png",
    description: "Example image",
  },
  variation: "variation-1",
};

export default function Solution(props: Props) {
  const { solution, subtitle, image, variation } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div
      class={`flex justify-center p-20 min-h-[982px] w-full text-base-200 bg-warning font-inter ${
        variation === "variation-1"
          ? "flex-col items-start gap-20"
          : "flex-row items-center gap-6"
      }`}
    >
      <div class="flex flex-col gap-8 max-w-[760px]">
        <div
          class="font-semibold text-[64px] leading-[80px]"
          dangerouslySetInnerHTML={{ __html: solution }}
        />
        <h3 class="font-normal text-2xl leading-[29.05px]">{subtitle}</h3>
      </div>

      <Image
        src={image.source}
        width={image.width || 1320}
        height={image.height || 215}
        preload={image.preload}
        loading={image.preload ? "eager" : "lazy"}
        style={{ maxWidth: image.maxWidth }}
      />
    </div>
  );
}
