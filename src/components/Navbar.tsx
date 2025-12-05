import { LucidePlus } from "lucide-react";

import { Button } from "@/components/ui/button";

import useNoteStore from "@/stores/useNoteStore";

export default function Navbar() {
  const createNote = useNoteStore((state) => state.createNote);

  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Browser Notes</h1>

        <Button onClick={createNote}>
          <LucidePlus /> New Note
        </Button>
      </div>
    </nav>
  );
}
