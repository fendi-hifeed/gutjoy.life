const features = [
  {
    icon: "science",
    title: "Kaya Probiotik",
    description:
      "Mengandung miliaran bakteri baik untuk menyeimbangkan mikroflora usus Anda.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: "restaurant",
    title: "Rasa Premium",
    description:
      "Tekstur selembut sutra dengan varian rasa buah asli yang menyegarkan.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: "eco",
    title: "Bahan Berkualitas",
    description:
      "Hanya menggunakan susu segar dan buah-buahan pilihan tanpa pengawet buatan.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: "directions_run",
    title: "Gaya Hidup Aktif",
    description:
      "Mendukung energi harian dan sistem imun untuk aktivitas tanpa henti.",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface mb-4">
            Lebih dari Sekadar Yogurt
          </h2>
          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant max-w-2xl mx-auto">
            Kebaikan alam dalam setiap sendok untuk mendukung gaya hidup
            aktifmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-2xl hover-lift"
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center ${feature.iconColor} mb-6`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {feature.icon}
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
