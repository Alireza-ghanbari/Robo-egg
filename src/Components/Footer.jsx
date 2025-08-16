import robot from "../assets/robot-head.png";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="container py-4 px-8 mt-32 fixed bottom-8 right-0 left-0 ">
      <div className="w-full flex items-center justify-between bg-sky-700 rounded-2xl px-3 py-2">
        <div className="">
            <img src={robot} className="h-14" />
        </div>
        <div className="flex items-center justify-center space-x-2 text-3xl text-white">
          <FaWhatsapp />
          <IoLogoInstagram />
          <FaTelegramPlane />
        </div>
        <h1 className="gap-1 items-center justify-center font-bold text-2xl flex text-amber-50">
          <span className=""><span className="text-orange-500 mx-1">!</span>Egg</span>
          <span className="">ROBO</span>
        </h1>
      </div>
    </footer>
  );
}
