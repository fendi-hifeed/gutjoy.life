"use client";

import { useLang } from "@/contexts/LangContext";

export default function About() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 md:px-16 bg-surface-container-lowest" id="about">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
        <h2 className="font-[family-name:var(--font-label-md)] text-sm text-secondary tracking-widest uppercase">
          {t.about.label}
        </h2>
        <h3 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface">
          {t.about.headline}{" "}
          <span className="text-primary">{t.about.headlineAccent}</span>
        </h3>
        <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant">
          {t.about.description}
        </p>
      </div>
    </section>
  );
}
