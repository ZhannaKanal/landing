'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Track() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5 }}
      id="blog"
      className="max-w-[1100px] w-full mx-auto md:flex justify-between items-center my-[100px]"
    >
      <div className=" text-start px-7">
        <p className="text-[26px] md:text-[28px] lg:text-[32px] font-bold leading-9">
          Get a Clear View of Your <br /> Monthly Expenses
        </p>
        <p className="text-[#252b3b] leading-7 pt-5 w-full lg:max-w-[500px] mx-auto">
          Easily track and categorize your spending to stay on top of your
          finances. Visualize your budget and savings at a glance.
        </p>
      </div>
      <div className="flex justify-center my-4 md:my-0">
        <Image
          src="/images/t1.avif"
          alt=""
          width={503}
          height={367}
          priority
        ></Image>
      </div>
    </motion.div>
  );
}
