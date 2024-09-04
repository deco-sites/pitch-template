import { useId } from "site/sdk/useId.ts";
import Slider from "site/components/ui/Slider.tsx";
import { RichText } from "apps/admin/widgets.ts";

/**
 * @titleBy title
 */
interface Step {
  label: string;
  title: string;
  content: RichText;
  /**
   * @description Add a size in number: Default: 424.
   */
  width?: number;
}

export interface Props {
  title: string;
  /**
   * @minItems 02
   * @maxItems 06
   */
  steps: Step[];
}

const DEFAULT_PROPS: Props = {
  title:
    "In 2028, the Pitch Platform is the first and obvious choice for any startup founder",
  steps: [
    {
      label: "Stage 01",
      title: "Online awareness",
      content: "Campaign page Social media Public relations a Partners",
    },
    {
      label: "Stage 02",
      title: "Online awareness",
      content: "Campaign page Social media Public relations a Partners",
    },
    {
      label: "Stage 03",
      title: "Online awareness",
      content: "Campaign page Social media Public relations a Partners",
    },
    {
      label: "Stage 04",
      title: "Online awareness",
      content: "Campaign page Social media Public relations a Partners",
    },
  ],
};

export default function GoToMarket(props: Props) {
  const { title, steps } = { ...DEFAULT_PROPS, ...props };

  const id = useId();

  return (
    <div class="flex flex-col gap-20 w-full min-h-[982px] py-20 bg-secondary font-inter text-base-100 overflow-hidden">
      <h2 class="font-semibold text-[64px] leading-[80px] max-w-[920px] px-24">
        {title}
      </h2>

      <Slider
        rootId={id}
        class="carousel carousel-center w-screen scrollbar-none gap-6"
      >
        {steps?.map((step, index) => (
          <Slider.Item
            style={{ minWidth: step.width || 424 }}
            index={index}
            class="flex flex-col min-h-[274px] border border-base-100 rounded-2xl first:ml-24 last:mr-24"
          >
            <div class="flex flex-col gap-1 items-center justify-center p-6 w-full h-[110px] bg-base-100 text-base-content rounded-t-2xl text-center">
              <span class="font-normal text-base leading-[19.36px]">
                {step.label}
              </span>
              <h3 class="font-semibold text-[32px] leading-[38.73px]">
                {step.title}
              </h3>
            </div>

            <div class="bg-base-content h-full px-6 py-6 rounded-b-2xl">
              {step.content && (
                <div
                  class="font-normal text-2xl leading-[29.05px]"
                  dangerouslySetInnerHTML={{ __html: step.content || "" }}
                />
              )}
            </div>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}
