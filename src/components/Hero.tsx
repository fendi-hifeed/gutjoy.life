import Image from "next/image";

export default function Hero() {
  const whatsappLink = "https://wa.me/628971304418?text=Halo%20GutJoy!%20Saya%20tertarik%20untuk%20membeli%20yogurt.%20Bisa%20info%20produk%20dan%20harga?";

  return (
    <section className="pt-[120px] pb-20 md:pb-20 px-4 md:px-16 soft-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative z-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full w-fit">
            <span className="text-primary font-[family-name:var(--font-label-md)] text-sm">
              GUTJOY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-secondary font-[family-name:var(--font-label-md)] text-sm">
              Happy Gut, Happy Day
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-headline-xl)] text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
            Kebahagiaan Dimulai dari{" "}
            <span className="text-primary">Usus yang Sehat</span>
          </h1>

          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant max-w-xl">
            Nikmati yogurt segar kaya probiotik setiap hari. Rasakan tekstur
            lembut dan manfaat kesehatan yang mengubah harimu menjadi lebih
            cerah.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-sm px-8 py-3.5 rounded-lg hover:bg-primary-container cloud-shadow transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Belanja Sekarang
            </a>
            <a
              href="#about"
              className="border-2 border-secondary text-secondary font-[family-name:var(--font-label-md)] text-sm px-8 py-3.5 rounded-lg hover:bg-secondary/5 transition-all"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-surface-container-highest">
            <Image
              alt="GutJoy Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh3fuAIDy1E1YmJHkpv1U-_iuQJeAMznHAdc2oVuJOWjL3TF6DEM83q4Sfbf7clqWzbEIU_hL3poGynNTV5TGQkkZs4eDsumG6Wkszf5n3pmdjju3z4L62ixywXEEn65k5T9H8jpxBeFM5mKQQHRoT78ZSTYAtouhVbJh3mEQ23ncNfqvCzGp02G75kPOf7qTMNutBVaEF1sJ6j0qdYyukL4gSPFvIzeNQRNEyDBikRVQLBKw9oTTrUqyh6EdrkIuuhj6S-fuKaaL1"
            />
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <div className="aspect-square md:aspect-[4/3] lg:aspect-square relative rounded-3xl overflow-hidden cloud-shadow group">
            <Image
              alt="GutJoy Campaign Image"
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs5EpJWWAU7aQQKJwXOVMNQDaJYrExysfM8dAmO3twfBmuIBefSEvmRxfBH6Z6_IZhN9VURZgJHcxpNcJ5yflfUza-ryHJ8ayPGubZ4VUhh9OPXG6cw2zfDSbFIs9NdZtFF6f1jCupr8a2jBVmaEIn6DikjBafBJ26-YMz0yUje1vftEAMlDkhg6v0lJgYRMe2H6GRUaALwQSZKfXiDfcYo-aWbG_K0MRmIsG6uu-i0DD2LRHrDRrfwXhqlCDYytduBQhFZFrJV_tD"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-surface-container-lowest p-4 rounded-2xl cloud-shadow flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined icon-fill">
                favorite
              </span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-headline-md)] text-xl md:text-2xl text-on-surface font-semibold">
                100%
              </p>
              <p className="font-[family-name:var(--font-label-sm)] text-xs text-on-surface-variant">
                Bahan Alami
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}