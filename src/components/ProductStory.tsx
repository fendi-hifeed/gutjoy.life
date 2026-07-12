"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LangContext";

export default function ProductStory() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 md:px-16 bg-surface" id="product-story">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden cloud-shadow">
          <Image
            alt="GutJoy Yogurt Product"
            fill
            className="w-full h-full object-cover"
            src="/Gambar tengah.png"
          />
        </div>

        <div className="flex flex-col gap-6 max-w-xl">
          <span className="font-[family-name:var(--font-label-md)] text-sm text-secondary tracking-widest uppercase">
            {t.productStory.label}
          </span>
          <h2 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface leading-tight">
            {t.productStory.headline}{" "}
            <span className="text-primary">{t.productStory.headlineAccent}</span>
          </h2>
          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant">
            {t.productStory.description}
          </p>
        </div>
      </div>
    </section>
  );
}
