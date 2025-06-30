import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  return (
    <>
      <div  className="relative z-[-1] bg-[url('/images/i1.avif')] bg-cover bg-center h-[vh]">
        <Header></Header>
        <HeroSection></HeroSection>
      </div>
      {/* <Footer></Footer> */}

      {/* <Footer></Footer> */}
    </>
  );
}

{
  /* <div className="absolute z-[-1] bg-[url('/images/i1.avif')] bg-cover bg-center h-[500px]"></div> */
}
// I have two components and this components should have bg image, how to set
