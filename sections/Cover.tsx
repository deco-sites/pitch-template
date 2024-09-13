import { GlobalText } from "site/loaders/text.ts";

export interface Props {
  companyName: GlobalText;
  breakCompanyName?: boolean;
  fontSize?: number;
  lineHeight?: number;
  tagline?: string;
}

const DEFAULT_PROPS: Props = {
  companyName: {
    text: "PITCH TEMPLATE",
  },
  fontSize: 221,
  lineHeight: 221,
  tagline: "The obvious choice for any founder",
};

export default function Cover(props: Props) {
  const {
    companyName,
    breakCompanyName,
    fontSize,
    lineHeight,
    tagline,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="flex flex-col items-center justify-center gap-8 w-full min-h-[982px] xl:max-w-[90%] mx-auto text-primary font-normal text-center">
      <h1
        style={{ fontSize, lineHeight: `${lineHeight}px` }}
        class={`${breakCompanyName ? "w-3/4" : "w-full"} text-center`}
      >
        {companyName.text}
      </h1>

      <h2 class="text-2xl font-inter leading-7">{tagline}</h2>
    </div>
  );
}
