import type { RichText } from "apps/admin/widgets.ts";

export interface Props {
  companyName: RichText;
  fontSize?: number;
  lineHeight?: number;
  tagline?: string;
}

const DEFAULT_PROPS: Props = {
  companyName: "PITCH TEMPLATE",
  fontSize: 221,
  lineHeight: 221,
  tagline: "The obvious choice for any founder",
};

export default function Cover(props: Props) {
  const { companyName, fontSize, lineHeight, tagline } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="flex flex-col items-center justify-center gap-8 w-full min-h-[982px] xl:max-w-[90%] mx-auto text-primary font-normal text-center">
      <div
        style={{ fontSize, lineHeight: `${lineHeight}px` }}
        dangerouslySetInnerHTML={{ __html: companyName }}
        class="text-center"
      />

      <h2 class="text-2xl font-inter leading-7">{tagline}</h2>
    </div>
  );
}
