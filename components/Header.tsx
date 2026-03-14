import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Compliance", href: "#compliance" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-black">
          <span className="h-3 w-3 rounded-sm bg-black" />
          ANATOLIA WEAVE CO.
        </div>
        <nav className="hidden items-center gap-8 text-sm text-black/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-black/80"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
