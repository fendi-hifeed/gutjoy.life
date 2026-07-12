"use client";

import { useLang } from "@/contexts/LangContext";

export default function Features() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface mb-4">
            {t.features.headline}
          </h2>
          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant max-w-2xl mx-auto">
            {t.features.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-2xl hover-lift"
            >
              <div
                className={`w-14 h-14 rounded-xl ${
                  index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                } flex items-center justify-center ${
                  index % 2 === 0 ? "text-primary" : "text-secondary"
                } mb-6`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {["science", "restaurant", "eco", "directions_run"][index]}
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-headline-md)] text-xl text-on-surface mb-3">
                {feature.title}
              </h4>
              <p className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
