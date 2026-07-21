import { useParams, Link } from "react-router-dom";
import { SMART_LIVING_SOLUTIONS } from "./Services";
import Container from "../components/common/Container";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

const SmartLivingDetails = () => {
  const { id } = useParams();
  const idx = parseInt(id, 10);
  const item = SMART_LIVING_SOLUTIONS[idx];

  if (!item) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#001021] text-white">
        <h2 className="text-4xl font-serif">Solution not found.</h2>
      </section>
    );
  }

  return (
    <>
      {/* REFINED HERO */}
      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20 bg-[#001021] text-white overflow-hidden">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mb-10 md:mb-20">
            <div className="flex items-center gap-3 text-[#C5A059] mb-6">
              <Zap size={16} fill="#C5A059" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Automation Series</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-[1] md:leading-[0.9]">{item.title}</h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl md:rounded-[2rem] overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001021] via-transparent to-transparent" />
          </motion.div>
        </Container>
      </section>

      {/* CONTENT WITH GLASSMORPHIC TOUCH */}
      <section className="py-16 md:py-24 bg-[#F5F5F3] text-stone-900">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
               <div className="sticky top-32 p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-4">Core Benefits</span>
                  <ul className="space-y-4">
                     {["Enhanced Security", "Energy Efficient", "Seamless Control", "Bespoke Design"].map((b) => (
                        <li key={b} className="flex items-center gap-2 text-stone-600 text-sm font-light">
                           <ChevronRight size={14} className="text-[#C5A059]" /> {b}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-serif text-stone-800 leading-relaxed mb-10 md:mb-20">
                {item.details}
              </p>
              
              {item.sections?.map((sec, si) => (
                <div key={si} className="mb-10 md:mb-20 border-l-2 border-[#C5A059] pl-5 md:pl-8">
                  <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-stone-900">{sec.title}</h2>
                  <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED SOLUTIONS: Curated Grid */}
      <section className="py-16 md:py-32 bg-[#F9F9F7]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-serif">Related Solutions</h3>
            <Link to="/smart-living" className="text-[#C5A059] flex items-center gap-2 text-sm font-bold uppercase tracking-widest shrink-0">
              Explore All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {SMART_LIVING_SOLUTIONS.filter((_, i) => i !== idx).slice(0, 3).map((s, i) => (
              <Link key={i} to={`/smart-living/${SMART_LIVING_SOLUTIONS.indexOf(s)}`} className="group relative block overflow-hidden rounded-2xl h-[280px] md:h-[350px]">
                <img src={s.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.2em] font-bold">Solution {i+1}</span>
                  <h4 className="text-xl text-white font-serif mt-2">{s.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
export default SmartLivingDetails;