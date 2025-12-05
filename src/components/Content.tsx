import { Card, CardContent } from "@/components/ui/card";
import Placeholder from "@/components/Placeholder";
import NoteDetails from "@/components/NoteDetails";

import useNoteStore from "@/stores/useNoteStore";

export default function Content() {
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const isEditing = useNoteStore((state) => state.isEditing);

  return (
    <Card>
      <CardContent>
        {!selectedNote && !isEditing && <Placeholder />}

        {selectedNote && !isEditing && <NoteDetails />}
      </CardContent>
    </Card>
  );
}
