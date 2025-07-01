"use client";

import { useState } from "react";

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
      alert("An error occurred while sending email.");
    }
  };

  return (
    <div className="bg-[black] p-[100px]">
      <div className="max-w-[1100px] w-full mx-auto">
        <div className="flex justify-between">
          <div className="bg-[] w-1/2">
            <div>
              <div className="max-w-[120px] bg-[linear-gradient(to_right,#ffffff,#ffff4e,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px]">
                vibrant.
              </div>
              <p className="text-[white] py-3">
                Vibrant is your ultimate financial companion.
              </p>
            </div>
            <form
              className="flex justify-start gap-3 py-7"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent actual form submit/refresh
                handleSubscribe();
              }}
            >
              <div className="p-4 rounded-[12px] bg-[#252525] text-[#929292] w-1/2">
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
                className="p-4 rounded-[12px] text-white bg-[#965CFF] hover:bg-[#6B33CC] font-bold w-1/5"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-1/2 flex justify-end text-[#ffffff] text-[17px] pt-[5px] gap-8">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">FAQ</a>
            </div>
            <div>
              <a href="">Blog</a>
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-[#252525] border-0 mt-7" />
        <div className="flex justify-start gap-1 text-[13px] mt-4">
          <p className="text-[white]">Made by</p>
          <p className="text-[#985cff]">Code-Less.cc</p>
        </div>
      </div>
    </div>
  );
}
