import "../../App.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import LiveResult from "../../components/LiveResults/LiveResults";
import { AboutSection } from "../../components/AboutSection/AboutSection";
import { Footer } from "../../components/Footer/Footer";
import { DownloadSection } from "../../components/DownloadSection/DownloadSection";



function MainPage({ toggleTheme }: { toggleTheme: () => void }) {

  return (
  <>
      <Navbar toggleTheme={toggleTheme}></Navbar>
      <HeroSection></HeroSection>
      <LiveResult></LiveResult>
      <AboutSection></AboutSection>
      <DownloadSection></DownloadSection>
      <Footer></Footer>
  </>
  );
}

export default MainPage;
