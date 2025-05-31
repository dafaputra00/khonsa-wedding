import Hero from "@/pages/Hero";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";
import Stories from "./Stories";
import Gallery from "@/pages/Gallery";
import background1 from "../assets/background2.png";
import { motion } from "framer-motion";
import lamaran4 from "../assets/lamaran4.png"; // Uncomment if needed

// Main Invitation Content
export default function MainContent() {
  return (
    <div
      className="min-h-screen w-full bg-contain bg-center bg-repeat"
      // style={{ backgroundImage: `url(${background1})` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundImage: `url(${background1})` }}
        className="bg-slate-200 backdrop-blur-0 min-h-screen w-full bg-contain bg-center bg-repeat"
      >
        <Hero />
        <Events />
        <Location />
        <Gallery />
        <Stories />
        <Gifts />
        <Wishes />
        <footer
          className="text-center text-sm text-white mb-0"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgb(226, 232, 240),rgba(255, 255, 255, 0.16), #ffffff00), url(${lamaran4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "55vh",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 ">
            Template by{" "}
            <a
              href="https://github.com/mrofisr"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdur Rofi
            </a>
            , Modified by{" "}
            <a
              href="https://github.com/khonsaazmi"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khonsa
            </a>{" "}
            💙{" "}
            <a
              href="https://github.com/dafaputra00"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aziz
            </a>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
