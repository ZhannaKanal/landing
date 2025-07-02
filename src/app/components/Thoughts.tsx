import Image from "next/image";

export default function Thoughts() {
  const testimonials = [
    {
      name: "John Doe",
      title: "Financial Analyst",
      image: "/icons/i2.png",
      text: "Using this app has transformed the way I manage my finances. It’s intuitive and makes tracking my expenses so much easier. Highly recommended!",
    },
    {
      name: "Jane Smith",
      title: "Marketing Manager",
      image: "/icons/i3.png",
      text: "I love how easy it is to use and how it helps me stay on top of my budget. A must-have for anyone serious about saving money.",
    },
    {
      name: "Mike Johnson",
      title: "Software Engineer",
      image: "/icons/i4.png",
      text: "Finally an app that makes financial planning simple and stress-free. It has completely changed how I handle my expenses.",
    },
    {
      name: "John Doe",
      title: "Financial Analyst",
      image: "/icons/i2.png",
      text: "Using this app has transformed the way I manage my finances. It’s intuitive and makes tracking my expenses so much easier. Highly recommended!",
    },
    {
      name: "Jane Smith",
      title: "Marketing Manager",
      image: "/icons/i3.png",
      text: "I love how easy it is to use and how it helps me stay on top of my budget. A must-have for anyone serious about saving money.",
    },
    {
      name: "Mike Johnson",
      title: "Software Engineer",
      image: "/icons/i4.png",
      text: "Finally an app that makes financial planning simple and stress-free. It has completely changed how I handle my expenses.",
    },
    {
      name: "John Doe",
      title: "Financial Analyst",
      image: "/icons/i2.png",
      text: "Using this app has transformed the way I manage my finances. It’s intuitive and makes tracking my expenses so much easier. Highly recommended!",
    },
    {
      name: "Jane Smith",
      title: "Marketing Manager",
      image: "/icons/i3.png",
      text: "I love how easy it is to use and how it helps me stay on top of my budget. A must-have for anyone serious about saving money.",
    },
    {
      name: "Mike Johnson",
      title: "Software Engineer",
      image: "/icons/i4.png",
      text: "Finally an app that makes financial planning simple and stress-free. It has completely changed how I handle my expenses.",
    },
  ];
  return (
    <div className="lg:pt-[90px] mt-[60px]">
      <div className="mb-[50px] lg:mb-[100px] text-[38px] md:text-[42px] lg:text-[46px] text-[#262c3b] font-bold text-center">
        What people say
      </div>
      <div className="bg-[] max-w-[1100px] w-full mx-auto md:flex justify-between flex-wrap gap-4 px-2 lg:px-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mb-2 md:mb-0 md:max-w-[356px] w-full bg-[white] rounded-[14px] p-[30px] shadow-[0_0_20px_rgba(0,0,0,0.1)] "
          >
            <div className="flex justify-start gap-3 mb-4">
              <Image
                className="rounded-[50px]"
                src={testimonial.image}
                alt={testimonial.name}
                width={44}
                height={44}
                priority
              />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-[13px] text-[#262c3b]">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <p className="text-[#252b3b]">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
