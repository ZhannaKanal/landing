"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const res = await fetch("/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert(`Hi, welcome to our site. Message successfully sent to ${email}`);
        setEmail("");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while sending email. "+ error);
    }
  };

  return (
    <div className="bg-[black] p-[100px]">
      <div className="max-w-[1100px] w-full mx-auto">
        <div className=" md:flex justify-between">
          <div className="bg-[] w-full md:w-1/2">
            <div className="">
              <div className="max-w-[120px] bg-[linear-gradient(to_right,#ffffff,#ffff4e,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px] mx-auto md:mx-0">
                vibrant.
              </div>

              <p className="text-[white] py-3 text-center md:text-start">
                Vibrant is your ultimate financial companion.
              </p>
            </div>
            <form
              className=" md:flex justify-start gap-3 py-7"
              onSubmit={(e) => {
                e.preventDefault(); 
                handleSubscribe();
              }}
            >
              <div className="p-4 mb-2 md:mb-0 rounded-[12px] bg-[#252525] text-[#929292] w-full  md:max-w-[310px]">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="outline-none bg-transparent w-full text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="p-4 rounded-[12px] text-white bg-[#965CFF] hover:bg-[#6B33CC] font-bold w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end text-[#ffffff] text-[17px] pt-[5px] gap-8">
            <div>
              <Link href="">Home</Link>
            </div>
            <div>
              <Link href="">FAQ</Link>
            </div>
            <div>
              <Link href="">Blog</Link>
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-[#252525] border-0 mt-7" />
        <div className="flex justify-center md:justify-start  gap-1 text-[13px] mt-4 ">
          <p className="text-[white]">Made by</p>
          <p className="text-[#985cff]">Code-Less.cc</p>
        </div>
      </div>
    </div>
  );
}
