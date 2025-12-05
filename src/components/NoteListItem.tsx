import clsx from "clsx";
import { LucideTrash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { type Note } from "@/types";
import { formatDate } from "@/utils";
import useNoteStore from "@/stores/useNoteStore";

type NoteListItemProps = {
  note: Note;
};

export default function NoteListItem({ note }: NoteListItemProps) {
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const selectNote = useNoteStore((state) => state.selectNote);

  return (
    <div
      className={clsx(
        "flex items-center gap-2 p-2 rounded hover:bg-muted cursor-pointer",
        {
          "bg-muted": note.id === selectedNote?.id,
        }
      )}
      onClick={() => selectNote(note)}
    >
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-sm font-semibold">{note.title}</span>
        {note.content && (
          <span className="text-xs text-muted-foreground">{note.content}</span>
        )}
        <span className="text-xs text-muted-foreground">
          {formatDate(note.createdAt)}
        </span>
      </div>

      <Button
        variant="outline"
        size="icon-sm"
        className="hover:text-destructive cursor-pointer"
      >
        <LucideTrash2 />
      </Button>
    </div>
  );
}
