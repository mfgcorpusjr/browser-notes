import clsx from "clsx";

import { ScrollArea } from "@/components/ui/scroll-area";
import NoteListItem from "@/components/NoteListItem";

import useNoteStore from "@/stores/useNoteStore";

export default function NoteList() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <ScrollArea
      className={clsx("md:h-[calc(100vh-200px)] pr-2", {
        "h-60": notes.length > 0,
      })}
    >
      {notes.length === 0 && (
        <p className="text-sm text-muted-foreground text-center">
          No notes yet
        </p>
      )}

      <div className="space-y-1">
        {notes.map((note) => (
          <NoteListItem key={note.id} note={note} />
        ))}
      </div>
    </ScrollArea>
  );
}
