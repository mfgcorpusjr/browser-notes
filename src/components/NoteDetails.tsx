import useNoteStore from "@/stores/useNoteStore";
import { formatDate } from "@/utils";

export default function NoteDetails() {
  const selectedNote = useNoteStore((state) => state.selectedNote);

  if (!selectedNote) return;

  return (
    <section className="md:h-[calc(100vh-200px)]">
      <h3 className="font-semibold mb-2">{selectedNote.title}</h3>

      <div className="text-sm text-muted-foreground mb-8">
        {formatDate(selectedNote.createdAt)}
      </div>

      <div className="text-sm text-muted-foreground">
        {selectedNote.content}
      </div>
    </section>
  );
}
