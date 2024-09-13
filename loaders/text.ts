import { RichText } from "apps/admin/widgets.ts";

export type GlobalText = { text: RichText };

export interface Props {
  content: GlobalText;
}

const loader = ({ content }: Props): GlobalText => {
  return content;
};

export default loader;
