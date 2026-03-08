import { useParams } from "react-router-dom";
import ServiceDetails from "../components/services/ServiceDetails";
import servicesData from "../data/servicesData";
import productsData from "../data/productsData";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

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
      <ServiceDetails service={service} />

      {/* RELATED / MORE SERVICES PREVIEW */}
     <section className="py-32 bg-[#F9F9F7] border-t border-stone-200">
  <Container>
    {/* Refined Header with Tracking */}
    <div className="flex flex-col items-center text-center mb-20">
      <span className="text-[#C5A059] uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
        Discover More
      </span>
      <h3 className="text-4xl md:text-5xl font-serif text-stone-900">
        Related <span className="italic font-light text-stone-500">Capabilities</span>
      </h3>
    </div>

    {/* Grid remains unchanged in logic */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {servicesData
        .filter((s) => s.id !== service.id)
        .slice(0, 3)
        .map((s) => (
          <Link 
            key={s.id} 
            to={`/services/${s.id}`} 
            className="group block overflow-hidden transition-all duration-500 hover:-translate-y-2"
          >
            <ServiceCard
              title={s.title}
              number={String(s.id).padStart(2, "0")}
              tag={s.title.split(" ")[0]}
              image={s.image}
            />
          </Link>
        ))}
    </div>

    {/* Button with refined spacing */}
    <div className="mt-20 text-center">
      <Link
        to="/services"
        className="
          inline-flex items-center gap-2 
          text-[#C5A059] uppercase text-[11px] tracking-[0.2em] font-bold 
          border-b border-[#C5A059] pb-1 hover:pb-0 transition-all
        "
      >
        View All Services
      </Link>
    </div>
  </Container>
</section>

      {/* RELATED PRODUCTS PREVIEW */}
      <section className="py-32 bg-[#F9F9F7] border-t border-stone-200">
        <Container>
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-[#C5A059] uppercase text-[10px] font-bold tracking-[0.4em] mb-4">
              Explore Products
            </span>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900">
              Related <span className="italic font-light text-stone-500">Products</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData.slice(0, 3).map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group block overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                <ServiceCard
                  title={p.title}
                  number={String(p.id).padStart(2, "0")}
                  tag={p.title.split(" ")[0]}
                  image={p.image}
                />
              </Link>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link
              to="/services?view=products"
              className="
                inline-flex items-center gap-2 
                text-[#C5A059] uppercase text-[11px] tracking-[0.2em] font-bold 
                border-b border-[#C5A059] pb-1 hover:pb-0 transition-all
              "
            >
              View All Products
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
