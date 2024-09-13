import { GlobalText } from "site/loaders/text.ts";

interface Link {
  text: string;
  href: string;
}

export interface Props {
  title: GlobalText;
  /**
   * @minItems 01
   * @maxItems 05
   */
  links: Link[];
}

const DEFAULT_PROPS: Props = {
  title: {
    text: "PITCH TEMPLATE",
  },
  links: [
    {
      text: "pitchtemplate.com",
      href: "#",
    },
    {
      text: "johndoe@pitchtemplate.com",
      href: "#",
    },
    {
      text: "linkedin.com/johndoe",
      href: "#",
    },
  ],
};

export default function Footer(props: Props) {
  const { title, links = [] } = { ...DEFAULT_PROPS, ...props };

  return (
    <footer class="w-full min-h-[982px] flex flex-col gap-12 items-start justify-center px-24 text-primary">
      <div
        class="max-w-lg text-[88.53px] leading-[88.4px] font-normal"
        dangerouslySetInnerHTML={{ __html: title.text }}
      />

      <ul class="flex flex-col gap-4 text-lg font-inter">
        {links.map((link) => (
          <li>
            <a href={link.href} target="_blank">{link.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
