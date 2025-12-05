import { LucidePencil } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import useNoteStore from "@/stores/useNoteStore";
import { formatDate } from "@/utils";

export default function NoteDetails() {
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const setIsEditing = useNoteStore((state) => state.setIsEditing);

  if (!selectedNote) return;

  return (
    <ScrollArea className="md:h-[calc(100vh-152px)] pr-2">
      <section className="flex flex-col">
        <h3 className="font-semibold mb-2">{selectedNote.title}</h3>

        <div className="text-sm text-muted-foreground mb-8">
          {formatDate(selectedNote.createdAt)}
        </div>

        <div className="text-sm text-muted-foreground mb-8">
          {selectedNote.content}
        </div>

        <Button
          size="sm"
          variant="outline"
          className="self-end absolute md:mr-2"
          onClick={() => setIsEditing(true)}
        >
          <LucidePencil /> Edit Note
        </Button>
      </section>
    </ScrollArea>
  );
}
