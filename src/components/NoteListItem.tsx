import { type MouseEvent } from "react";
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
  const deleteNote = useNoteStore((state) => state.deleteNote);

  const handleDeleteNote = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteNote(note);
  };

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
        <h3 className="text-sm font-semibold line-clamp-1">{note.title}</h3>
        {note.content && (
          <div className="text-xs text-muted-foreground line-clamp-1">
            {note.content}
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          {formatDate(note.createdAt)}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon-sm"
        className="hover:text-destructive cursor-pointer"
        onClick={handleDeleteNote}
      >
        <LucideTrash2 />
      </Button>
    </div>
  );
}
