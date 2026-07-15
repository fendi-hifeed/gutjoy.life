"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "@/contexts/LangContext";

interface SelectOption {
  value: string;
  label: string;
  badge?: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  required,
}: CustomSelectProps) {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearch("");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearch("");
    if (!isOpen) {
      setTimeout(() => {
        const parent = dropdownRef.current?.closest('[class*="overflow-y-auto"]');
        if (parent) {
          const rect = dropdownRef.current?.getBoundingClientRect();
          const parentRect = (parent as HTMLElement).getBoundingClientRect();
          if (rect && parentRect) {
            (parent as HTMLElement).scrollBy({
              top: rect.top - parentRect.top - 100,
              behavior: "smooth",
            });
          }
        } else {
          dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full px-4 py-3 rounded-lg border text-left font-[family-name:var(--font-body-md)] transition-all flex items-center justify-between ${
          isOpen
            ? "border-secondary ring-2 ring-secondary/20"
            : "border-surface-container-high hover:border-secondary/50"
        } ${
          selectedOption
            ? "bg-surface-container-lowest text-on-surface"
            : "bg-surface-container-lowest text-on-surface-variant"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className={selectedOption ? "text-on-surface" : "text-on-surface-variant"}>
            {selectedOption?.label || placeholder || (lang === "id" ? "-- Pilih --" : "-- Select --")}
          </span>
          {selectedOption?.badge && (
            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
              {selectedOption.badge}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-on-surface-variant transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-surface-container-lowest rounded-xl border border-surface-container-high cloud-shadow overflow-hidden"
          style={{ maxHeight: "240px" }}>
          <div className="p-2 border-b border-surface-container-high">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "id" ? "Cari..." : "Search..."}
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg text-sm text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary/20"
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-on-surface-variant text-center">
                {lang === "id" ? "Tidak ada hasil" : "No results found"}
              </div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-3 text-left font-[family-name:var(--font-body-md)] text-sm transition-colors flex items-center justify-between gap-2 ${
                    option.value === value
                      ? "bg-secondary/10 text-secondary"
                      : "text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded border flex items-center justify-center ${
                      option.value === value
                        ? "bg-secondary border-secondary"
                        : "border-surface-container-high"
                    }`}>
                      {option.value === value && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                    {option.label}
                  </div>
                  {option.badge && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                      {option.badge}
                    </span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {required && !value && (
        <input type="text" tabIndex={-1} autoComplete="off" required className="hidden" value={value} onChange={() => {}} />
      )}
    </div>
  );
}
