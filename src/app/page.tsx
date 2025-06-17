"use client";
import Navbar from "../../components/Navbar";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import HeroSection from "../../components/home/Hero";

// This component is wrapped in <Provider>, so we can safely use Redux hooks here
const HomeContent = () => {
  const themeMode = useAppSelector((state) => state.darkTheme.mode);

  return (
    <div
      className={`w-full min-h-screen ${
        themeMode === "dark"
          ? "bg-gray-dark text-snow"
          : "bg-lightMode text-gray-dark"
      } font-poppins`}
    >
      <Navbar />
      <HeroSection />
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
