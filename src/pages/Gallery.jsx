import config from "@/config/config";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { MessageCircleHeart } from "lucide-react";

export default function Location() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  return (
    <>
      {/* Gallery section */}
      <section
        id="gallery"
        className="min-h-screen relative overflow-hidden"
        ref={containerRef}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl text-center mb-8 mx-4 md:mx-0 font-serif text-gray-800">
            Wedding Gallery
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mt-8 mb-8"
        >
          <div className="h-[1px] w-12 bg-slate-200" />
          <div className="text-slate-400">
            <MessageCircleHeart className="w-4 h-4" />
          </div>
          <div className="h-[1px] w-12 bg-slate-200" />
        </motion.div>

        <div className="relative px-2 md:px-0">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 auto-rows-[250px] md:auto-rows-[320px]">
            {config.data.galleries.map((image, index) => (
              <div key={index} className={`${image.span}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(image.src)}
                  className="w-full h-full object-cover object-center cursor-zoom-in hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Local Modal with Framer Motion */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20"
                onClick={() => setSelectedImage(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative"
                  //   onClick={(e) => e.stopPropagation()} // ⛔ prevents background click from closing
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl"
                  />
                  <button
                    className="absolute -top-4 -right-4 bg-white text-black text-xl rounded-full px-3 py-1 font-bold shadow"
                    onClick={() => setSelectedImage(null)}
                  >
                    &times;
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
