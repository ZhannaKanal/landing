import Image from "next/image"

export default function Logolist(){
  return (
    <div className="bg-[black]">
      <div className="max-w-[790px] w-full mx-auto flex justify-between py-10">
        <Image src='/icons/l1.png' alt='First' width={165} height={40}></Image>
        <Image src='/icons/l2.png' alt='First' width={136} height={40}></Image>
        <Image src='/icons/l3.png' alt='First' width={146} height={40}></Image>
        <Image src='/icons/l4.png' alt='First' width={133} height={40}></Image>
      </div>
     
    </div>
  )
}