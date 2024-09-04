import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
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

const DEFAULT_PROPS: Props = {
  source:
    "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/b1b7e93a-aa4b-4938-a05c-b0bb3d383d9c/image.png",
  description: "Example Image",
};

export default function ImageSection(props: Props) {
  const { source, description, width = 1320, height = 682, maxWidth = "100%" } =
    { ...DEFAULT_PROPS, ...props };

  return (
    <div class="flex items-center justify-center px-24 w-full min-h-[982px] bg-primary text-base-100">
      <Image
        src={source}
        alt={description}
        width={width}
        height={height}
        style={{ maxWidth }}
      />
    </div>
  );
}
