import { useEffect, useState } from "react";
import LearningEntry from "../components/LearningEntry";
import type { LearningEntryData } from "../types/LearningEntryData";

export default function EntriesPage() {
  const [entries, setEntries] = useState<LearningEntryData[]>([]);

  useEffect(() => {
    let ignore = false;

    async function loadEntries() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/entries"
        );

        const data: LearningEntryData[] =
          await response.json();

        if (!ignore) {
          setEntries(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadEntries();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <h1>Learning Entries</h1>

      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <>
          {entries.map((entry) => (
            <LearningEntry
              key={entry.id}
              entry={entry}
            />
          ))}
        </>
      )}
    </main>
  );
}