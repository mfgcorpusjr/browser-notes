import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { type Note } from "@/types";

type NoteStore = {
  notes: Note[];
  selectedNote?: Note;
  isEditing?: boolean;

  createNote: () => void;
  selectNote: (note: Note) => void;
};

const useNoteStore = create<NoteStore>((set) => ({
  notes: [],

  createNote: () => {
    const note: Note = {
      id: uuidv4(),
      title: "Untitled note",
      createdAt: Date.now(),
    };

    set((state) => ({
      notes: [note, ...state.notes],
      selectedNote: note,
      isEditing: true,
    }));
  },

  selectNote: (note: Note) => {
    set({ selectedNote: note });
  },
}));

export default useNoteStore;
