import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { GlobalText } from "site/loaders/text.ts";

/**
 * @titleBy description
 */
interface ImageCompetitor {
  /**
   * @default Image
   * @hide
   */
  "variation": "Image";
  source: ImageWidget;
  description: string;
  width?: number;
  height?: number;
}

interface TextCompetitor {
  /**
   * @default Text
   * @hide
   */
  "variation": "Text";
  element: GlobalText;
}

interface Competitor {
  type: ImageCompetitor | TextCompetitor;
  /**
   * @title Logo Positioning X
   * @exclusiveMinimum -5
   * @exclusiveMaximum 471
   */
  "x_positioning": number;
  /**
   * @title Logo Positioning Y
   * @exclusiveMinimum -271
   * @exclusiveMaximum 201
   */
  "y_positioning": number;
}

interface PositioningProps {
  /**
   * @title X-Axis - Left Text
   */
  leftText: string;
  /**
   * @title X-Axis - Right Text
   */
  rightText: string;
  /**
   * @title Y-Axis - Top Text
   */
  topText: string;
  /**
   * @title Y-Axis - Bottom Text
   */
  bottomText: string;
  /**
   * @minItems 03
   * @maxItems 08
   */
  competitors: Competitor[];
}

export interface Props {
  title: string;
  subtitle?: string;
  positioning?: PositioningProps;
}

const DEFAULT_PROPS: Props = {
  title: "Our brand",
  subtitle:
    "Made partnerships with VCs that believe in the pitch idea to form an stellar team",
  positioning: {
    leftText: "Highly Customizable",
    rightText: "Highly Opinionated",
    topText: "Affordable",
    bottomText: "Premium",
    competitors: [
      {
        "type": {
          "variation": "Image",
          "source":
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/8ad9f71d-7218-48ef-b225-c348cd169bfb/Figma.png",
          "description": "Figma",
          "width": 64,
          "height": 64,
        },
        "x_positioning": 10,
        "y_positioning": 165,
      },
      {
        "type": {
          "variation": "Image",
          "source":
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/cafddbfa-83d9-454b-b764-0396fa3ac59f/Canva.png",
          "description": "Canva",
          "width": 64,
          "height": 64,
        },
        "x_positioning": 85,
        "y_positioning": 55,
      },
      {
        "type": {
          "variation": "Image",
          "source":
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/89907d5f-1ddf-494d-8ffa-ae2d572b5333/Icon.png",
          "description": "Icon",
          "width": 64,
          "height": 64,
        },
        "y_positioning": -130,
        "x_positioning": 80,
      },
      {
        "type": {
          "variation": "Image",
          "source":
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/3bfa4b08-60cf-4673-9eaf-7cea26a1acb1/Google.png",
          "description": "Google",
          "width": 47,
          "height": 64,
        },
        "y_positioning": -270,
        "x_positioning": 200,
      },
      {
        "type": {
          "variation": "Image",
          "source":
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/16c5f2d8-939f-4bfd-b8db-8189ad1849ce/Second-Icon.png",
          "description": "Second Icon",
          "width": 64,
          "height": 51,
        },
        "x_positioning": 350,
        "y_positioning": 50,
      },
      {
        "type": {
          "variation": "Image",
          "source":
            "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/1e48de3f-21d9-4cc3-b9b6-4c59663b6544/PITCHTEMPLATE.png",
          "height": 60,
          "width": 120,
          "description": "Pitch Template",
        },
        "y_positioning": -265,
        "x_positioning": 400,
      },
    ],
  },
};

export default function Positioning(props: Props) {
  const { title, subtitle, positioning } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full min-h-[982px] flex items-center justify-center gap-14 px-24 py-20 bg-success text-base-100 relative">
      <div class="flex flex-col gap-6 max-w-[480px] text-success-content">
        <h2 class="text-[64px] leading-[80px] font-semibold font-inter">
          {title}
        </h2>
        <p class="font-normal text-2xl leading-[29.05px] font-inter">
          {subtitle}
        </p>
      </div>

      <div class="flex items-center justify-center relative p-6 border-2 border-base-100 bg-warning-content min-w-[760px] max-w-[760px] min-h-[760px] max-h-[760px] rounded-3xl">
        {positioning?.leftText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center -left-6 top-1/2 -rotate-90 absolute font-inter">
            {positioning.leftText}
          </span>
        )}

        {positioning?.rightText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center -right-6 top-1/2 -rotate-90 absolute font-inter">
            {positioning.rightText}
          </span>
        )}

        {positioning?.topText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center left-1/2 -translate-x-1/2 top-6 absolute font-inter">
            {positioning.topText}
          </span>
        )}

        {positioning?.bottomText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center left-1/2 -translate-x-1/2 bottom-6 absolute font-inter">
            {positioning.bottomText}
          </span>
        )}

        <div class="w-full h-full max-w-[530px] max-h-[530px] relative">
          <div class="w-full h-[2px] bg-base-100" />
          <div class="w-full h-[2px] bg-base-100 rotate-90" />

          {positioning?.competitors?.map((competitor) => {
            if (competitor.type.variation === "Image") {
              return (
                <Image
                  src={competitor.type.source}
                  alt={competitor.type.description}
                  width={competitor.type.width || 64}
                  height={competitor.type.height || 64}
                  loading="lazy"
                  style={{
                    translate:
                      `${competitor.x_positioning}px ${competitor.y_positioning}px`,
                  }}
                  class="absolute overflow-hidden"
                />
              );
            }

            return (
              <div
                style={{
                  translate:
                    `${competitor.x_positioning}px ${competitor.y_positioning}px`,
                }}
                dangerouslySetInnerHTML={{
                  __html: competitor.type.element.text,
                }}
                class="absolute overflow-hidden leading-8 text-[32.05px] font-normal text-center max-w-[120px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
