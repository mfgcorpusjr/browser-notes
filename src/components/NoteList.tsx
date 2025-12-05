import NoteListItem from "@/components/NoteListItem";

import useNoteStore from "@/stores/useNoteStore";

export default function NoteList() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <div className="space-y-1">
      {notes.length === 0 && (
        <p className="text-sm text-muted-foreground text-center">
          No notes yet
        </p>
      )}

      {notes.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </div>
  );
}
