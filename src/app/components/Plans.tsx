import Image from "next/image";

export default function Plans() {
  return (
    <div className="max-w-[1100px] w-full mx-auto md:flex justify-start items-center gap-[100px] my-[50px]">
      <div className="px-[50px]">
        <p className="text-[26px] lg:text-[32px] font-bold leading-9">
          Group Expenses? No Worries, Split with Ease
        </p>
        <p className="text-[#252b3b] leading-7 pt-5">
          Easily divide shared bills and expenses among friends and family. Keep
          everyone accountable and your finances in check.
        </p>
      </div>
      <div className="px-7 md:px-0">
        <Image
          src="/images/p1.avif"
          alt=""
          width={500}
          height={393}
          priority
        ></Image>
      </div>
    </div>
  );
}
