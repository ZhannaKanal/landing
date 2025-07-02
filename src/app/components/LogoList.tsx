import Image from "next/image"

export default function Logolist(){
  return (
    <div className="bg-[black]">
      <div className="max-w-[165px] md:max-w-[730px] lg:max-w-[790px] w-full mx-auto md:flex justify-between py-10">
        <Image src='/icons/l1.png' alt='First' width={165} height={40} priority></Image>
        <Image src='/icons/l2.png' alt='First' width={136} height={40} priority className="py-6 md:py-0"></Image>
        <Image src='/icons/l3.png' alt='First' width={146} height={40} priority></Image>
        <Image src='/icons/l4.png' alt='First' width={133} height={40} priority className="py-6 md:py-0"></Image>
      </div>
     
    </div>
  )
}