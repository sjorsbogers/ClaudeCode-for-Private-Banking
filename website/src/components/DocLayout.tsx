import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import OnThisPage from "./OnThisPage";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      {/* Body: sidebar + content + TOC */}
      <div className="flex">
        {/* Left sidebar — fixed, scrolls independently */}
        <aside className="hidden lg:block fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] overflow-y-auto border-r border-[var(--border)] bg-[var(--bg-subtle)] z-30">
          <Sidebar />
        </aside>

        {/* Main content — offset for both sidebars */}
        <div className="w-full lg:pl-64 xl:pr-48">
          <main className="max-w-3xl mx-auto px-6 py-12">
            {children}
          </main>
        </div>

        {/* Right TOC — fixed, sticky */}
        <aside className="hidden xl:block fixed top-16 right-0 w-48 h-[calc(100vh-4rem)] overflow-y-auto z-30">
          <OnThisPage />
        </aside>
      </div>
    </div>
  );
}
