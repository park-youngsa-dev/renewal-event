"use client";

import { motion, useReducedMotion } from "motion/react";
import { Coffee } from "lucide-react";

export function HeaderGlow() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        "-left-24 -top-24 bg-indigo-600",
        "-bottom-24 -right-24 bg-purple-600",
      ].map((className, index) => (
        <motion.div
          key={className}
          className={`absolute h-72 w-72 rounded-full opacity-40 blur-3xl ${className}`}
          animate={reducedMotion ? undefined : { opacity: [0.24, 0.4, 0.24], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 1.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function RenewalIndicator() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="h-2 w-2 rounded-full bg-indigo-400"
      animate={reducedMotion ? undefined : { scale: [1, 2, 2], opacity: [1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

export function EventCoffee() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="text-white"
      animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Coffee className="h-10 w-10" strokeWidth={2.5} />
    </motion.div>
  );
}
