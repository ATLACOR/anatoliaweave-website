"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestCatalog = () => {
    setIsModalOpen(false);
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-textile-factory.jpg"
          alt="Textile factory floor"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60">
            Anatolia Weave Co.
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-black md:text-6xl">
            Wholesale Textiles from Turkey — Reliable Supply, Consistent Quality
          </h1>
          <p className="mt-6 text-lg leading-8 text-black/70">
            Premium cotton, linen, and denim blends sourced from Bursa with
            dependable lead times and compliance-ready documentation for global
            brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
            >
              Request a Quote
            </a>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium text-black transition hover:border-black/40"
            >
              Download Catalog
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestCatalog={handleRequestCatalog}
      />
    </section>
  );
}
