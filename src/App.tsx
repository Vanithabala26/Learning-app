import { useEffect, useState } from "react";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LearningEntry from "./components/LearningEntry";
import type { LearningEntryData } from "./types/LearningEntryData";


  function App() {
  const studentName: string = "Vanithashri Balasubramanian";

const [entries, setEntries] = useState<LearningEntryData[]>([]);

  useEffect(() => {
    let ignore = false;

    async function loadEntries() {
      try {
        const response = await fetch("http://localhost:3001/api/entries");
        const data = await response.json();

        if (!ignore) {
          setEntries(data);
        }
      } catch (error) {
        console.error("Failed to load entries:", error);
      }
    }

    loadEntries();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <h1>My Learning</h1>
      <p>Fullstack Project</p>
      <p>Student: {studentName}</p>

      <h2>Learning Entries</h2>

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

export default App;

