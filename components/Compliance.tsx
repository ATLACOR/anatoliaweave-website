const complianceItems = [
  {
    title: "Documentation & Certificates",
    description:
      "Organized testing, origin, and compliance records ready for audits.",
  },
  {
    title: "Batch / Lot Traceability",
    description:
      "Tracking from yarn intake to finished rolls for transparent reporting.",
  },
  {
    title: "Data Sharing for DPP Programs",
    description:
      "Structured data to support Digital Product Passport initiatives.",
  },
];

function IconPlaceholder() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-black/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12h8" />
      </svg>
    </div>
  );
}

export default function Compliance() {
  return (
    <section id="compliance" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-black/50">
          Compliance
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
          Compliance &amp; Traceability Readiness
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
          We support global brands with transparent documentation, clear batch
          tracking, and data-sharing workflows that align with emerging DPP
          standards.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-6"
            >
              <IconPlaceholder />
              <h3 className="mt-4 text-lg font-semibold text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
