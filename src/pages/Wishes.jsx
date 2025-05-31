import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Marquee from "@/components/ui/marquee";
import {
  Calendar,
  Clock,
  ChevronDown,
  User,
  MessageCircle,
  Send,
  Smile,
  CheckCircle,
  XCircle,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { formatEventDate } from "@/lib/formatEventDate";
import { useEffect } from "react";
import { supabase } from "../supabase-client";

export default function Wishes() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [newWish, setNewWish] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "attending", label: "Ya, saya akan hadir" },
    { value: "not-attending", label: "Tidak, saya tidak bisa hadir" },
    { value: "maybe", label: "Mungkin, saya akan konfirmasi nanti" },
  ];
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    getWishes();
  }, []);

  async function getWishes() {
    const { data } = await supabase.from("wishes").select("*");
    setWishes(data);
  }

  const handleSubmitWish = async (e) => {
    e.preventDefault();
    if (!newWish.trim()) return;

    setIsSubmitting(true);

    const newWishObj = {
      name: name, // Replace with actual user name
      message: newWish,
      attending: attendance,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from("wishes").insert([newWishObj]);

    if (error) {
      console.error(error);
    } else {
      setWishes((prev) => [...prev, newWishObj]);
      setNewWish("");
      setIsSubmitting(false);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };
  const getAttendanceIcon = (status) => {
    switch (status) {
      case "attending":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "not-attending":
        return <XCircle className="w-4 h-4 text-slate-500" />;
      case "maybe":
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      default:
        return null;
    }
  };
  return (
    <>
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-slate-500 font-medium"
            >
              Kirimkan Doa dan Harapan Terbaik Anda
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Pesan dan Doa
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-slate-200" />
              <MessageCircle className="w-5 h-5 text-slate-400" />
              <div className="h-[1px] w-12 bg-slate-200" />
            </motion.div>
          </motion.div>

          {/* Wishes List */}
          <div className="max-w-2xl mx-auto space-y-6">
            <AnimatePresence>
              <Marquee
                speed={10}
                gradient={false}
                className="[--duration:40s] py-2"
              >
                {wishes?.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative w-[280px]"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                    {/* Card content */}
                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-slate-100/50 shadow-md">
                      {/* Header */}
                      <div className="flex items-start space-x-3 mb-2">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                            {wish.name[0].toUpperCase()}
                          </div>
                        </div>

                        {/* Name, Time, and Attendance */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-800 text-sm truncate">
                              {wish.name}
                            </h4>
                            {getAttendanceIcon(wish.attending)}
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <time className="truncate">
                              {formatEventDate(wish.created_at)}
                            </time>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                        {wish.message}
                      </p>

                      {/* Optional: Time indicator for recent messages */}
                      {Date.now() - new Date(wish.created_at).getTime() <
                        3600000 && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                            New
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </Marquee>
            </AnimatePresence>
          </div>
          {/* Wishes Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <form onSubmit={handleSubmitWish} className="relative">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-slate-100/50 shadow-lg">
                <div className="space-y-2">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <User className="w-4 h-4" />
                      <span>Nama Kamu</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Masukan nama kamu..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-slate-100 focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2 relative"
                  >
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>Apakah kamu hadir?</span>
                    </div>

                    {/* Custom Select Button */}
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-slate-100 focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                    >
                      <span
                        className={
                          attendance ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {attendance
                          ? options.find((opt) => opt.value === attendance)
                              ?.label
                          : "Pilih kehadiran..."}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Options */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
                        >
                          {options.map((option) => (
                            <motion.button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setAttendance(option.value);
                                setIsOpen(false);
                              }}
                              whileHover={{
                                backgroundColor: "rgb(255, 241, 242)",
                              }}
                              className={`w-full px-4 py-2.5 text-left transition-colors
                                        ${
                                          attendance === option.value
                                            ? "bg-slate-50 text-slate-600"
                                            : "text-gray-700 hover:bg-slate-50"
                                        }`}
                            >
                              {option.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  {/* Wish Textarea */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Harapan kamu</span>
                    </div>
                    <textarea
                      placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                      className="w-full h-32 p-4 rounded-xl bg-white/50 border border-slate-100 focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50 resize-none transition-all duration-200"
                      value={newWish}
                      onChange={(e) => setNewWish(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Smile className="w-5 h-5" />
                    <span className="text-sm">Berikan Doa Anda</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                    ${
                      isSubmitting
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-slate-500 hover:bg-slate-600"
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting ? "Sedang Mengirim..." : "Kirimkan Doa"}
                    </span>
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
