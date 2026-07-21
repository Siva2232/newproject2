import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Our Expertise", path: "/services" },
  { name: "EV Infra", path: "/ev-infra" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Story", path: "/about" },
  { name: "Contact us", path: "/contact" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop — click to close */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-[85vw] max-w-xs bg-[#00162E] border-l border-[#C5A059]/20 p-6 sm:p-8 flex flex-col overflow-y-auto transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="self-end mb-8 p-2 rounded-full border border-[#C5A059]/30 text-[#C5A059] hover:bg-[#C5A059]/10 transition-colors"
        >
          <X size={18} />
        </button>

        <ul className="space-y-5 uppercase tracking-widest text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors ${
                  location.pathname === link.path
                    ? "text-[#C5A059]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
