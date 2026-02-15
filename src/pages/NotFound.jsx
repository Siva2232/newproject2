import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white text-center">
      <h1 className="text-6xl font-bold text-accent mb-6">404</h1>
      <p className="text-gray-400 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="border border-accent px-6 py-3 hover:bg-accent hover:text-primary transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
