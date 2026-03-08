import { useParams } from "react-router-dom";
import ServiceDetails from "../components/services/ServiceDetails"; // reuse
import productsData from "../data/productsData";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <section className="py-24 bg-primary text-white">
        <Container>
          <h2 className="text-3xl font-semibold">Product not found</h2>
          <p className="text-muted mt-4">The requested product does not exist.</p>
        </Container>
      </section>
    );
  }

  return (
    <>
      <ServiceDetails service={product} />

      {/* Related products (other than current) + link back to products list */}
      <section className="py-24 bg-[#F9F9F7]">
        <Container>
          <h3 className="text-2xl font-serif mb-12">More Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="block">
                  <ServiceCard
                    title={p.title}
                    number={String(p.id).padStart(2, "0")}
                    tag={p.title.split(" ")[0]}
                    image={p.image}
                  />
                </Link>
              ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services?view=products"
              className="text-[#C5A059] uppercase text-sm tracking-widest font-bold hover:underline"
            >
              View All Products
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailsPage;
