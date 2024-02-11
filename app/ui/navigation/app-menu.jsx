"use client";

import { useState } from "react";
import BurgerBtn from "../inputs/burger-btn";
import Drawer from "../data display/drawer";
import List from "../data display/list";
import { navLinks } from "@/app/lib/data/placeholder-data";
import Link from "next/link";
import Logo from "../layouts/logo";
import { motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import clsx from "clsx";

export default function AppMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <BurgerBtn
        onClick={toggleMenu}
        className={clsx("relative z-10 transition delay-200", {
          "rotate-90 bg-gray-50": isOpen,
        })}
      />
      <Drawer open={isOpen}>
        <motion.header
          variants={{
            open: {
              opacity: 100,
            },
            close: {
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-20 flex items-center px-4 text-gray-50"
        >
          <Logo elementName="p" />
        </motion.header>
        <nav>
          <motion.div
            variants={{
              open: {
                opacity: 100,
                rotate: 0,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              },
              close: {
                opacity: 0,
                rotate: 4,
                y: 50,
                transition: {
                  delay: 0,
                  duration: 0.2,
                },
              },
            }}
            className="mb-4"
          >
            <List
              items={navLinks}
              renderItem={({ title, href }) => (
                <Link href={href} className="block p-3">
                  {title}
                </Link>
              )}
              className="bg-gray-100 p-2 mx-4 text-3xl rounded-lg"
            />
          </motion.div>
          <motion.div
            variants={{
              open: {
                opacity: 100,
                rotate: 0,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              },
              close: {
                opacity: 0,
                rotate: -4,
                y: 70,
                transition: {
                  delay: 0,
                  duration: 0.2,
                },
              },
            }}
          >
            <Link
              href={"/user/account/login"}
              className="bg-black text-gray-50 flex items-center gap-3 mx-4 rounded-full p-4 px-5 text-xl"
            >
              <IoPersonOutline className="text-2xl" />
              Login
            </Link>
          </motion.div>
        </nav>
        <motion.button
          variants={{
            open: {
              opacity: 100,
              y: 0,
            },
            close: {
              opacity: 0,
              y: 50,
            },
          }}
          onClick={toggleMenu}
          className="w-12 h-12 bg-black text-gray-50 flex justify-center items-center rounded-full absolute bottom-10 left-[calc(50%-1.5rem)]"
        >
          <IoIosClose aria-label="close" className="text-3xl" />
        </motion.button>
      </Drawer>
    </>
  );
}
