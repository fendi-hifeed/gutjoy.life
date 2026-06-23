export default function About() {
  return (
    <section
      className="py-20 px-4 md:px-16 bg-surface-container-lowest"
      id="about"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
        <h2 className="font-[family-name:var(--font-label-md)] text-sm text-secondary tracking-widest uppercase">
          Tentang GutJoy
        </h2>
        <h3 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface">
          Kami Percaya Kesehatan Harus Menjadi{" "}
          <span className="text-primary">Kebiasaan yang Menyenangkan</span>
        </h3>
        <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant">
          GutJoy hadir untuk membuktikan bahwa menjaga kesehatan usus tidak
          perlu membosankan. Dengan perpaduan rasa yang lezat dan manfaat
          probiotik yang kuat, kami membuat rutinitas sehat menjadi momen yang
          paling Anda tunggu setiap hari.
        </p>
      </div>
    </section>
  );
}
