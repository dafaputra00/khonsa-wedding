import Hero from "@/pages/Hero";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";
import Stories from "./Stories";
import background1 from "../assets/background1.png";
import { motion } from "framer-motion";

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
        <Stories />
        <Gifts />
        <Wishes />
        <footer className="text-center text-sm text-zinc-500 py-4 mb-8">
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
            href="https://github.com/dafaputra00"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aziz
          </a>{" "}
          💙{" "}
          <a
            href="https://github.com/khonsaazmi"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khonsa
          </a>
        </footer>
      </motion.div>
    </div>
  );
}
