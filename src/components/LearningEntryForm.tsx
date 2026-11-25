import { useState } from "react";
import { loadEntries } from "../api/entries";

export default function LearningEntryForm() {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [learned, setLearned] = useState("");
  const [confidence, setConfidence] = useState(3);
  const [studyMethod, setStudyMethod] = useState("");
  const [message, setMessage] = useState("");

async function handleSave() {
  setMessage("");

  const newEntry = {
    topic,
    date,
    learned,
    confidence,
    study_method: studyMethod,
  };

  try {
    const response = await fetch(
      "http://localhost:3001/api/entries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      }
    );

    if (!response.ok) {
      setMessage(
        response.status === 400
          ? "Could not save the entry. Check your input."
          : "The server could not save the entry. Please try again."
      );
      return;
    }
  } catch {
    setMessage(
      "Could not confirm the save. Check the connection and reload the list before trying again."
    );
    return;
  }

  try {
    await loadEntries();

    setMessage("Entry saved successfully.");

    setTopic("");
    setDate("");
    setLearned("");
    setConfidence(3);
    setStudyMethod("");
  } catch {
    setMessage(
      "Entry was saved, but the list could not be refreshed."
    );
  }
}

  return (
    <section>
      <h2>Add Learning Entry</h2>

      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />

      <textarea
        placeholder="What did you learn?"
        value={learned}
        onChange={(e) => setLearned(e.target.value)}
      />

      <br />

      <input
        type="number"
        min="1"
        max="5"
        value={confidence}
        onChange={(e) =>
          setConfidence(Number(e.target.value))
        }
      />

      <br />

      <input
        type="text"
        placeholder="Study Method"
        value={studyMethod}
        onChange={(e) =>
          setStudyMethod(e.target.value)
        }
      />

      <br />

      <button
        type="button"
        onClick={handleSave}
      >
        Add Entry
      </button>

      {message && <p>{message}</p>}
    </section>
  );
}