"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeaderHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[url('/images/i1.avif')] bg-center bg-cover">
      <div className="py-[16px] px-[24px] relative">
        <div className="max-w-[1462px] w-full mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px]"
          >
            vibrant.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[350px] w-full hidden justify-between items-center text-[#ffffff] md:flex"
          >
            <div>
              <Link href="">Home</Link>
            </div>
            <div>
              <Link href="">FAQ</Link>
            </div>
            <div>
              <Link href="">Blog</Link>
            </div>
            <div className="rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white] px-[20px] py-[8px]">
              <Link href="/">Get for Free</Link>
            </div>
          </motion.div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden cursor-pointer"
          >
            <Image src="/icons/i0.svg" alt="menu" width={32} height={32} priority/>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full bg-[#000] pt-4 px-6"
            >
              <div className="flex justify-between items-center">
                <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px] ">
                  vibrant.
                </div>
                <div
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  <Image
                    src="/icons/i01.svg"
                    alt="close"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
              </div>
              <div className=" flex flex-col items-center text-white py-6 gap-4 md:hidden z-50">
                <Link href="">Home</Link>
                <Link href="">FAQ</Link>
                <Link href="">Blog</Link>
                <Link
                  href="/"
                  className="w-full text-center rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white] py-[8px]"
                >
                  Get for Free
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="py-[100px] w-full text-center mx-auto text-[white] p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[29px] md:text-[46px] font-bold"
        >
          Simplify Your <br /> Financial Life, Today!
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[18px] w-full md:max-w-[555px] mx-auto px-6 md:px-0 mt-4"
        >
          Manage your finances effortlessly with our intuitive platform. Track
          your balance, monitor income, and control your expenses all in one
          place.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="max-w-[150px] w-full mx-auto bg-[#965CFF] hover:bg-[#6B33CC] duration-1000 rounded-[12px] py-[9px] px-[15px] mt-[15px]"
        >
          <Link href="/">
            <div className="flex justify-between ">
              <p>Get for Free</p>
              <Image src="/icons/i1.svg" alt="Arrow" width={25} height={10} priority/>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="">
        <div className="relative max-w-[1280px] w-full mx-auto flex justify-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 bg-[#fff] max-w-[250px] w-full rounded-[16px] top-[-12px] right-8 hidden lg:block"
          >
            <div className="p-6">
              <p className="text-[12px]">Savings</p>
              <p className="text-[20px] font-bold">$2,380.00</p>
              <div className="flex justify-start gap-2 pt-2">
                <div className="bg-[#262c3b1c] w-[8px] h-[8px] rounded-[3px]"></div>
                <div className="bg-[#262c3b1c] w-[48px] h-[8px] rounded-[3px]"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:mx-auto"
          >
            <Image
              className="max-w-[736px] md:w-full lg:max-w-[1050px] bg-cover w-[550px]"
              src="/images/i2.avif"
              alt="Photo"
              width={1050}
              height={480}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-10 bg-[#fff] max-w-[280px] w-full rounded-[16px] bottom-[52px] hidden lg:block"
          >
            <div className="p-5">
              <div className="flex justify-between">
                <p className="text-[12px]">Split bills</p>
                <div className="flex">
                  <Image
                    className="rounded-[50px] mr-[-15px]"
                    src="/icons/i2.png"
                    alt="Photo"
                    width={30}
                    height={30}
                    priority
                  />
                  <Image
                    className="rounded-[50px] mr-[-15px]"
                    src="/icons/i3.png"
                    alt="Photo"
                    width={30}
                    height={30}
                    priority
                  />
                  <Image
                    className="rounded-[50px]"
                    src="/icons/i4.png"
                    alt="Photo"
                    width={30}
                    height={30}
                    priority
                  />
                </div>
              </div>
              <p className="text-[20px] font-bold">$800.00</p>
              <div className="flex justify-between gap-2 pt-2">
                <div className="bg-[#262c3b1c] w-[96px] h-[8px] rounded-[2px]"></div>
                <div className="bg-[#262c3b1c] w-[30px] h-[8px] rounded-[2px] mt-[-8px]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
