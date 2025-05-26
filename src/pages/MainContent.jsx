import Hero from "@/pages/Hero";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";
import Stories from "./Stories";
import berduaan from "../assets/lamaran-rumput.jpg";

// Main Invitation Content
export default function MainContent() {
  return (
    <div
      className="min-h-screen w-full bg-contain bg-center"
      // style={{ backgroundImage: `url(${berduaan})` }}
    >
      <div className="bg-white/70 backdrop-blur-0 min-h-screen w-full">
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
      </div>
    </div>
  );
}
