import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

import { type Note } from "@/types";

type NoteStore = {
  notes: Note[];
  selectedNote?: Note;
  isEditing?: boolean;

  createNote: () => void;
  selectNote: (note: Note) => void;
  deleteNote: (note: Note) => void;
};

const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [],

      createNote: () => {
        const note: Note = {
          id: uuidv4(),
          title: "Untitled note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: Date.now(),
        };

        set((state) => ({
          notes: [note, ...state.notes],
          selectedNote: note,
          isEditing: true,
        }));
      },

      selectNote: (note: Note) => {
        set({ selectedNote: note, isEditing: false });
      },

      deleteNote: (note: Note) => {
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== note.id),
          selectedNote:
            state.selectedNote?.id === note.id ? undefined : state.selectedNote,
          isEditing:
            state.selectedNote?.id === note.id ? false : state.isEditing,
        }));
      },
    }),
    { name: "notes" }
  )
);

export default useNoteStore;
