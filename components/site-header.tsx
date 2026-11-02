"use client";

import { useState } from "react";

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${solid ? " site-header--solid" : ""}`}>
      <a className="brand" href="/" aria-label="MEGH home" onClick={closeMenu}>
        <span className="brand-cloud"><span>MEGH</span><small>FRESH &amp; HEALTHY</small></span>
        <span className="brand-caption">OVERSEAS PRIVATE LTD.</span>
      </a>
      <nav id="site-navigation" className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Main navigation">
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/about" onClick={closeMenu}>About</a>
        <a href="/products" onClick={closeMenu}>Products</a>
        <a href="/markets" onClick={closeMenu}>Markets</a>
        <a className="nav-cta" href="/contact" onClick={closeMenu}>Contact <span>↗</span></a>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      ><i></i><i></i></button>
    </header>
  );
}
