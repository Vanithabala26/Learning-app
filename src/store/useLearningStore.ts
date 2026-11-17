import { create } from "zustand";
import type { LearningEntryData } from "../types/LearningEntryData";

type LearningStore = {
  entries: LearningEntryData[];
  setEntries: (entries: LearningEntryData[]) => void;
};

export const useLearningStore = create<LearningStore>((set) => ({
  entries: [],
  setEntries: (entries) => set({ entries }),
}));