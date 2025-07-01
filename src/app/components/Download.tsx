import Image from "next/image";

export default function Download() {
  return (
    <div className="md:px-7 lg:px-12">
      <div className="max-w-[370px] md:max-w-[800px] lg:max-w-[1100px] w-full mx-auto bg-[black] rounded-[25px] md:flex justify-between items-center bg-[url('/images/d2.avif')] bg-cover bg-center md:my-[90px]">
        <div className="px-[30px] pt-[50px] md:pt-0 md:px-[50px] lg:px-[80px]">
          <p className="text-[white] text-[32px] md:text-[37px] lg:text-[46px] font-medium leading-14 text-center md:text-start">
            Download the app and start today!
          </p>
          <div className="max-w-[150px] mx-auto md:mx-0 w-full bg-[#965CFF] hover:bg-[#6B33CC] duration-1000 rounded-[12px] py-[9px] px-[15px] mt-[15px]">
            <a href="/">
              <div className="flex justify-between text-[white]">
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
          <p className="text-[grey] text-[12px] py-3 text-center md:text-start">
            *No credit card requires
          </p>
        </div>
        <div className="pt-5 md:pt-[90px] px-6 md:px-0">
          <Image
            className="rounded-t-[25px] md:rounded-br-[25px]"
            src="/images/d1.avif"
            alt=""
            width={520}
            height={352}
          ></Image>
        </div>
      </div>
    </div>
  );
}
