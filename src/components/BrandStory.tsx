import { motion } from "motion/react";

export default function BrandStory() {
  return (
    <section id="story" className="py-32 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-brand-gray-light overflow-hidden">
              <img 
                src="https://picsum.photos/seed/studio/800/1200" 
                alt="Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-black p-12 text-brand-white hidden md:flex flex-col justify-center">
              <span className="text-4xl font-serif mb-2 italic">12+</span>
              <p className="text-[10px] uppercase tracking-widest leading-relaxed">Years of Artistic Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gray-dark mb-8 block">Our Vision</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">
              Crafting a Legacy of <br />
              <span className="italic font-light">Pure Expression</span>
            </h2>
            
            <div className="space-y-8 text-brand-gray-dark leading-relaxed max-w-lg">
              <p>
                Trinity Art was founded on the belief that geometry is the universal language of the soul. We curate works that bridge the gap between mathematical precision and raw human emotion.
              </p>
              <p>
                Our mission is to provide a platform for artists who push the boundaries of form and space, creating timeless pieces that transform environments and inspire contemplation.
              </p>
              <p>
                Every piece in our collection is hand-selected for its craftsmanship, vision, and ability to resonate within contemporary spaces.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-brand-black font-semibold uppercase tracking-widest text-[10px] mb-4">Craftsmanship</h4>
                <p className="text-xs text-brand-gray-dark">Uncompromising quality in every print and canvas.</p>
              </div>
              <div>
                <h4 className="text-brand-black font-semibold uppercase tracking-widest text-[10px] mb-4">Curation</h4>
                <p className="text-xs text-brand-gray-dark">Expertly selected works from global visionaries.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
