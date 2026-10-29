import type { LearningEntryData } from "../types/LearningEntryData";

type LearningEntryProps = {
  entry: LearningEntryData;
};

function LearningEntry({ entry }: LearningEntryProps) {
  return (
    <article className="learning-entry">
      <h2>{entry.topic}</h2>
      <p>Date: {entry.date}</p>
      <p>{entry.learned}</p>
      <p>Confidence: {entry.confidence} / 5</p>
      <p>Category: {entry.category}</p>
    </article>
  );
}

export default LearningEntry;
