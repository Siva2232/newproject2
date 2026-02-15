import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetailsPage from "../pages/ServiceDetails";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import GalleryPage from "../pages/GalleryPage";
import Contact from "../pages/Contact";
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
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
