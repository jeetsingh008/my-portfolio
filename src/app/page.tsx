"use client";
import Navbar from "../../components/Navbar";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import HeroSection from "../../components/home/Hero";
import GetInTouch from "../../components/home/GetInTouch";
import SkillsSection from "../../components/home/Skills";
import PortfolioSection from "../../components/home/Portfolio";
import ContactSection from "../../components/home/Contact";
import Footer from "../../components/home/Footer";

// This component is wrapped in <Provider>, so we can safely use Redux hooks here
const HomeContent = () => {
  const themeMode = useAppSelector((state) => state.darkTheme.mode);

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ease-in-out ${
        themeMode === "dark"
          ? "bg-gray-dark text-snow"
          : "bg-lightMode text-gray-dark"
      } font-poppins`}
    >
      <Navbar />
      <HeroSection />
      <GetInTouch />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default function Home() {
  return (
    <Provider store={store}>
      <HomeContent />
    </Provider>
  );
}
