export type GlobalText = { text: string };

export interface Props {
  content: GlobalText;
}

const loader = ({ content }: Props): GlobalText => {
  return content;
};

export default loader;
