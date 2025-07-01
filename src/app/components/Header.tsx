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

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="py-[16px] px-[24px] relative">
//       <div className="max-w-[1462px] w-full mx-auto flex items-center justify-between">
//         <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px]">
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

//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="block md:hidden cursor-pointer"
//         >
//           <Image src="/icons/i0.svg" alt="menu" width={32} height={32} />
//         </div>
//       </div>

//       {isOpen && (
//         <div className="absolute top-0 left-0 w-full bg-[#000] px-7">
//           <div className="flex justify-between items-center">
//             <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px] ">
//               vibrant.
//             </div>
//             <div onClick={() => setIsOpen(false)} className="cursor-pointer">
//               <Image src="/icons/i01.svg" alt="close" width={32} height={32} />
//             </div>
//           </div>
//           <div className=" flex flex-col items-center text-white py-6 gap-4 md:hidden z-50">
//             <a href="">Home</a>
//             <a href="">FAQ</a>
//             <a href="">Blog</a>
//             <a
//               href="/"
//               className="w-full  text-center rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white]  py-[8px]"
//             >
//               Get for Free
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  //  useEffect(() => {
  //   console.log("isOpen", isOpen)
  //     })
      
  return (
    <header className={`bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full py-4 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-[70px] max-xl:px-10 max-lg:px-6 max-sm:px-4 relative">
        <div className="w-[100px] h-[39px]" />

        {/* Десктоп-меню */}
        <div className="hidden lg:flex items-center justify-between gap-10 w-full ml-10">
          <nav className="flex gap-6 text-sm text-[#242424] font-medium">
            <Link href="#hero">Платформа</Link>

            <Link href="#advantages">Инфо</Link>
            <Link href="#system">Преимущества</Link>
            <Link href="#contacts">Контакты</Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-sm text-[#242424]">
              <a
                href="tel:+77770608031"
                className="flex items-center gap-2 font-bold text-sm text-[#242424] hover:underline"
              >
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b67426d739b4461f0f7346c4e9bf56e87f81bd1?placeholderIfAbsent=true"
                  alt="phone"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  unoptimized
                />
                +7 777 060 80 31
              </a>
            </div>
            <Link href="/auth/login">
              <button className="bg-[#FFFFFF] hover:bg-[#e88a2a] border border-[#FC962F] text-[#FC962F] hover:text-white px-5 py-2 rounded-lg text-sm transition-colors">
                Вход
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="bg-[#FC962F] hover:bg-[#e88a2a] text-white px-5 py-2 rounded-lg text-sm transition-colors">
                Регистрация
              </button>
            </Link>
          </div>
        </div>

        {/* Бургер-иконка для мобилки/планшета */}
        <div className="flex lg:hidden z-50">
          {isOpen ? (
            <X className="w-7 h-7 text-[#242424]" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 text-[#242424]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      {/* Мобильное полноэкранное меню */}

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 p-6 flex flex-col gap-6 overflow-y-auto lg:hidden">
          <nav className="flex flex-col gap-4 text-lg text-[#242424] font-medium mt-10">
            <a href="#hero" onClick={() => setIsOpen(false)}>
              Платформа
            </a>
            <a href="#advantages" onClick={() => setIsOpen(false)}>
              Инфо
            </a>
            <a href="#system" onClick={() => setIsOpen(false)}>
              Преимущества
            </a>
            <a href="#contacts" onClick={() => setIsOpen(false)}>
              Контакты
            </a>
          </nav>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-2 font-bold text-sm text-[#242424]">
              <a
                href="tel:+77770608031"
                className="flex items-center gap-2 font-bold text-sm text-[#242424] hover:underline"
              >
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b67426d739b4461f0f7346c4e9bf56e87f81bd1?placeholderIfAbsent=true"
                  alt="phone"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  unoptimized
                />
                +7 777 060 80 31
              </a>
            </div>
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <button className="bg-white border border-[#FC962F] text-[#FC962F] px-5 py-2 rounded-lg text-sm">
                Вход
              </button>
            </Link>
            <Link href="/auth/register" onClick={() => setIsOpen(false)}>
              <button className="bg-[#FC962F] text-white px-5 py-2 rounded-lg text-sm">
                Регистрация
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}