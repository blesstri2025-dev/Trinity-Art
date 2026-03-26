import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Geometric Accents */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 border border-brand-black rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] border border-brand-black rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.4em] mb-8 text-brand-gray-dark">
            Established MMXXVI
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.1] mb-12 tracking-tight">
            Where Geometry <br />
            <span className="italic font-light">Meets Expression</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-brand-black text-brand-white text-xs uppercase tracking-[0.3em] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <p className="max-w-xs text-sm text-brand-gray-dark leading-relaxed text-left md:text-left border-l border-brand-gray-medium pl-6">
              A curated sanctuary for contemporary geometric art and minimalist expressions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 mb-8 origin-left">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-gray-medium relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-brand-black"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
