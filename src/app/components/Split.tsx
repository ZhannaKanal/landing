import Image from "next/image";
import Link from "next/link";

export default function Split() {
  return (
    <div className="pb-[60px] lg:pt-[60px] px-2 md:px-0">
      <div className="my-[60px] text-center">
        <p className="text-[#262c3b] text-[38px] md:text-[42px] lg:text-[46px] font-bold">
          Ready to get started?
        </p>
        <p className="text-[#252c3b] text-[20px] pt-[20px]">
          Choose a plan fits to your needs.
        </p>
      </div>
      <div className="max-w-[900px] w-full mx-auto md:flex justify-between gap-4 px-3 lg:px-0">
        <div className="md:max-w-[410px] max-h-[530px] w-full rounded-[24px] shadow-[0_0_20px_rgba(0,0,0,0.1)] p-[35px] lg:p-[50px] mb-2">
          <p className="text-[30px] font-bold">Personal</p>
          <p className="text-[18px] py-3 text-[#252b3b]">
            Best for individuals managing personal finances.
          </p>
          <div className="flex gap-4 py-2 items-end">
            <p className="text-[50px] text-[#262c3b]">$2.99</p>
            <p className="text-[24px] text-[#262c3b80] pb-2">/mo</p>
          </div>
          <div className="w-full bg-[#965CFF] hover:bg-[#000] duration-1000 rounded-[12px] py-[9px] px-[15px] mt-[15px] text-[white] text-[17px] text-center font-bold">
            <Link href="/">Try for Free</Link>
          </div>
          <div className="text-[252b2b] pt-4">
            <div className="flex justify-start gap-3 mt-[20px]">
              <Image
                className="bg-[#91DBBD] rounded-[8px]"
                src="/icons/m1.svg"
                alt=""
                width={23}
                height={23}
                priority
              ></Image>
              <p>Track unlimited transactions</p>
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
              <p>Customizable budget categories</p>
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
              <p>Basic analytics and insights</p>
            </div>
          </div>
        </div>
        <div className="md:max-w-[470px] w-full rounded-[24px] p-[35px] lg:p-[50px] bg-[url('/images/s1.avif')] bg-cover bg-center text-[white]">
          <div className="">
            <p className="text-[30px] font-bold">Business</p>
            <p className="text-[18px] py-3 text-[#ffffff80]">
              Ideal for businesses managing multiple <br /> accounts.
            </p>
          </div>
          <div className="flex gap-4 py-2 items-end">
            <p className="text-[50px] text-[white]">$8.99</p>
            <p className="text-[24px] text-[#ffffff80] pb-2">/mo</p>
          </div>
          <div className="w-full bg-[#fff] hover:bg-[#965CFF] hover:text-[white] duration-1000 rounded-[12px] py-[9px] px-[15px] mt-[15px] text-[black] text-[17px] text-center font-bold">
            <Link href="/">Try for Free</Link>
          </div>
          <div className="pt-4 text-[white]">
            <div className="flex justify-start gap-3 mt-[20px]">
              <Image
                className="bg-[#91DBBD] rounded-[8px]"
                src="/icons/m1.svg"
                alt=""
                width={23}
                height={23}
                priority
              ></Image>
              <p>Track unlimited transactions</p>
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
              <p>Advanced reporting and analytics</p>
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
              <p>Invoicing and expense management</p>
            </div>
          </div>
          <div className="text-[white]">
            <div className="flex justify-start gap-3 mt-[20px]">
              <Image
                className="bg-[#91DBBD] rounded-[8px]"
                src="/icons/m1.svg"
                alt=""
                width={23}
                height={23}
                priority
              ></Image>
              <p>Priority customer support</p>
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
              <p>Team collaboration features</p>
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
              <p>Sync across multiple devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
