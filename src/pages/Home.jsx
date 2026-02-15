import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import MapSection from "../components/contact/MapSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
      <MapSection />
    </>
  );
};

export default Home;
