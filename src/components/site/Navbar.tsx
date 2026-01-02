"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Designs", href: "#designs" },
  { label: "Clients", href: "#clients" },
  { label: "Cloud", href: "#cloud" },
  { label: "FAQ", href: "#faq" },
];

function useActiveHash(items: NavItem[]) {
  const ids = useMemo(
    () => items.map((i) => i.href).filter((h) => h.startsWith("#")).map((h) => h.slice(1)),
    [items],
  );
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.2, 0.35, 0.5] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveHash(NAV);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
          <a href="#top" className="group inline-flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center">
              <Image src="/icons/logo-icon-white.svg" alt="Asxora logo" width={28} height={28} priority />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-bold lowercase tracking-[0.04em] text-white">asxora.io</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const id = item.href.startsWith("#") ? item.href.slice(1) : "";
              const isActive = id && id === active;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white",
                    isActive && "bg-white/8 text-white",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:inline-flex"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-3 rounded-2xl border border-white/10 bg-black/55 p-3 backdrop-blur-xl md:hidden"
            >
              <div className="grid gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black"
                >
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}


