type LearningEntryProps = {
  topic: string;
  date: string;
  learned: string;
  confidence: number;
};

function LearningEntry({ topic,date,learned,confidence, }: LearningEntryProps) {
  return (
    <article>
      <h2>{topic}</h2>
      <p>Date: {date}</p>
      <p>{learned}</p>
      <p>Confidence: {confidence} / 5</p>
    </article>
  );
}

export default LearningEntry;