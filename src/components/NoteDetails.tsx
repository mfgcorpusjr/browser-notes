import { ScrollArea } from "@/components/ui/scroll-area";

import useNoteStore from "@/stores/useNoteStore";
import { formatDate } from "@/utils";

export default function NoteDetails() {
  const selectedNote = useNoteStore((state) => state.selectedNote);

  if (!selectedNote) return;

  return (
    <ScrollArea className="md:h-[calc(100vh-152px)] pr-2">
      <h3 className="font-semibold mb-2">{selectedNote.title}</h3>

      <div className="text-sm text-muted-foreground mb-8">
        {formatDate(selectedNote.createdAt)}
      </div>

      <div className="text-sm text-muted-foreground">
        {selectedNote.content}
      </div>
    </ScrollArea>
  );
}
