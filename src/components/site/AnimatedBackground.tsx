"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_12%_12%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(1000px_circle_at_88%_18%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(900px_circle_at_44%_90%,rgba(200,200,200,0.14),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(60%_60%_at_50%_38%,black,transparent)]" />

      <motion.div
        aria-hidden
        className="absolute -left-28 top-24 h-[360px] w-[360px] rounded-full bg-white/14 blur-3xl"
        animate={{ y: [0, -14, 0], x: [0, 10, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-white/12 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -12, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-[62%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22160%22%20height%3D%22160%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.45%22/%3E%3C/svg%3E')]" />
    </div>
  );
}


