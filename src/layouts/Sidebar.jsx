const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed inset-0 bg-black/80 z-50 transform 
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      transition-transform duration-500`}>
      
      <div className="bg-secondary w-72 h-full p-8">
        <button onClick={() => setIsOpen(false)} className="text-accent mb-8">
          Close
        </button>

        <ul className="space-y-6 uppercase tracking-widest">
          <li>Home</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
