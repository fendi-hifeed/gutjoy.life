"use client";

import { useLang } from "@/contexts/LangContext";

export default function Commitment() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 md:px-16 bg-primary text-on-primary text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="material-symbols-outlined text-5xl mb-6 opacity-80">
          public
        </span>
        <h2 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl mb-4">
          {t.commitment.headline}
        </h2>
        <p className="font-[family-name:var(--font-body-lg)] text-lg text-primary-fixed-dim">
          {t.commitment.description}
        </p>
      </div>
    </section>
  );
}
