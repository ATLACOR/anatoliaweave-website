import Image from "next/image";

const bullets = [
  "Bursa-based sourcing network with multi-mill capacity",
  "Stock programs and made-to-order production planning",
  "Quality checkpoints at yarn, greige, and finished stages",
  "Dedicated export documentation and freight coordination",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#f4f4f4]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/50">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
            Built for dependable wholesale supply
          </h2>
          <p className="mt-5 text-sm leading-7 text-black/60">
            From fiber selection to finishing, our production pipeline is
            aligned to meet tight delivery windows and brand-specific
            requirements.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-black/70">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-black/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-black/10">
          <Image
            src="/images/textile-machinery.jpg"
            alt="Textile machinery"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
