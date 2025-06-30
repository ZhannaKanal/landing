import Image from "next/image";

export default function Plans() {
  return (
    <div className="max-w-[1130px] w-full mx-auto flex justify-start items-center gap-[100px] ">
      <div className="">
        <p className="text-[32px] font-bold leading-9">
          Group Expenses? No Worries, <br /> Split with Ease
        </p>
        <p className="text-[#252b3b] leading-7 pt-5">
          Easily divide shared bills and expenses among friends <br /> and family. Keep everyone accountable and your finances <br /> in check.
        </p>
      </div>
      <div>
        <Image src="/images/p1.avif" alt="" width={500} height={393}></Image>
      </div>
    </div>
  );
}
