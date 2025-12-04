import { LucidePlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Browser Notes</h1>

        <Button>
          <LucidePlus /> New Note
        </Button>
      </div>
    </nav>
  );
}
