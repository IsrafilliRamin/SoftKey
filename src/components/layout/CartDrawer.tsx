"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { CloseIcon } from "@/components/ui/icons";
import { ProductCover } from "@/components/ui/ProductCover";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, totalPrice } =
    useCartStore();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-bg-elevated shadow-lift transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Səbət"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold">Səbət ({items.length})</h2>
          <button
            onClick={closeCart}
            aria-label="Bağla"
            className="rounded-lg p-1.5 text-text-muted hover:bg-surface-2 hover:text-text"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <p className="text-sm text-text-muted">Səbətiniz boşdur.</p>
              <p className="text-xs text-text-faint">
                Məhsul əlavə etmək üçün mağazaya baxın.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-3">
                  <div className="w-20 shrink-0">
                    <ProductCover product={item.product} />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm font-medium leading-snug">
                      {item.product.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center rounded-md border border-border">
                        <button
                          className="px-2 py-0.5 text-text-muted hover:text-text"
                          onClick={() =>
                            setQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Azalt"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-0.5 text-text-muted hover:text-text"
                          onClick={() =>
                            setQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Artır"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-xs text-text-faint hover:text-danger"
                        onClick={() => removeItem(item.product.id)}
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                  <span className="whitespace-nowrap text-sm font-medium">
                    {(item.product.price * item.quantity).toFixed(2)} ₼
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-text-muted">Ümumi</span>
            <span className="text-base font-semibold">
              {totalPrice().toFixed(2)} ₼
            </span>
          </div>
          <Link
            href="/cart"
            onClick={closeCart}
            className={`flex w-full items-center justify-center rounded-lg bg-text px-4 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 ${
              items.length === 0 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            Sifarişi tamamla
          </Link>
        </div>
      </aside>
    </>
  );
}
