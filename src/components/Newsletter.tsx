import { motion } from "motion/react";

export default function Newsletter() {
  return (
    <section className="py-32 bg-brand-black text-brand-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] mb-8 block opacity-60">The Journal</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Join the Inner Circle</h2>
          <p className="text-brand-gray-dark mb-12 max-w-lg mx-auto leading-relaxed">
            Subscribe to receive exclusive previews of new collections, artist interviews, and invitations to private viewings.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-b border-brand-gray-dark py-4 text-xs tracking-widest focus:outline-none focus:border-brand-white transition-colors uppercase"
            />
            <button className="px-12 py-4 bg-brand-white text-brand-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-brand-gray-medium transition-colors">
              Subscribe
            </button>
          </form>
          
          <p className="mt-8 text-[10px] opacity-40 uppercase tracking-widest">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
