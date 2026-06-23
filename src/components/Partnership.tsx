import Image from "next/image";

const partnershipTiers = [
  {
    name: "Reseller",
    description: "Langkah awal untuk bisnis mandiri.",
    price: "Mulai 1Jt",
    isPopular: false,
    features: ["Modal terjangkau", "Materi promosi digital"],
    buttonText: "Pilih Paket",
    buttonStyle: "border-2 border-primary text-primary hover:bg-primary/5",
    whatsappText: "Halo GutJoy! Saya tertarik menjadi Reseller. Mohon info paket dan syaratnya.",
  },
  {
    name: "Agen",
    description: "Jangkauan lebih luas, margin lebih besar.",
    price: "Mulai 5Jt",
    isPopular: true,
    features: [
      "Harga khusus agen",
      "Support chiller (S&K)",
      "Brosur & Spanduk",
    ],
    buttonText: "Daftar Agen",
    buttonStyle: "bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant shadow-md",
    whatsappText: "Halo GutJoy! Saya tertarik menjadi Agen. Mohon info paket dan syaratnya.",
  },
  {
    name: "Distributor",
    description: "Kuasai area dan bangun jaringan.",
    price: "Hubungi Kami",
    isPopular: false,
    features: [
      "Eksklusivitas wilayah",
      "Margin maksimal",
      "Support marketing full",
    ],
    buttonText: "Konsultasi",
    buttonStyle: "border-2 border-primary text-primary hover:bg-primary/5",
    whatsappText: "Halo GutJoy! Saya tertarik menjadi Distributor. Mohon info paket dan syaratnya.",
  },
  {
    name: "Horeca",
    description: "Solusi B2B untuk bisnis Anda.",
    price: "Custom",
    isPopular: false,
    features: ["Kemasan bulk/grosir", "Suplai rutin terjamin"],
    buttonText: "Hubungi Tim",
    buttonStyle: "border-2 border-primary text-primary hover:bg-primary/5",
    whatsappText: "Halo GutJoy! Saya tertarik untuk kemitraan B2B/Horeca. Mohon info dan报价.",
  },
];

export default function Partnership() {
  return (
    <section
      className="py-20 px-4 md:px-16 bg-surface-container-low relative"
      id="partnership"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="bg-secondary/10 text-secondary font-[family-name:var(--font-label-md)] text-sm px-3 py-1 rounded-full inline-block mb-4">
            Peluang Bisnis
          </span>
          <h2 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface mb-4">
            Bergabung Bersama GutJoy
          </h2>
          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant max-w-2xl mx-auto">
            Pilih paket kemitraan yang sesuai dengan skala bisnis Anda dan mulai
            sebarkan kebahagiaan.
          </p>
        </div>

        <div className="mb-12">
          <Image
            alt="GutJoy Professional Product Lineup"
            width={1200}
            height={384}
            className="w-full h-64 md:h-96 object-cover rounded-2xl cloud-shadow"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmt960YK5WIjDoO4Rb3R5lMJJMKzvqPsqGH9wtzGwYrP2ZfieCPx7hQVmAjEKY7BEnUhlWbHyl_RUvsyiOdckCGehQFRPrpmJYwOlD6KcEbFcg-Ti6qH5Ot6Yz7aCOP6CXAT5IMG-CAX8KpNcwHbCW7hjFGgNZ2LWCZYchQcvgObvxTsjHTQ1qB9NqxBVzohnsWvboFBOMOdjiBy4GW1GF0gnpSQBn6X4mKsOdXL04h68eU8Q_6RDbrS3THFzDqXgVmpeLjz5j-uy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {partnershipTiers.map((tier, index) => {
            const whatsappLink = `https://wa.me/628971304418?text=${encodeURIComponent(tier.whatsappText)}`;
            return (
              <div
                key={index}
                className={`bg-surface-container-lowest rounded-3xl p-8 flex flex-col border ${
                  tier.isPopular
                    ? "border-2 border-secondary relative transform md:-translate-y-4"
                    : "border-surface-container-high"
                } cloud-shadow hover-lift`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full font-[family-name:var(--font-label-sm)] text-xs tracking-wide uppercase">
                    Populer
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <h4 className="font-[family-name:var(--font-headline-md)] text-xl text-on-surface mb-2">
                    {tier.name}
                  </h4>
                  <p className="font-[family-name:var(--font-body-md)] text-on-surface-variant mb-4">
                    {tier.description}
                  </p>
                  <div className="text-primary font-[family-name:var(--font-headline-lg)] text-2xl font-bold">
                    {tier.price}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        check_circle
                      </span>
                      <span className="font-[family-name:var(--font-body-md)] text-on-surface">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-[family-name:var(--font-label-md)] text-sm transition-colors mt-auto text-center ${tier.buttonStyle}`}
                >
                  {tier.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}