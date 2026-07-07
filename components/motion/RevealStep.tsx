"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function RevealStep({
  children,
  fromRight = false,
  className = "",
}: {
  children: ReactNode;
  fromRight?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
