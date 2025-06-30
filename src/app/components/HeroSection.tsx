import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="py-[100px] w-full text-center mx-auto text-[white]">
        <div className="text-[46px] font-bold">
          Simplify Your <br /> Financial Life, Today!
        </div>
        <div className="text-[18px]">
          Manage your finances effortlessly with our intuitive platform. <br />{" "}
          Track your balance, monitor income, and control your expenses <br />{" "}
          all in one place.
        </div>
        <div className="max-w-[150px] w-full mx-auto bg-[#965CFF] hover:bg-[#6B33CC] duration-1000 rounded-[12px] py-[9px] px-[15px] mt-[15px]">
          <a href="/">
            <div className="flex justify-between ">
              <p>Get for Free</p>
              <Image
                src="/icons/i1.svg"
                alt="Arrow"
                width={25}
                height={10}
              ></Image>
            </div>
          </a>
        </div>
      </div>
      <div className="">
        <div className="relative max-w-[1280px] w-full mx-auto">
          <div className="absolute z-10 bg-[#fff] max-w-[250px] w-full rounded-[16px] top-[-12px] right-8">
            <div className="p-6">
              <p className="text-[12px]">Savings</p>
              <p className="text-[20px] font-bold">$2,380.00</p>
              <div className="flex justify-start gap-2 pt-2">
                <div className="bg-[#262c3b1c] w-[8px] h-[8px] rounded-[3px]"></div>
                <div className="bg-[#262c3b1c] w-[48px] h-[8px] rounded-[3px]"></div>
              </div>
            </div>
          </div>
          <Image
            className="mx-auto"
            src="/images/i2.avif"
            alt="Photo"
            width={1050}
            height={480}
          ></Image>

          <div className="absolute z-10 bg-[#fff] max-w-[280px] w-full rounded-[16px] bottom-[52px]">
            <div className="p-5">
              <div className="flex justify-between">
                <p className="text-[12px]">Split bills</p>
                <div className="flex">
                  <Image
                    className="rounded-[50px] mr-[-15px]"
                    src="/icons/i2.png"
                    alt="Photo"
                    width={30}
                    height={30}
                  ></Image>
                  <Image
                    className="rounded-[50px] mr-[-15px]"
                    src="/icons/i3.png"
                    alt="Photo"
                    width={30}
                    height={30}
                  ></Image>
                  <Image
                    className="rounded-[50px]"
                    src="/icons/i4.png"
                    alt="Photo"
                    width={30}
                    height={30}
                  ></Image>
                </div>
              </div>
              <p className="text-[20px] font-bold">$800.00</p>
              <div className="flex justify-between gap-2 pt-2">
                <div className="bg-[#262c3b1c] w-[96px] h-[8px] rounded-[2px]"></div>
                <div className="bg-[#262c3b1c] w-[30px] h-[8px] rounded-[2px] mt-[-8px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
