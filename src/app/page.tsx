import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogoList from "./components/LogoList";
import Track from "./components/Track";
import Monitor from "./components/Monitor";
import Plans from "./components/Plans";
import Download from "./components/Download";
import Thoughts from "./components/Thoughts";
import Split from "./components/Split";
import HeaderHero from "./components/HeaderHero";


export default function HomePage() {
  return (
    <>
      <HeaderHero></HeaderHero>
      <LogoList></LogoList>
      <Track></Track>
      <Monitor></Monitor>
      <Plans></Plans>
      <Download></Download>
      <Thoughts></Thoughts>
      <Split></Split>
      <Footer></Footer>
    </>
  );
}
