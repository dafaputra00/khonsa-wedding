// src/pages/LandingPage.jsx
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import berduaan from "../assets/landing page.jpg";
import { safeBase64 } from "@/lib/base64";
import { useEffect, useState } from "react";

export default function LandingPage({ onOpenInvitation }) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-[90%]"
      style={{ backgroundImage: `url(${berduaan})` }}
    >
      {/* Decorative Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" /> */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-slate-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-4 py-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Top Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-16 bg-slate-200/50" />
            {/* <div className="w-2 h-2 rounded-full bg-slate-300" > */}
            <div className="h-px w-12 sm:w-16 bg-slate-200/50" />
          </div>

          {/* Date and Time */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
          >
            <div className="inline-flex flex-col justify-between items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
              <Calendar className="w-5 h-5 text-slate-400" />
              <p className="text-gray-700 font-medium">
                {formatEventDate(config.data.date)}
              </p>
            </div>

            <div className="inline-flex flex-col items-center space-y-1 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
              <Clock className="w-5 h-5 text-slate-400" />
              <p className="text-gray-700 font-medium">{config.data.time}</p>
            </div>
          </motion.div> */}

          {/* New Text: The Wedding of */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-xl text-center font-medium text-slate-600 mb-1"
          >
            The Wedding
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-xl text-center font-medium text-slate-600 mb-4"
          >
            of
          </motion.p>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
                {config.data.groomInitial}
                <span className="text-slate-400 mx-2 sm:mx-3">&</span>
                {config.data.brideInitial}
              </h1>
              <div className="h-px w-16 sm:w-24 mx-auto bg-slate-200" />
            </div>
          </motion.div>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-xl text-center font-medium text-slate-600 mb-4 pt-4"
        >
          21 . 06 . 2025
        </motion.p>

        {/* Greeting Section at Bottom */}
        <div className="text-center mt-auto">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-16 bg-slate-200/50" />
            <div className="h-px w-12 sm:w-16 bg-slate-200/50" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="space-y-2"
          >
            <p className="text-gray-500 font-serif italic text-sm">
              Kepada Yth.
            </p>
            <p className="text-gray-600 font-medium text-sm">
              Bapak/Ibu/Saudara/i
            </p>
            <p className="text-slate-500 font-semibold text-lg">
              {guestName ? guestName : "Tamu"}
            </p>
          </motion.div>

          {/* Open Invitation Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 sm:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenInvitation}
              className="group relative w-full bg-slate-500 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-medium shadow-lg hover:bg-slate-600 transition-all duration-200"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Buka Undangan</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
