interface FirstVariation {
  /**
   * @default FirstVariation
   * @hide
   */
  "variation": "FirstVariation";
  type: "number" | "bullets";
}

interface SecondVariation {
  /**
   * @default SecondVariation
   * @hide
   */
  "variation": "SecondVariation";
  type: "number" | "nothing";
}

export interface Props {
  problemStatement: string;
  /**
   * @maxItems 04
   */
  subtopics: string[];
  variation: FirstVariation | SecondVariation;
}

const DEFAULT_PROPS: Props = {
  problemStatement:
    "Participants need a deck template to add information regarding their company",
  subtopics: [
    "They don't have time to build on their own",
    "They need a guide to better prepare their storytelling",
    "They need a guide to better prepare their storytelling",
  ],
  variation: {
    "variation": "FirstVariation",
    type: "number",
  },
};

export default function ProblemStatement(props: Props) {
  const { problemStatement, subtopics, variation } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  if (variation["variation"] === "SecondVariation") {
    const isNumberVariation = variation.type === "number";

    return (
      <div class="flex flex-col justify-center gap-20 w-full min-h-[982px] text-primary font-inter px-24">
        {problemStatement && (
          <h2 class="font-semibold text-7xl leading-[80px] max-w-[872px]">
            {problemStatement}
          </h2>
        )}

        <ul class="flex flex-row justify-between w-full gap-6 text-2xl leading-[29.05px] font-normal">
          {subtopics.map((subtopic, index) => (
            <li
              class={`flex flex-col gap-4 border-t-2 border-t-primary ${
                isNumberVariation ? "pt-6" : "pt-10"
              } pt-6`}
            >
              {isNumberVariation && (
                <span class="text-7xl leading-[87.14px]">{index + 1}.</span>
              )}
              <span>{subtopic}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div class="flex flex-col justify-center gap-20 w-full min-h-[982px] text-primary font-inter px-24">
      {problemStatement && (
        <h2 class="font-semibold text-[64px] leading-[77.45px] max-w-[760px]">
          {problemStatement}
        </h2>
      )}

      <ul
        class={`flex flex-col gap-8 text-2xl leading-[29.05px] ml-8 font-normal ${
          variation.type === "number" ? "list-decimal" : "list-disc"
        }`}
      >
        {subtopics.map((subtopic) => <li>{subtopic}</li>)}
      </ul>
    </div>
  );
}
