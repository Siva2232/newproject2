import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetailsPage from "../pages/ServiceDetails";
import ProductDetailsPage from "../pages/ProductDetails";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import GalleryPage from "../pages/GalleryPage";
import Contact from "../pages/Contact";
import SmartLivingPage from "../pages/SmartLiving";
import SmartLivingDetails from "../pages/SmartLivingDetails";
import EvInfra from "../pages/EvInfra";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },

      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServiceDetailsPage /> },
      { path: "products", element: <Services /> /* reuse Services component to render products view */ },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "smart-living", element: <SmartLivingPage /> },
      { path: "smart-living/:id", element: <SmartLivingDetails /> },
      { path: "ev-infra", element: <EvInfra /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
