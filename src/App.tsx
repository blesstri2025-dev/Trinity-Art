/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Collections from "./components/Collections";
import BrandStory from "./components/BrandStory";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-black selection:text-brand-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Collections />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
