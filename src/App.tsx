import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto p-4 flex-1 flex flex-col md:flex-row gap-4">
        <div className="md:flex-1">
          <Sidebar />
        </div>
        <div className="md:flex-2">
          <Content />
        </div>
      </div>
    </main>
  );
}
