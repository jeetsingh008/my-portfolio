"use client"
import Navbar from "../../components/Navbar";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full min-h-screen bg-gray-dark font-poppins">
        <Navbar />
      </div>
    </Provider>
  );
}
