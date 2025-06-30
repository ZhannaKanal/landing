import Image from "next/image";

export default function Track() {
  return (
    <div className="max-w-[1100px] w-full mx-auto flex justify-between items-center my-[100px]">
      <div className=" text-start">
        <p className="text-[32px] font-bold leading-9">Get a Clear View of Your <br /> Monthly Expenses</p>
        <p className="text-[#252b3b] leading-7 pt-5">Easily track and categorize your spending to stay on top of your <br /> finances. Visualize your budget and savings at a glance.</p>
      </div>
      <div>
        <Image src='/images/t1.avif' alt='' width={503} height={367}></Image>
      </div>
    </div>
  );
}
