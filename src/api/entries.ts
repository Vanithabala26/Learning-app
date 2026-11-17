import type { LearningEntryData } from "../types/LearningEntryData";
import { useLearningStore } from "../store/useLearningStore";

export async function loadEntries() {
  const response = await fetch(
    "http://localhost:3001/api/entries"
  );

  if (!response.ok) {
    throw new Error("Failed to load entries");
  }

  const data: LearningEntryData[] =
    await response.json();

  useLearningStore.getState().setEntries(data);
}