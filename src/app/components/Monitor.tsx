import Image from "next/image";

export default function Monitor() {
  return (
    <div className="px-7 lg:px-0 md:max-w-[1200px] w-full mx-auto flex flex-col-reverse md:flex-row justify-between items-center lg:gap-[50px]">
      <div>
        <Image
          src="/images/m1.avif"
          alt=""
          width={481}
          height={363}
          priority
        ></Image>
      </div>
      <div className="w-full lg:w-1/2">
        <p className=" text-[26px] lg:text-[32px] font-bold leading-9">
          Take Control of Your Finances and Save More
        </p>
        <p className="text-[#252b3b] leading-7 pt-5">
          Monitor your income, manage expenses, and achieve your financial goals
          effortlessly with our comprehensive tool.
        </p>
        <div className="flex justify-start gap-3 mt-[30px]">
          <Image
            className="bg-[#91DBBD] rounded-[8px]"
            src="/icons/m1.svg"
            alt=""
            width={23}
            height={23}
            priority
          ></Image>
          <p>Easily track your income and spending.</p>
        </div>
        <div className="flex justify-start gap-3 mt-[20px]">
          <Image
            className="bg-[#91DBBD] rounded-[8px]"
            src="/icons/m1.svg"
            alt=""
            width={23}
            height={23}
            priority
          ></Image>
          <p>Set and achieve savings goals.</p>
        </div>
      </div>
    </div>
  );
}
