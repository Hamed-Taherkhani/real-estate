"use client";

import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const bgVariants = {
  open: {
    opacity: 100,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
  close: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export default function Drawer({ children, open, className }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={open ? "open" : "close"}
          initial="close"
          exit="close"
          className={twMerge("fixed top-0 right-0 bottom-0 left-0", className)}
        >
          {/* Background */}
          <motion.span
            variants={bgVariants}
            className="block absolute top-0 right-0 bottom-0 left-0 bg-dark-blue"
          />
          <div className="relative z-10 h-full">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
