import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  BatteryCharging,
  Cable,
  ShieldCheck,
  Factory,
} from "lucide-react";
import Container from "../components/common/Container";
import evInfraData from "../data/evInfraData";

const fadeUp = (reduceMotion) =>
  reduceMotion
    ? { initial: { opacity: 1 }, whileInView: { opacity: 1 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        viewport: { once: true, margin: "-60px" },
      };

const EvInfra = () => {
  const reduceMotion = useReducedMotion();
  const anim = fadeUp(reduceMotion);
  const {
    brand,
    tagline,
    hero,
    market,
    technology,
    pillars,
    roadmap,
    ownership,
    audiences,
    vision,
    contact,
  } = evInfraData;

  return (
    <div className="bg-[#00162E] text-white overflow-x-clip">
      {/* 1. HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt="HTSS EV charging station in an open landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00162E] via-[#00162E]/75 to-[#00162E]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,0,0.12),transparent_45%)]" />
        </div>

        <Container className="relative z-10 pb-16 md:pb-24 pt-36 md:pt-44">
          <motion.div {...anim} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <Zap size={16} className="text-[#FFD600]" fill="#FFD600" />
              <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.4em] font-bold">
                {hero.eyebrow}
              </span>
            </div>
            <p className="text-white/50 text-[11px] uppercase tracking-[0.35em] font-bold mb-4">
              {brand} · {tagline}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tighter mb-6">
              The Future Is{" "}
              <span className="italic font-light text-[#FFD600]">Charging</span>
            </h1>
            <p className="text-white/65 text-base md:text-xl font-light leading-relaxed max-w-xl border-l border-[#FFD600]/40 pl-5 mb-8">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full border border-[#FFD600]/30 bg-[#FFD600]/10 text-[10px] uppercase tracking-[0.2em] font-bold text-[#FFD600]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#ev-contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFD600] text-[#00162E] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors"
              >
                {hero.cta} <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:border-[#FFD600] hover:text-[#FFD600] transition-colors"
              >
                General Enquiry
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. MARKET OPPORTUNITY */}
      <section className="py-16 md:py-28 bg-[#001021] border-y border-white/5">
        <Container>
          <motion.div {...anim} className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
              {market.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight mb-5">
              {market.title}
            </h2>
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed">
              {market.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {market.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...anim}
                transition={{ ...anim.transition, delay: reduceMotion ? 0 : i * 0.08 }}
                className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FFD600]/35 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-serif text-[#FFD600] mb-3 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-white mb-2">{stat.label}</p>
                <p className="text-xs text-white/40 font-light leading-relaxed">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. TECHNOLOGY */}
      <section className="py-16 md:py-28 relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...anim} className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
                {technology.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mb-8 leading-tight">
                {technology.title}
              </h2>
              <div className="space-y-5">
                {technology.points.map((point) => (
                  <div
                    key={point.title}
                    className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFD600]/15 text-[#FFD600] flex items-center justify-center">
                      {point.title.includes("60") ? (
                        <BatteryCharging size={18} />
                      ) : point.title.includes("OCPP") ? (
                        <Cable size={18} />
                      ) : point.title.includes("LECS") ? (
                        <Factory size={18} />
                      ) : (
                        <ShieldCheck size={18} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-serif mb-1">{point.title}</h3>
                      <p className="text-sm text-white/50 font-light leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...anim}
              className="lg:col-span-7 order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={technology.image}
                alt="Modular EV charger technology and product callouts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-xs p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-md border border-[#FFD600]/25">
                <p className="text-[#FFD600] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                  Modular Chassis
                </p>
                <p className="text-sm text-white/80 font-light">
                  Upgrade from 60 kW to 120 kW in the same machine as demand grows.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. EPC PILLARS */}
      <section className="py-16 md:py-28 bg-[#001021] border-y border-white/5">
        <Container>
          <motion.div {...anim} className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
              {pillars.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight">
              {pillars.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {pillars.items.map((item, i) => (
              <motion.div
                key={item.num}
                {...anim}
                transition={{ ...anim.transition, delay: reduceMotion ? 0 : i * 0.05 }}
                className="group relative p-6 md:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FFD600]/40 transition-colors overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-4xl font-serif text-white/[0.06] group-hover:text-[#FFD600]/15 transition-colors">
                  {item.num}
                </span>
                <p className="text-[#FFD600] text-[10px] font-mono tracking-[0.25em] mb-4">
                  {item.num}
                </p>
                <h3 className="text-lg font-serif mb-3 pr-8">{item.title}</h3>
                <p className="text-sm text-white/45 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. FOFO ROADMAP */}
      <section className="py-16 md:py-28 relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 md:mb-16">
            <motion.div {...anim} className="lg:col-span-6">
              <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
                {roadmap.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mb-5">
                {roadmap.title}
              </h2>
              <p className="text-white/50 font-light leading-relaxed max-w-md">
                A clear six-step path from site study to a commissioned, revenue-ready charging station.
              </p>
            </motion.div>
            <motion.div
              {...anim}
              className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={roadmap.image}
                alt="Branded EV charging canopy infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162E]/60 to-transparent" />
            </motion.div>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:grid grid-cols-6 gap-4 relative">
            <div className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-[#FFD600]/60 via-[#FFD600]/20 to-transparent" />
            {roadmap.steps.map((step) => (
              <motion.div key={step.num} {...anim} className="relative pt-2">
                <div className="w-4 h-4 rounded-full bg-[#FFD600] mb-6 relative z-10 shadow-[0_0_18px_rgba(255,214,0,0.45)]" />
                <p className="text-[#FFD600] text-[10px] font-mono tracking-[0.25em] mb-2">
                  {step.num}
                </p>
                <h3 className="text-base font-serif mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-white/45 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile stacked steps */}
          <div className="md:hidden space-y-4">
            {roadmap.steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFD600] text-[#00162E] flex items-center justify-center text-xs font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-serif mb-1">{step.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. OWNERSHIP MODEL */}
      <section className="py-16 md:py-28 bg-[#001021] border-y border-white/5">
        <Container>
          <motion.div {...anim} className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
              {ownership.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight mb-5">
              {ownership.title}
            </h2>
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed">
              {ownership.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            <motion.div
              {...anim}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FFD600] text-[#00162E]"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold mb-4 opacity-70">
                Franchise Owner
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">You lead the growth</h3>
              <ul className="space-y-3">
                {ownership.owner.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base font-light">
                    <Check size={16} className="mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...anim}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold mb-4 text-[#FFD600]">
                HTSS EV Infra
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-6">We handle the heavy lifting</h3>
              <ul className="space-y-3">
                {ownership.htss.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/70 font-light">
                    <Check size={16} className="mt-1 shrink-0 text-[#FFD600]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 7. AUDIENCES */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              {...anim}
              className="lg:col-span-5 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={audiences.image}
                alt="Multi-bay HTSS EV charging hub under canopy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162E]/80 via-transparent to-transparent" />
            </motion.div>

            <div className="lg:col-span-7">
              <motion.div {...anim} className="mb-8 md:mb-10">
                <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
                  {audiences.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight">
                  {audiences.title}
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {audiences.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...anim}
                    transition={{ ...anim.transition, delay: reduceMotion ? 0 : i * 0.06 }}
                    className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10"
                  >
                    <h3 className="text-lg font-serif mb-2 text-[#FFD600]">{item.title}</h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. VISION / MISSION */}
      <section className="py-16 md:py-28 bg-[#001021] border-y border-white/5">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <motion.div
              {...anim}
              className="lg:col-span-7 relative min-h-[280px] md:min-h-[420px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={vision.image}
                alt="EV charging at dusk with HTSS infrastructure"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00162E]/85 via-[#00162E]/45 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
                <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.4em] font-bold mb-3">
                  {vision.eyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif tracking-tight max-w-lg">
                  {vision.title}
                </h2>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <motion.div
                {...anim}
                className="flex-1 p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10"
              >
                <p className="text-[#FFD600] text-[10px] uppercase tracking-[0.35em] font-bold mb-4">
                  Vision
                </p>
                <p className="text-base md:text-lg font-serif leading-relaxed text-white/85">
                  {vision.visionText}
                </p>
              </motion.div>
              <motion.div
                {...anim}
                className="flex-1 p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10"
              >
                <p className="text-[#FFD600] text-[10px] uppercase tracking-[0.35em] font-bold mb-4">
                  Mission
                </p>
                <p className="text-base md:text-lg font-serif leading-relaxed text-white/85">
                  {vision.missionText}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. CONTACT CTA */}
      <section id="ev-contact" className="py-16 md:py-28 relative scroll-mt-24">
        <Container>
          <div className="relative rounded-3xl md:rounded-[40px] overflow-hidden border border-[#FFD600]/20">
            <img
              src={contact.image}
              alt="HTSS EV charging station with power cabinet"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00162E]/88" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,214,0,0.18),transparent_50%)]" />

            <div className="relative z-10 p-6 sm:p-10 md:p-16 grid lg:grid-cols-12 gap-10">
              <motion.div {...anim} className="lg:col-span-7">
                <span className="text-[#FFD600] text-[10px] uppercase tracking-[0.45em] font-bold block mb-4">
                  {contact.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight mb-6">
                  {contact.title}
                </h2>
                <p className="text-white/55 font-light mb-8 max-w-xl">
                  Speak with HTSS EV Infra about FOFO ownership, EPC delivery, and modular charging deployment.
                </p>

                <div className="space-y-4 mb-10">
                  <p className="text-white font-serif text-xl">{contact.company}</p>
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-3 text-white/80 hover:text-[#FFD600] transition-colors break-all"
                  >
                    <Phone size={16} className="text-[#FFD600] shrink-0" />
                    {contact.phone}
                  </a>
                  <a
                    href={contact.emailHref}
                    className="flex items-center gap-3 text-white/80 hover:text-[#FFD600] transition-colors break-all"
                  >
                    <Mail size={16} className="text-[#FFD600] shrink-0" />
                    {contact.email}
                  </a>
                  <p className="flex items-start gap-3 text-white/60">
                    <MapPin size={16} className="text-[#FFD600] shrink-0 mt-1" />
                    <span>{contact.address}</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFD600] text-[#00162E] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-colors"
                  >
                    Call Now <Phone size={14} />
                  </a>
                  <a
                    href={contact.emailHref}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/25 text-[10px] font-bold uppercase tracking-[0.3em] hover:border-[#FFD600] hover:text-[#FFD600] transition-colors"
                  >
                    Email HTSS <Mail size={14} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                {...anim}
                className="lg:col-span-5 p-6 md:p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md"
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#FFD600] font-bold mb-5">
                  Ecosystem Partners
                </p>
                <div className="flex flex-wrap gap-2">
                  {contact.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-3 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.15em] text-white/55"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-2">
                    Website
                  </p>
                  <a
                    href={contact.websiteHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFD600] hover:underline break-all"
                  >
                    {contact.website}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default EvInfra;
