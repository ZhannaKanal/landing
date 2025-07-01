// // import "../globals.css";
// 'use client'

// import Image from "next/image";

// export default function Header() {
//   return (
//     <div className="py-[16px] px-[24px]">
//       <div className="max-w-[1462px] w-full mx-auto flex items-center justify-between">
//         <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px] ">
//           vibrant.
//         </div>
//         <div className="max-w-[350px] w-full hidden justify-between items-center text-[#ffffff] md:flex">
//           <div>
//             <a href="">Home</a>
//           </div>
//           <div>
//             <a href="">FAQ</a>
//           </div>
//           <div>
//             <a href="">Blog</a>
//           </div>
//           <div className="rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white] px-[20px] py-[8px]">
//             <a href="/">Get for Free</a>
//           </div>
//         </div>
//         <div className="block md:hidden">
//           <Image
//           src='/icons/i0.svg'
//           alt=''
//           width={32}
//           height={32}
//           ></Image>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-[16px] px-[24px] relative">
      <div className="max-w-[1462px] w-full mx-auto flex items-center justify-between">
        <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px]">
          vibrant.
        </div>

        <div className="max-w-[350px] w-full hidden justify-between items-center text-[#ffffff] md:flex">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">FAQ</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div className="rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white] px-[20px] py-[8px]">
            <a href="/">Get for Free</a>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden cursor-pointer"
        >
          <Image src="/icons/i0.svg" alt="menu" width={32} height={32} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-[#000] px-7">
          <div className="flex justify-between items-center">
            <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px] ">
              vibrant.
            </div>
            <div onClick={() => setIsOpen(false)} className="cursor-pointer">
              <Image src="/icons/i01.svg" alt="close" width={32} height={32} />
            </div>
          </div>
          <div className=" flex flex-col items-center text-white py-6 gap-4 md:hidden z-50">
            <a href="">Home</a>
            <a href="">FAQ</a>
            <a href="">Blog</a>
            <a
              href="/"
              className="w-full  text-center rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white]  py-[8px]"
            >
              Get for Free
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
