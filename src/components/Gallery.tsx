import { motion } from "motion/react";

const artworks = [
  {
    id: 1,
    title: "Monolith I",
    artist: "Elias Thorne",
    category: "Geometric",
    image: "https://picsum.photos/seed/art1/800/1000",
    price: "$1,200",
  },
  {
    id: 2,
    title: "Vortex Study",
    artist: "Sarah Chen",
    category: "Abstract",
    image: "https://picsum.photos/seed/art2/800/1000",
    price: "$850",
  },
  {
    id: 3,
    title: "Linear Silence",
    artist: "Marcus Vane",
    category: "Minimalist",
    image: "https://picsum.photos/seed/art3/800/1000",
    price: "$2,400",
  },
  {
    id: 4,
    title: "Convergence",
    artist: "Elena Rossi",
    category: "Modern",
    image: "https://picsum.photos/seed/art4/800/1000",
    price: "$1,800",
  },
  {
    id: 5,
    title: "Prism Flow",
    artist: "David K.",
    category: "Digital",
    image: "https://picsum.photos/seed/art5/800/1000",
    price: "$950",
  },
  {
    id: 6,
    title: "Shadow & Form",
    artist: "Aria Sterling",
    category: "Geometric",
    image: "https://picsum.photos/seed/art6/800/1000",
    price: "$3,100",
  },
];

export default function Gallery() {
  return (
    <section id="collection" className="py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gray-dark mb-4 block">Curated Selection</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">Featured Artworks</h2>
          </div>
          <div className="flex gap-8 border-b border-brand-gray-medium pb-4">
            {["All", "Paintings", "Prints", "Digital"].map((filter) => (
              <button key={filter} className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-brand-gray-dark transition-colors">
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-gray-light mb-6">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-4 py-2 bg-brand-white text-[10px] uppercase tracking-widest">View Details</span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif mb-1">{art.title}</h3>
                  <p className="text-xs text-brand-gray-dark uppercase tracking-widest">{art.artist}</p>
                </div>
                <span className="text-sm font-medium">{art.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button className="text-xs uppercase tracking-[0.4em] font-semibold border-b-2 border-brand-black pb-2 hover:text-brand-gray-dark hover:border-brand-gray-dark transition-all">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
