"use client";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRequestCatalog: () => void;
};

export default function Modal({
  isOpen,
  onClose,
  onRequestCatalog,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              Catalog
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-black">
              Catalog available upon request
            </h3>
            <p className="mt-3 text-sm leading-6 text-black/60">
              Request our latest wholesale catalog and we will respond with
              availability and specifications.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-black/40 transition hover:text-black"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <button
          type="button"
          onClick={onRequestCatalog}
          className="mt-6 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80"
        >
          Request Catalog
        </button>
      </div>
    </div>
  );
}
