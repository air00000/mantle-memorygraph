import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlphaCouncil Dashboard",
  description: "On-chain observation and memory analytics dashboard",
};

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/observations", label: "Observations" },
  { href: "/memory", label: "Memory" },
  { href: "/agents", label: "Agents" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-60 border-r border-slate-200 bg-white flex flex-col fixed h-screen">
            <div className="p-6 border-b border-slate-100">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-mantle-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-sm font-semibold text-slate-800 tracking-tight">
                  MemoryGraph
                </span>
              </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 leading-relaxed">
                This is a neutral observation, not a trading recommendation.
              </p>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 ml-60">
            <header className="h-16 border-b border-slate-200 bg-white flex items-center px-8 sticky top-0 z-10">
              <h1 className="text-sm font-medium text-slate-600">
                AlphaCouncil Dashboard
              </h1>
            </header>
            <div className="p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
    >
      {children}
    </Link>
  );
}
