import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/technology", label: "Technology" },
  { to: "/defence", label: "Defence" },
  { to: "/transportation", label: "Transportation" },
  { to: "/recreation", label: "Recreation" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b border-border"
          : "bg-background/60 backdrop-blur-xl"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/">
          <img
            src="https://cdn.prod.website-files.com/67c8b53c8bda1119d4034208/6841ccda1df59e27966e9224_ENVGO_Logo-Primary-Midnight.png"
            alt="ENVGO"
            className="h-7 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-body font-medium transition-colors hover:text-envgo-marine after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-envgo-marine after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                location.pathname === link.to
                  ? "text-envgo-marine after:scale-x-100"
                  : "text-envgo-grey"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 text-sm font-body font-bold uppercase tracking-wide rounded-full border border-envgo-marine text-envgo-marine hover:bg-envgo-marine hover:text-primary-foreground transition-all duration-300"
          >
            Get started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-body font-medium transition-colors hover:text-envgo-marine ${
                  location.pathname === link.to
                    ? "text-envgo-marine"
                    : "text-envgo-grey"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-block w-fit px-5 py-2 text-sm font-body font-bold uppercase tracking-wide rounded-full border border-envgo-marine text-envgo-marine"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
