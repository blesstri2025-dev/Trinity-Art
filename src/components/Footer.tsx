import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 bg-brand-white border-t border-brand-gray-medium">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <Logo className="w-8 h-8" />
              <span className="font-serif text-lg tracking-widest uppercase">Trinity Art</span>
            </div>
            <p className="text-xs text-brand-gray-dark leading-relaxed max-w-xs">
              A contemporary art sanctuary dedicated to the intersection of geometry and human expression.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs text-brand-gray-dark uppercase tracking-widest">
              <li><a href="#collection" className="hover:text-brand-black transition-colors">Collection</a></li>
              <li><a href="#categories" className="hover:text-brand-black transition-colors">Categories</a></li>
              <li><a href="#story" className="hover:text-brand-black transition-colors">Our Story</a></li>
              <li><a href="#journal" className="hover:text-brand-black transition-colors">Journal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-xs text-brand-gray-dark uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Social</h4>
            <ul className="space-y-4 text-xs text-brand-gray-dark uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-gray-light gap-6">
          <p className="text-[10px] uppercase tracking-widest text-brand-gray-dark">
            © {currentYear} Trinity Art. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-brand-gray-dark">
            Designed for the Contemporary Soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
