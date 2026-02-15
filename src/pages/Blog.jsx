import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

const Blog = () => {
  return (
      <section className="py-24 bg-secondary text-white">
        <Container>
          <SectionTitle
            title="Design Insights"
            subtitle="Interior trends, tips & inspirations."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            <div className="bg-primary p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                2025 Interior Trends
              </h3>
              <p className="text-gray-400">
                Discover emerging design movements shaping luxury interiors.
              </p>
            </div>
          </div>
        </Container>
      </section>
  );
};

export default Blog;
