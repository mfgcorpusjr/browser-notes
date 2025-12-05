import { LucideNotepadText } from "lucide-react";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

export default function Placeholder() {
  return (
    <section className="md:h-[calc(100vh-200px)] flex justify-center items-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <LucideNotepadText />
          </EmptyMedia>
          <EmptyTitle>Browser Notes</EmptyTitle>
          <EmptyDescription>
            Create notes directly in your browser.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  );
}
