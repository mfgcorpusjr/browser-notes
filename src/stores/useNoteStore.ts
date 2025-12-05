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
            "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam justo lectus commodo augue arcu dignissim velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend turpis fames primis vulputate ornare sagittis vehicula praesent dui felis venenatis ultrices proin libero feugiat tristique accumsan maecenas potenti ultricies habitant morbi senectus netus suscipit auctor curabitur facilisi cubilia curae hac habitasse platea dictumst lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam justo lectus commodo augue arcu dignissim velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend turpis fames primis vulputate ornare sagittis vehicula praesent dui felis venenatis ultrices proin libero feugiat tristique accumsan maecenas potenti ultricies habitant morbi senectus netus suscipit auctor curabitur facilisi cubilia curae hac habitasse platea dictumst lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam. finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam. finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam. finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam.",
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
