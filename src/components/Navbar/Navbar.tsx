import { useMemo, useState } from "react";
import type { NavLinkItem } from "../../types";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useScrolled } from "../../hooks/useScrolled";
import { useScrollSpy } from "../../hooks/useScrollSpy";
// @ts-expect-error CSS side-effect imports are handled by the bundler.
import "./Navbar.css";

interface NavbarProps {
  brand: string;
  links: NavLinkItem[];
}

export default function Navbar({ brand, links }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();
  const scrolled = useScrolled(80);
  const activeId = useScrollSpy(useMemo(() => links.map((l) => l.id), [links]));

  return (
    <nav className={scrolled ? "nav-scrolled" : undefined}>
      <div className="nav-container">
        <a href="#" className="pinyon-script-regular" id="text-logo">
          {brand}
        </a>

        <ul className={`nav-lists${menuOpen ? " show" : ""}`}>
          {links.map((link) => (
            <li className="nav-list-item" key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link${activeId === link.id ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-button-container">
          <button
            id="hamburger"
            type="button"
            className={`nav-button${menuOpen ? " open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <button
            id="dark-mode-btn"
            type="button"
            className="nav-button"
            aria-label="Toggle dark mode"
            aria-pressed={isDark}
            onClick={toggleDark}
          >
            <i className="fa-solid fa-moon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
