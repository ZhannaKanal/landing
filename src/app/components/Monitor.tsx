import Image from "next/image";

export default function Monitor() {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex justify-start items-center gap-[50px]">
      <div>
        <Image src="/images/m1.avif" alt="" width={481} height={363}></Image>
      </div>
      <div>
        <p className="text-[32px] font-bold leading-9">
          Take Control of Your Finances <br /> and Save More
        </p>
        <p className="text-[#252b3b] leading-7 pt-5">
          Monitor your income, manage expenses, and achieve <br /> your
          financial goals effortlessly with our comprehensive <br /> tool.
        </p>
        <div className="flex justify-start gap-3 mt-[30px]">
          <Image className="bg-[#91DBBD] rounded-[8px]" src="/icons/m1.svg" alt="" width={23} height={23}></Image>
          <p>Easily track your income and spending.</p>
        </div>
        <div className="flex justify-start gap-3 mt-[20px]">
          <Image className="bg-[#91DBBD] rounded-[8px]" src="/icons/m1.svg" alt="" width={23} height={23}></Image>
          <p>Set and achieve savings goals.</p>
        </div>
      </div>
    </div>
  );
}
