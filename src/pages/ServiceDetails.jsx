import { useParams } from "react-router-dom";
import ServiceDetails from "../components/services/ServiceDetails";
import servicesData from "../data/servicesData";
import Container from "../components/common/Container";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => String(s.id) === String(id));

  if (!service) {
    return (
      <section className="py-24 bg-primary text-white">
        <Container>
          <h2 className="text-3xl font-semibold">Service not found</h2>
          <p className="text-muted mt-4">The requested service does not exist.</p>
        </Container>
      </section>
    );
  }

  return (
    <>
      <ServiceDetails title={service.title} description={service.fullDescription || service.shortDescription} image={service.image} />
      {/* Optionally render related services or CTA below */}
    </>
  );
};

export default ServiceDetailsPage;
