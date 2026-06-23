"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-4 bg-surface/90 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : ""
      }`}
      id="main-nav"
    >
      <div className="flex items-center gap-2">
        <span className="font-[family-name:var(--font-headline-md)] text-xl md:text-2xl font-bold tracking-tight text-primary">
          GutJoy
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          className="font-[family-name:var(--font-label-md)] text-sm font-bold border-b-2 border-primary pb-1"
          href="#"
        >
          Home
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#about"
        >
          About
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#partnership"
        >
          Partnership
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#contact"
        >
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-sm px-6 py-2.5 rounded-lg hover:bg-primary-container transition-all scale-95 active:scale-90 hidden md:block">
          Join Us
        </button>
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-2">
            <a
              className="font-[family-name:var(--font-label-md)] text-sm font-bold border-b-2 border-primary pb-2"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors py-2"
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors py-2"
              href="#partnership"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partnership
            </a>
            <a
              className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors py-2"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-sm px-6 py-2.5 rounded-lg mt-2">
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
