const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`relative overflow-hidden px-8 py-3 uppercase tracking-widest text-sm font-medium transition-all duration-500 group
      ${
        variant === "primary"
          ? "bg-accent text-primary"
          : "border border-accent text-accent"
      }
      ${className}`}
    >
      <span className="relative z-10">{children}</span>

      {/* Hover Fill Effect */}
      <span className="absolute inset-0 bg-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
    </button>
  );
};

export default Button;
