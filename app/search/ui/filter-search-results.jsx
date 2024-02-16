"use client";

import Drawer, { bgVariants } from "@/app/ui/data display/drawer";
import { useEffect, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CloseBtn from "@/app/ui/inputs/close-btn";
import FilterForm from "./forms/filter-form";
import { useScreenDimension } from "@/app/ui/hooks/use-screen-dimension";

export default function FilterSearchResults() {
  const [open, setOpen] = useState(false);
  const toggleFilterDrawer = () => setOpen((prev) => !prev);

  const { width } = useScreenDimension();
  useEffect(() => {
    if (width >= 768) setOpen(false);
  }, width);

  return (
    <>
      <button
        onClick={toggleFilterDrawer}
        type="button"
        className="flex items-center gap-1 bg-gray-900 text-white px-4 rounded-md"
      >
        <FiAlignRight className="text-xl" />
        <span>Filter</span>
      </button>
      <Drawer open={open} disableBg className=" h-screen overflow-auto z-50">
        {/* background */}
        <motion.span
          variants={bgVariants}
          className="block absolute top-0 right-0 bottom-0 left-0 -z-10 bg-gray-100"
        />

        <motion.div
          variants={{ open: { opacity: 100 }, close: { opacity: 0 } }}
          transition={{
            duration: 0.5,
          }}
        >
          <header className="p-4" dir="rtl">
            <CloseBtn onClick={toggleFilterDrawer} />
          </header>
          <main className="px-4">
            <FilterForm />
          </main>
        </motion.div>
      </Drawer>
    </>
  );
}
