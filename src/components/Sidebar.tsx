import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import NoteList from "@/components/NoteList";

export default function Sidebar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <NoteList />
      </CardContent>
    </Card>
  );
}
