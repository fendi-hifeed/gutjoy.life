"use client";

import { useLang } from "@/contexts/LangContext";

const WHATSAPP_NUMBER = "6285286710314";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-4 bg-surface/90 backdrop-blur-md transition-all duration-300 ${
        typeof window !== "undefined" && window.scrollY > 20 ? "shadow-md py-2" : ""
      }`}
      id="main-nav"
    >
      <div className="flex items-center gap-2">
        <span className="font-[family-name:var(--font-brand)] text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-primary">Gut</span>
          <span className="text-secondary">Joy</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          className="font-[family-name:var(--font-label-md)] text-sm font-bold border-b-2 border-primary pb-1"
          href="#"
        >
          {t.navbar.home}
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#about"
        >
          {t.navbar.about}
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#partnership"
        >
          {t.navbar.partnership}
        </a>
        <a
          className="font-[family-name:var(--font-label-md)] text-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md"
          href="#contact"
        >
          {t.navbar.contact}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleLang}
          aria-label={`Switch language to ${lang === "id" ? "EN" : "ID"}`}
          className="hidden md:flex items-center justify-center font-[family-name:var(--font-label-md)] text-xs font-bold tracking-wider w-9 h-9 rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors"
        >
          {lang === "id" ? "EN" : "ID"}
        </button>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            lang === "id"
              ? "Halo GutJoy! Saya tertarik dengan program Join Us."
              : "Hello GutJoy! I'm interested in the Join Us program."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-sm px-6 py-2.5 rounded-lg hover:bg-primary-container transition-all scale-95 active:scale-90 hidden md:flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t.navbar.cta}
        </a>
        <button
          className="md:hidden text-on-surface p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
