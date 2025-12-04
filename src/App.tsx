import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-red-100">Sidebar</div>
        <div className="flex-2 bg-green-100">Content</div>
      </div>
    </main>
  );
}
