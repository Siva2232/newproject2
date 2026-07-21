import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  Phone,
  BatteryCharging,
  Cable,
  Factory,
  ShieldCheck,
} from "lucide-react";
import Container from "../common/Container";
import evInfraData from "../../data/evInfraData";

const FEATURE_ICONS = [BatteryCharging, Cable, Factory, ShieldCheck];

const EvInfraPreview = () => {
  const reduceMotion = useReducedMotion();
  const { hero, market, technology, roadmap, contact } = evInfraData;

  const anim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <section className="relative py-16 md:py-28 bg-[#001021] overflow-hidden border-y border-white/5">
      {/* Kinetic watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] flex items-center select-none">
        <h2 className="text-[22vw] font-serif italic text-white whitespace-nowrap leading-none">
          CHARGING — CHARGING
        </h2>
      </div>
      {/* Yellow glow accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,214,0,0.08),transparent_45%)]" />

      <Container>
        <div className="relative z-10">
          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <motion.div {...anim} className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD600] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD600]" />
                </span>
                <Zap size={14} className="text-[#FFD600]" fill="#FFD600" />
                <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold">
                  New · EV Infrastructure
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white tracking-tighter leading-[1.05] mb-5">
                The Future Is{" "}
                <span className="italic font-light text-[#FFD600]">Charging</span>
              </h2>

              <p className="text-white/55 text-base md:text-lg font-light leading-relaxed max-w-md border-l border-[#FFD600]/40 pl-4 md:pl-6 mb-8">
                Own and operate your EV charging station with the FOFO model —
                built, certified, and commissioned by HTSS EV Infra.
              </p>

              {/* Tech feature highlights */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {technology.points.map((point, i) => {
                  const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                  return (
                    <div
                      key={point.title}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD600]/35 transition-colors"
                    >
                      <div className="shrink-0 w-9 h-9 rounded-full bg-[#FFD600]/15 text-[#FFD600] flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm text-white/80 font-light leading-snug">
                        {point.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full border border-[#FFD600]/25 bg-[#FFD600]/10 text-[10px] uppercase tracking-[0.2em] font-bold text-[#FFD600]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/ev-infra"
                  className="group inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-[#FFD600] text-[#00162E] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors duration-300"
                >
                  Explore EV Infra
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:border-[#FFD600] hover:text-[#FFD600] transition-colors duration-300"
                >
                  <Phone size={14} /> {contact.phone}
                </a>
              </div>
            </motion.div>

            {/* Right: image card */}
            <motion.div {...anim} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/11]">
                <Link to="/ev-infra" className="group block h-full">
                  <img
                    src={hero.image}
                    alt="HTSS EV charging station"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00162E]/90 via-[#00162E]/20 to-transparent" />

                  {/* Floating brand chip */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#FFD600]/25">
                    <Zap size={12} className="text-[#FFD600]" fill="#FFD600" />
                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/80">
                      HTSS EV Infra · FOFO
                    </span>
                  </div>

                  {/* Stat strip over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 grid grid-cols-2 gap-4">
                    {market.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl md:text-3xl font-serif text-[#FFD600] tracking-tight">
                          {stat.value}
                        </p>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60 font-bold mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Link>
              </div>

              {/* Growth stat cards under image */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {market.stats.slice(2, 4).map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/10"
                  >
                    <p className="text-xl md:text-2xl font-serif text-[#FFD600] tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/50 font-bold mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* MINI ROADMAP STRIP */}
          <motion.div {...anim} className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 md:mb-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
                Six steps from site study to revenue
              </p>
              <Link
                to="/ev-infra"
                className="inline-flex items-center gap-2 text-[#FFD600] text-[10px] uppercase tracking-[0.25em] font-bold hover:text-white transition-colors shrink-0"
              >
                Full Roadmap <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {roadmap.steps.map((step) => (
                <div
                  key={step.num}
                  className="p-3.5 md:p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FFD600]/30 transition-colors"
                >
                  <p className="text-[#FFD600] text-[10px] font-mono tracking-[0.2em] mb-2">
                    {step.num}
                  </p>
                  <p className="text-xs md:text-[13px] text-white/70 font-medium leading-snug">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EvInfraPreview;
