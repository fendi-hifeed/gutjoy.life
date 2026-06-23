import Image from "next/image";

export default function Hero() {
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
            <button className="bg-primary text-on-primary font-[family-name:var(--font-label-md)] text-sm px-8 py-3.5 rounded-lg hover:bg-primary-container cloud-shadow transition-all hover:-translate-y-0.5">
              Belanja Sekarang
            </button>
            <button className="border-2 border-secondary text-secondary font-[family-name:var(--font-label-md)] text-sm px-8 py-3.5 rounded-lg hover:bg-secondary/5 transition-all">
              Pelajari Lebih Lanjut
            </button>
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
