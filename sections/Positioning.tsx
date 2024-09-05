import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy description
 */
interface Competitor {
  source: ImageWidget;
  description: string;
  width?: number;
  height?: number;
  /**
   * @title Logo Positioning X
   */
  "x_positioning": number;
  /**
   * @title Logo Positioning Y
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
    competitors: [],
  },
};

export default function Positioning(props: Props) {
  const { title, subtitle, positioning } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full min-h-[982px] flex items-center justify-center gap-14 px-24 py-20 bg-secondary font-inter text-base-100">
      <div class="flex flex-col gap-6 max-w-[480px]">
        <h2 class="text-[64px] leading-[80px] font-semibold">
          {title}
        </h2>
        <p class="font-normal text-2xl leading-[29.05px]">{subtitle}</p>
      </div>

      <div class="flex items-center justify-center relative p-6 border-2 border-base-100 bg-primary min-w-[760px] max-w-[760px] min-h-[760px] max-h-[760px] rounded-3xl">
        {positioning?.leftText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center -left-6 top-1/2 -rotate-90 absolute">
            {positioning.leftText}
          </span>
        )}

        {positioning?.rightText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center -right-6 top-1/2 -rotate-90 absolute">
            {positioning.rightText}
          </span>
        )}

        {positioning?.topText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center left-1/2 -translate-x-1/2 top-6 absolute">
            {positioning.topText}
          </span>
        )}

        {positioning?.bottomText && (
          <span class="text-base-100 font-normal leading-[19.36px] text-center left-1/2 -translate-x-1/2 bottom-6 absolute">
            {positioning.bottomText}
          </span>
        )}

        <div class="w-full h-full max-w-[530px] max-h-[530px] relative">
          <div class="w-full h-[2px] bg-base-100" />
          <div class="w-full h-[2px] bg-base-100 rotate-90" />

          {positioning?.competitors?.map((competitor) => (
            <Image
              src={competitor.source}
              alt={competitor.description}
              width={competitor.width || 64}
              height={competitor.height || 64}
              loading="lazy"
              style={{
                translate:
                  `${competitor.x_positioning}px ${competitor.y_positioning}px`,
              }}
              class="absolute overflow-hidden"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
