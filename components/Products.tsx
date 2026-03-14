import Image from "next/image";

const products = [
  {
    title: "Cotton & Blends",
    description:
      "Staple and combed cottons engineered for consistent hand feel and low shrinkage.",
    image: "/images/cotton-fabric.jpg",
  },
  {
    title: "Linen Blends",
    description:
      "Breathable, textured linen blends ideal for resort wear and soft tailoring.",
    image: "/images/linen-fabric.jpg",
  },
  {
    title: "Denim & Twill",
    description:
      "Durable weaves in classic shades with flexible minimums and wash programs.",
    image: "/images/denim-fabric.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/50">
              Products
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
              Fabrications for wholesale programs
            </h2>
          </div>
          <span className="hidden text-sm text-black/50 md:block">
            Updated seasonally
          </span>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-black">
                  {product.title}
                </h3>
                <p className="text-sm leading-6 text-black/60">
                  {product.description}
                </p>
                <span className="text-xs font-semibold tracking-[0.25em] text-black/50">
                  VIEW SPECS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
