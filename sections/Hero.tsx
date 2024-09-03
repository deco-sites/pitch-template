import type { TextArea } from "apps/admin/widgets.ts";

export interface Props {
  companyName: TextArea;
  fontSize: number;
  lineHeight: number;
  tagline?: string;
}

const DEFAULT_PROPS: Props = {
  companyName: "PITCH TEMPLATE",
  fontSize: 221.33,
  lineHeight: 221,
  tagline: "The obvious choice for any founder",
};

export default function HeroFlats(props: Props) {
  const { companyName, fontSize, lineHeight, tagline } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="flex flex-col items-center justify-center gap-8 w-full h-[982px] text-primary font-normal text-center">
      <h1 style={{ fontSize, lineHeight }}>{companyName}</h1>
      <h2 class="text-xl font-inter">{tagline}</h2>
    </div>
  );
}
