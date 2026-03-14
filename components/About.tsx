import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#f4f4f4]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-black/10">
          <Image
            src="/images/company-building.jpg"
            alt="Anatolia Weave Co. headquarters"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
            Rooted in Bursa&apos;s textile heritage
          </h2>
          <p className="mt-5 text-sm leading-7 text-black/60">
            Anatolia Weave Co. is a wholesale textile supplier based in Bursa,
            Turkey, serving international apparel and home textile brands with
            consistent sourcing and production support.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-black/10 bg-white px-5 py-4 text-sm text-black/70">
            <span className="h-2 w-2 rounded-full bg-black/60" />
            Bursa, Turkey — Heart of Turkey&apos;s textile industry
          </div>
        </div>
      </div>
    </section>
  );
}
