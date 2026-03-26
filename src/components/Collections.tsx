import { motion } from "motion/react";

const collections = [
  {
    title: "Abstract",
    description: "Non-representational forms that challenge perception.",
    image: "https://picsum.photos/seed/coll1/1200/800",
    count: "24 Pieces",
  },
  {
    title: "Geometric",
    description: "The mathematical beauty of structure and symmetry.",
    image: "https://picsum.photos/seed/coll2/1200/800",
    count: "18 Pieces",
  },
  {
    title: "Modern",
    description: "Contemporary visions of the world we inhabit.",
    image: "https://picsum.photos/seed/coll3/1200/800",
    count: "32 Pieces",
  },
  {
    title: "Limited",
    description: "Exclusive editions for the discerning collector.",
    image: "https://picsum.photos/seed/coll4/1200/800",
    count: "12 Pieces",
  },
];

export default function Collections() {
  return (
    <section id="categories" className="py-32 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gray-dark mb-4 block">Categories</span>
          <h2 className="text-5xl md:text-6xl font-serif">Featured Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-[16/10] bg-brand-black"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-brand-white">
                <span className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-70">{collection.count}</span>
                <h3 className="text-4xl font-serif mb-4">{collection.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs leading-relaxed">
                  {collection.description}
                </p>
                <div className="mt-8 w-12 h-[1px] bg-brand-white group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
