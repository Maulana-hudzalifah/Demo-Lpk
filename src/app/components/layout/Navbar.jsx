"use client";

import { useState } from "react";
import { identitas, menu, navbar, linkWhatsApp } from "../../data/site";

// Bilah navigasi atas: nama LPK, menu ke bagian halaman, dan tombol WhatsApp.
export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const tutupMenu = () => setMenuTerbuka(false);

  return (
    <header className="navbar">
      <div className="wadah navbar-isi">
        <a href="#" className="navbar-logo" onClick={tutupMenu}>
          {identitas.namaSingkat}
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuTerbuka}
          aria-controls="menu-utama"
          aria-label={menuTerbuka ? navbar.labelTutupMenu : navbar.labelBukaMenu}
          onClick={() => setMenuTerbuka(!menuTerbuka)}
        >
          <span className={menuTerbuka ? "ikon-menu terbuka" : "ikon-menu"} />
        </button>

        <nav id="menu-utama" className={menuTerbuka ? "navbar-menu terbuka" : "navbar-menu"}>
          {menu.map((item) => (
            <a key={item.id} href={item.href} className="navbar-tautan" onClick={tutupMenu}>
              {item.label}
            </a>
          ))}
          <a
            href={linkWhatsApp}
            className="tombol tombol-utama navbar-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {navbar.tombolWa}
          </a>
        </nav>
      </div>
    </header>
  );
}
