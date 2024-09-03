import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy linkedin
 */
interface Member {
  image: {
    source: ImageWidget;
    description: string;
  };
  linkedin: string;
}

export interface Props {
  title: string;
  subtitle?: string;
  /**
   * @minItems 01
   * @maxItems 16
   */
  members: Member[];
}

const DEFAULT_PROPS: Props = {
  title: "Meet the team",
  members: [
    {
      image: {
        source:
          "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/79d6ae02-de2f-4a63-b738-4d394e764026/image-15.png",
        description: "First Banner",
      },
      linkedin: "#",
    },
    {
      image: {
        source:
          "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/79d6ae02-de2f-4a63-b738-4d394e764026/image-15.png",
        description: "First Banner",
      },
      linkedin: "#",
    },
    {
      image: {
        source:
          "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/79d6ae02-de2f-4a63-b738-4d394e764026/image-15.png",
        description: "First Banner",
      },
      linkedin: "#",
    },
    {
      image: {
        source:
          "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/pitch-template/79d6ae02-de2f-4a63-b738-4d394e764026/image-15.png",
        description: "First Banner",
      },
      linkedin: "#",
    },
  ],
};

export default function Team(props: Props) {
  const { title, subtitle, members = [] } = { ...DEFAULT_PROPS, ...props };

  if (!members || members.length === 0) return null;

  return (
    <div class="flex flex-col gap-12 items-center justify-center px-24 py-20 min-h-[982px] w-full text-base-100 bg-primary font-inter">
      <div class="flex flex-col gap-2 w-full">
        <h2 class="font-bold text-[64px] leading-[77.45px] max-w-[648px]">
          {title}
        </h2>
        {subtitle && (
          <h3 class="font-normal text-2xl leading-[29.05px]">{subtitle}</h3>
        )}
      </div>

      <div class="grid grid-cols-4 items-center gap-6 w-full group">
        {members.map((member) => (
          <a
            href={member.linkedin}
            target="_blank"
            class="w-full h-full rounded-3xl group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={member.image.source}
              alt={member.image.description}
              width={312}
              height={312}
              class="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
