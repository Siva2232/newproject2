import heroImg from "../assets/ev/hero.jpg";
import techImg from "../assets/ev/tech.jpg";
import canopyImg from "../assets/ev/canopy.jpg";
import hubImg from "../assets/ev/hub.jpg";
import visionImg from "../assets/ev/vision.jpg";
import stationImg from "../assets/ev/station.jpg";

const evInfraData = {
  brand: "HTSS EV INFRA",
  tagline: "Your Trusted EPC Developers",
  hero: {
    eyebrow: "EV Infrastructure · FOFO",
    title: "The Future Is Charging",
    subtitle:
      "Franchise-owned, franchise-operated charging infrastructure for Bharat’s next mobility era — built, certified, and commissioned by HTSS EV Infra.",
    cta: "Start Your EV Project",
    image: heroImg,
    badges: ["60–120 kW Modular", "OCPP Ready", "FOFO Model"],
  },
  market: {
    eyebrow: "Market Opportunity",
    title: "Plant the infrastructure. Harvest the growth.",
    description:
      "India’s EV charging gap remains one of the strongest infrastructure opportunities for landowners, fuel retailers, and charge-point operators.",
    stats: [
      {
        value: "350:1",
        label: "Cars to chargers gap",
        note: "Demand far outpaces public charging supply.",
      },
      {
        value: "~3.2K",
        label: "Chargers in 2020",
        note: "Early-stage public charging footprint.",
      },
      {
        value: "~223K",
        label: "Projected by 2025–26",
        note: "Rapid near-term network expansion.",
      },
      {
        value: "5.9M",
        label: "Projected by 2040",
        note: "Long-horizon national charging scale.",
      },
    ],
  },
  technology: {
    eyebrow: "Technology Advantage",
    title: "Modular power. Open software. Future-ready hardware.",
    image: techImg,
    points: [
      {
        title: "60 → 120 kW Upgrade Path",
        desc: "Scale charging capacity inside the same machine chassis as demand grows.",
      },
      {
        title: "OCPP Flexibility",
        desc: "Open Charge Point Protocol support for CMS and app interoperability — without vendor lock-in.",
      },
      {
        title: "LECS-Built Machines",
        desc: "Hardware from LECS, with a long electrical engineering legacy and in-house manufacturing focus.",
      },
      {
        title: "Certified Commercial Stack",
        desc: "Positioned for regulated deployment with certification-ready commercial hardware.",
      },
    ],
  },
  pillars: {
    eyebrow: "EPC Excellence",
    title: "Eight pillars that carry the heavy lifting",
    items: [
      {
        num: "01",
        title: "Engineering & Approvals",
        desc: "Planning, documentation, and statutory coordination from day one.",
      },
      {
        num: "02",
        title: "Hassle-Free Construction",
        desc: "Civil works, HT lines, HV systems, and transformer coordination handled end-to-end.",
      },
      {
        num: "03",
        title: "24/7 Tech Support",
        desc: "Ongoing technical assistance so stations stay online and revenue-ready.",
      },
      {
        num: "04",
        title: "Zero Dead Investment",
        desc: "Certified commercial hardware built for longevity — not throwaway imports.",
      },
      {
        num: "05",
        title: "Infinite Upgradability",
        desc: "Modular architecture that evolves with traffic, power, and software needs.",
      },
      {
        num: "06",
        title: "Factory-Direct Spares",
        desc: "Direct spare-parts access for faster maintenance and lower downtime.",
      },
      {
        num: "07",
        title: "Low CapEx Planning",
        desc: "Investment blueprints oriented around practical CapEx and ROI pathways.",
      },
      {
        num: "08",
        title: "True Turnkey Delivery",
        desc: "From site selection to commissioning — we handle the heavy lifting.",
      },
    ],
  },
  roadmap: {
    eyebrow: "FOFO Roadmap",
    title: "Your brand. Our infrastructure. Maximum margins.",
    image: canopyImg,
    steps: [
      {
        num: "01",
        title: "Site & Traffic Study",
        desc: "Evaluate location potential, traffic patterns, and commercial fit.",
      },
      {
        num: "02",
        title: "DISCOM & Gov Sanctions",
        desc: "Coordinate utility and government approvals required for charging infrastructure.",
      },
      {
        num: "03",
        title: "Civil & Electrical Works",
        desc: "Execute foundation, cabling, earthing, and power infrastructure on site.",
      },
      {
        num: "04",
        title: "Hardware Manufacture & Cert",
        desc: "Deploy certified charging hardware aligned to project capacity.",
      },
      {
        num: "05",
        title: "Software & OCPP Setup",
        desc: "Integrate CMS/app workflows through open OCPP connectivity.",
      },
      {
        num: "06",
        title: "Commissioning & Handover",
        desc: "Test, certify, and hand over a revenue-ready charging station.",
      },
    ],
  },
  ownership: {
    eyebrow: "FOFO Ownership Model",
    title: "100% of the revenue stays with you",
    description:
      "FOFO means Franchise Owned, Franchise Operated. You own the brand economics at the site. HTSS builds, certifies, and commissions the infrastructure backbone.",
    owner: [
      "Site ownership and brand presence",
      "100% revenue and tariff control",
      "EB billing and day-to-day operations",
      "Staffing, CCTV, and on-site administration",
      "Customer experience and app support at the site",
    ],
    htss: [
      "EPC design, civil, and electrical delivery",
      "Hardware supply, certification, and commissioning",
      "OCPP / CMS technical integration",
      "Annual maintenance, firmware, and safety recertification",
      "Upgrade advisory as demand scales",
    ],
  },
  audiences: {
    eyebrow: "Who FOFO Is For",
    title: "Built for operators who want infrastructure without lock-in",
    image: hubImg,
    items: [
      {
        title: "Commercial Property Owners",
        desc: "Convert parking and roadside assets into long-term charging revenue.",
      },
      {
        title: "Fuel Pump Owners",
        desc: "Add EV charging alongside existing fuel retail operations.",
      },
      {
        title: "Tech & App Builders",
        desc: "Deploy open OCPP hardware under your own software stack.",
      },
      {
        title: "Existing CPOs",
        desc: "Scale with factory-direct machines and no proprietary lock-in.",
      },
    ],
  },
  vision: {
    eyebrow: "Vision & Mission",
    title: "Bharat’s trusted EV infrastructure partner",
    image: visionImg,
    visionText:
      "To build a nationwide smart charging network that makes electric mobility accessible, reliable, and commercially sustainable.",
    missionText:
      "Deliver end-to-end EPC charging infrastructure through durable partnerships — from engineering and approvals to commissioning and long-term support.",
  },
  contact: {
    eyebrow: "Partner With HTSS EV Infra",
    title: "Ready to launch your charging station?",
    image: stationImg,
    company: "HTSS EV Infra Developers",
    address: "Near Marthoma Church, YMCA, Alappuzha, Kerala 688001",
    phone: "+91 98473 63325",
    phoneHref: "tel:+919847363325",
    email: "htssevinfra@gmail.com",
    emailHref: "mailto:htssevinfra@gmail.com",
    website: "hometechsolutionsstudio.in",
    websiteHref: "https://hometechsolutionsstudio.in",
    partners: [
      "KSEB",
      "MNRE",
      "GoI",
      "ANERT",
      "iCAT",
      "ARAI Certified",
      "PM E-DRIVE",
      "Ministry of Heavy Industries",
    ],
  },
};

export default evInfraData;
