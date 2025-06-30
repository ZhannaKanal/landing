// import "../globals.css";

export default function Header() {
  return (
    <div className="py-[16px]">
      <div className="max-w-[1462px] w-full mx-auto flex items-center justify-between">
        <div className="bg-[linear-gradient(to_right,#ffffff,#ffffff,#ffff00,#b4a7d6,#7BCAEF,#7CFFCB,#ffffff)] bg-clip-text text-transparent font-bold text-[32px] ">
          vibrant.
        </div>
        <div className="max-w-[350px] w-full flex justify-between items-center text-[#ffffff]">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">FAQ</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div className="rounded-[12px] font-medium bg-[white] hover:bg-[black] duration-500 text-[black] hover:text-[white] px-[20px] py-[8px]">
            <a href="/">Get for Free</a>
          </div>
        </div>
      </div>
    </div>
  );
}
