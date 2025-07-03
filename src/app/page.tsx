import Footer from "./components/Footer";
import HeaderHero from "./components/HeaderHero";
import dynamic from "next/dynamic";
const LogoList = dynamic(() => import("./components/LogoList"));
const Track = dynamic(() => import("./components/Track"));
const Monitor = dynamic(() => import("./components/Monitor"));
const Plans = dynamic(() => import("./components/Plans"));
const Download = dynamic(() => import("./components/Download"));
const Thoughts = dynamic(() => import("./components/Thoughts"));
const Split = dynamic(() => import("./components/Split"));

export default function HomePage() {
  return (
    <>
      <HeaderHero />
      <LogoList />
      <Track />
      <Monitor />
      <Plans />
      <Download />
      <Thoughts />
      <Split />
      <Footer />
    </>
  );
}
