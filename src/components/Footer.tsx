export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-20 px-4 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 bg-surface-container border-t border-surface-variant"
    >
      <div className="flex flex-col gap-4">
        <div className="font-[family-name:var(--font-headline-md)] text-2xl md:text-3xl font-bold">
          <span className="text-primary">Gut</span><span className="text-secondary">Joy</span>
        </div>
        <p className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant max-w-sm">
          Happy Gut, Happy Day. Memberikan kebaikan probiotik untuk keseharian
          yang lebih menyenangkan.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="font-[family-name:var(--font-label-md)] text-sm text-on-surface font-semibold mb-2">
          Tautan Pantas
        </h5>
        <a
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
          href="#"
        >
          Shipping Info
        </a>
        <a
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
          href="#"
        >
          FAQ
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="font-[family-name:var(--font-label-md)] text-sm text-on-surface font-semibold mb-2">
          Alamat
        </h5>
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-secondary mt-1">
            location_on
          </span>
          <p className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant">
            HiFeed Technoplex
            <br />
            Jl. Spatirasmi No. 52
            <br />
            Kab. Bandung Barat
            <br />
            Jawa Barat
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:items-end justify-between">
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
        <div className="font-[family-name:var(--font-body-md)] text-base text-secondary mt-8 md:mt-0 text-left md:text-right">
          © 2024 GutJoy Life. Happy Gut, Happy Day. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
