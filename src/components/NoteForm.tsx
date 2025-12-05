import { useState, type FormEvent } from "react";
import { LucideX, LucideSave } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import useNoteStore from "@/stores/useNoteStore";

export default function NoteForm() {
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const setIsEditing = useNoteStore((state) => state.setIsEditing);
  const updateNote = useNoteStore((state) => state.updateNote);

  const [title, setTitle] = useState(selectedNote?.title);
  const [content, setContent] = useState(selectedNote?.content);

  const handleUpdateNote = (e: FormEvent) => {
    e.preventDefault();

    if (selectedNote && title) {
      updateNote({
        ...selectedNote,
        title,
        content,
      });
    }
  };

  return (
    <form
      className="md:h-[calc(100vh-152px)] flex flex-col gap-4"
      onSubmit={handleUpdateNote}
    >
      <Input
        type="text"
        placeholder="Note title"
        className="font-semibold border-0 focus-visible:ring-0"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        placeholder="Write your note here..."
        className="flex-1 text-sm text-muted-foreground placeholder-muted-foreground min-h-40 border-0 focus-visible:ring-0"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="self-end space-x-4">
        <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
          <LucideX /> Cancel
        </Button>

        <Button size="sm" disabled={title?.trim().length === 0}>
          <LucideSave /> Save
        </Button>
      </div>
    </form>
  );
}
