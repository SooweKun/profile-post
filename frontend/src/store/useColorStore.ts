import { create } from "zustand";

interface ColorStore {
  fill: string;
  setFill: (color: string) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
  fill: "white",
  setFill: (color) => set({ fill: color }),
}));
