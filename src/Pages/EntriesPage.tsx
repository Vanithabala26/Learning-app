
import { useEffect, useState } from "react";
import LearningEntry from "../components/LearningEntry";
import { useLearningStore } from "../store/useLearningStore";
import { loadEntries } from "../api/entries";
import LearningEntryForm from "../components/LearningEntryForm";

export default function EntriesPage() {
  const entries = useLearningStore((state) => state.entries);

  const [loadError, setLoadError] = useState("");

  const handleLoadEntries = async () => {
    try {
      setLoadError("");
      await loadEntries();
    } catch (error) {
      console.error(error);
      setLoadError("Failed to load entries from backend.");
    }
  };

  useEffect(() => {
    handleLoadEntries();
  }, []);

  return (
    <main>
      <h1>Learning Entries</h1>

      <LearningEntryForm />

      <button type="button" onClick={handleLoadEntries}>
        Load from backend
      </button>

      {loadError && <p>{loadError}</p>}

      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <>
          {entries.map((entry) => (
            <LearningEntry key={entry.id} entry={entry} />
          ))}
        </>
      )}
    </main>
  );
}
