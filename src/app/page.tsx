import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoList from "./components/LogoList";


export default function HomePage() {
  return (
    <>
      <div  className="relative z-[-1] bg-[url('/images/i1.avif')] bg-cover bg-center h-[vh]">
        <Header></Header>
        <HeroSection></HeroSection>
      </div>
      <LogoList></LogoList>


    </>
  );
}

