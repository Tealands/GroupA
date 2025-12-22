import React from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col min-h-screen">
      <header className="flex items-center justify-between py-4">
        <div className="brand text-lg">GroupA</div>
        <nav className="hidden md:flex gap-4 text-sm text-gray-300">
          <a href="#">Home</a>
          <a href="#">Docs</a>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="py-6 text-center text-gray-500 text-sm">
        <small>© {new Date().getFullYear()} GroupA</small>
      </footer>
    </div>
  );
}
