import Image from "next/image";

export default function Download() {
  return (
    <div className="max-w-[1100px] w-full mx-auto bg-[black] rounded-[25px] flex justify-between items-center bg-[url('/images/d2.avif')] bg-cover bg-center">
      <div className="px-[80px]">
        <p className="text-[white] text-[46px] font-medium leading-14">
          Download the app <br />
          and start today!
        </p>
        <div className="max-w-[150px] w-full bg-[#965CFF] hover:bg-[#6B33CC] duration-1000 rounded-[12px] py-[9px] px-[15px] mt-[15px]">
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
        <p className="text-[grey] text-[12px] py-3">*No credit card requires</p>
      </div>
      <div className="pt-[90px]">
        <Image className="rounded-br-[25px]" src="/images/d1.avif" alt="" width={520} height={352}></Image>
      </div>
    </div>
  );
}
