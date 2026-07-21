import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import EvInfraPreview from "../components/home/EvInfraPreview";
import Testimonials from "../components/home/Testimonials";
import MapSection from "../components/contact/MapSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <EvInfraPreview />
      <Testimonials />
      <MapSection />
    </>
  );
};

export default Home;
