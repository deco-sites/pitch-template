import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy description
 */
interface Logo {
  href: ImageWidget;
  width: number;
  height: number;
  description: string;
}

export interface Props {
  /**
   * @minItems 03
   * @maxItems 12
   */
  logos: Logo[];
}

export default function SectionLogos({ logos = [] }: Props) {
  if (!logos || logos.length === 0) return null;

  return (
    <section class="w-full min-h-[982px] flex items-center justify-center bg-secondary text-base-100">
      <div class="max-w-[872px] h-full">
        <div class="flex flex-wrap gap-12 items-center justify-center">
          {logos.map((logo) => (
            <Image
              src={logo.href ||
                "https://static.vecteezy.com/ti/vetor-gratis/p1/26135317-meta-social-meios-de-comunicacao-logotipo-simbolo-com-nome-preto-projeto-ilustracao-gratis-vetor.jpg"}
              width={logo.width || 160}
              height={logo.height || 80}
              alt={logo.description}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
