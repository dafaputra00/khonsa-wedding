import { Calendar, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import config from "@/config/config";
import { safeBase64 } from "@/lib/base64";
import foto1 from "../assets/foto1.jpg";
import jarimanis from "../assets/jarimanis.png";

export default function Hero() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");

    if (guestParam) {
      try {
        const decodedName = safeBase64.decode(guestParam);
        setGuestName(decodedName);
      } catch (error) {
        console.error("Error decoding guest name:", error);
        setGuestName("");
      }
    }
  }, []);

  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100"
          >
            <span className="text-xl sm:text-2xl font-bold text-slate-600">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x: Math.random() * window.innerWidth,
              y: -100,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${
                i % 3 === 0
                  ? "text-slate-400"
                  : i % 3 === 1
                    ? "text-pink-400"
                    : "text-red-400"
              }`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* nanti dipindah ke layout baru */}
      <motion.section
        id="hero-intro"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(${foto1})`, // Ganti path sesuai file kamu
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-200/10 via-slate-200/10 via-slate-100/10 via-slate-100/10 to-white/10 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-16 z-10 text-white"
        >
          <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-2">
            {config.data.brideInitial}
          </h1>
          <h2 className="text-2xl sm:text-4xl font-serif mb-2">&</h2>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">
            {config.data.groomInitial}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-16 z-10 text-white"
        >
          <h1 className="text-sm sm:text-xl font-bold mb-2">21 . 06 . 2025</h1>
        </motion.div>
      </motion.section>

      <section
        id="surat"
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      >
        <div className="absolute inset-0 bg-slate-800 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex z-10 text-white"
        >
          <img src={jarimanis} alt="promise" className="w-40" />
        </motion.div>

        <motion.div
          // initial={{ opacity: 0, scale: 0.9 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.5 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="flex center z-10 text-white mx-12"
        >
          <h2 className="text-sm sm:text-sm italic mb-4">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
            dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir.”
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="flex center z-10 text-white mx-12"
        >
          <h1 className="text-sm sm:text-sm italic font-bold mb-2">
            QS Ar-Rum: 21
          </h1>
        </motion.div>
      </section>

      <motion.section
        id="home"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
        // className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden"
        className="relative w-full  bg-cover bg-center flex flex-col justify-center items-center text-center py-10"
        // style={{
        //   backgroundImage: `url(${backgroundHero})`, // Ganti path sesuai file kamu
        // }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="space-y-6 relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            className="text-gray-500 font-light text-xl sm:text-3xl"
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            className="inline-block mx-auto"
          >
            <span className="px-4 py-1 text-sm bg-slate-50 text-slate-600 rounded-full border border-slate-200">
              Assalamualaikum Warahmatullahi Wabarakatuh
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-gray-500 font-light italic text-base sm:text-lg"
            >
              In Syaa Allah Kami Akan Menikah
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-1 border-slate-600">
                <img
                  src={config.data.bridePhoto}
                  alt="Bride Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via- slate-400 to-slate-500"
            >
              {config.data.brideName}
            </motion.h2>
            <motion.a
              href={`https://www.instagram.com/${config.data.brideInsta}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm flex justify-center"
            >
              <div className="bg-gray-100 px-2 py-2 rounded-lg shadow-md flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
                </svg>
                <span className="text-center">@{config.data.brideInsta}</span>
              </div>
            </motion.a>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm sm:text-sm font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800"
            >
              Putri dari
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm sm:text-lg font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800"
            >
              {config.data.parentBride}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm sm:text-sm font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800"
            >
              ({config.data.fromBride})
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-3xl sm:text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via- slate-400 to-slate-500"
            >
              &
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-1 border-slate-600">
                <img
                  src={config.data.groomPhoto}
                  alt="Groom Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via- slate-400 to-slate-500"
            >
              {config.data.groomName}
            </motion.h2>
            <motion.a
              href={`https://www.instagram.com/${config.data.groomInsta}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm flex justify-center"
            >
              <div className="bg-gray-100 px-2 py-2 rounded-lg shadow-md flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
                </svg>
                <span className="text-center">@{config.data.groomInsta}</span>
              </div>
            </motion.a>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm sm:text-sm font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800"
            >
              Putra dari
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-sm sm:text-lg font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mx-4"
            >
              {config.data.parentGroom}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-xs sm:text-sm  font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mx-4"
            >
              ({config.data.fromGroom})
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/50 backdrop-blur-md rounded-2xl" />
            <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-slate-100/20 rounded-full blur-xl" />
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-slate-100/20 rounded-full blur-xl" />
          </motion.div>

          {/* <CountdownTimer targetDate={config.data.date} /> */}

          <div className="pt-6 relative">
            <FloatingHearts />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="w-10 sm:w-12 h-10 sm:h-12 text-slate-500 mx-auto"
                fill="currentColor"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
