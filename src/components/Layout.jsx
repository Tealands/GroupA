import React from 'react';
import '../styles/common.css';

export default function Layout({ children }) {
  return (
    <div className="site-container">
      <header className="site-header">
        <div className="brand">GroupA</div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} GroupA</small>
      </footer>
    </div>
  );
}
