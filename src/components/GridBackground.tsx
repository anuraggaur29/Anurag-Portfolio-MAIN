"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{
        backgroundImage: "radial-gradient(#27272A 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse at center, transparent 20%, #0A0A0A 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, #0A0A0A 80%)",
      }}
    />
  );
}
