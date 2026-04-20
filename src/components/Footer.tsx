import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-border">
        {/* Left */}
        <div className="md:pr-8">
          <img
            src="https://cdn.prod.website-files.com/67c8b53c8bda1119d4034208/6841ccda1df59e27966e9224_ENVGO_Logo-Primary-Midnight.png"
            alt="ENVGO"
            className="h-6 w-auto brightness-0 invert mb-4"
          />
          <p className="text-sm font-body italic text-envgo-grey leading-relaxed">
            "Powering the next era of marine mobility."
          </p>

        </div>

        {/* Pages */}
        <div className="md:px-8">
          <div className="flex flex-col gap-2 text-sm font-body text-envgo-grey">
            <Link to="/technology" className="hover:text-envgo-marine transition-colors">Technology</Link>
            <Link to="/defence" className="hover:text-envgo-marine transition-colors">Defence</Link>
            {/* <Link to="/transportation" className="hover:text-envgo-marine transition-colors">Transportation</Link> */}
            <Link to="/recreation" className="hover:text-envgo-marine transition-colors">Recreation</Link>
            <Link to="/about" className="hover:text-envgo-marine transition-colors">About</Link>
            {/* <Link to="/contact" className="hover:text-envgo-marine transition-colors">Get started</Link> */}
          </div>
        </div>



        {/* Contact & Social */}
        <div className="md:pl-8">
          <div className="flex flex-col gap-2 text-sm font-body text-envgo-grey">

            <a href="https://www.linkedin.com/company/envgo/posts/" target="_blank" rel="noopener noreferrer" className="hover:text-envgo-marine transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/envgoboats/" target="_blank" rel="noopener noreferrer" className="hover:text-envgo-marine transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/envgoboats" target="_blank" rel="noopener noreferrer" className="hover:text-envgo-marine transition-colors">
              Facebook
            </a>
            <Link to="/contact" className="hover:text-envgo-marine transition-colors">Contact Us</Link>

            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-envgo-marine transition-colors">
              YouTube
            </a> */}
          </div>
        </div>

        <div className="md:px-8">
          <div className="flex flex-col gap-2 text-sm font-body text-envgo-grey">
            <a href="mailto:marketing@envgo.com" className="hover:text-envgo-marine transition-colors">
              info@envgo.com
            </a>
            <p className="mt-4 text-xs text-envgo-grey">
            © {new Date().getFullYear()} ENVGO. All rights reserved.
          </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-envgo-marine">
        <div className="flex justify-center gap-6 text-xs font-body text-envgo-grey">
          <Link to="/privacy-policy" className="hover:text-envgo-marine transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="hover:text-envgo-marine transition-colors">
            Terms of Use
          </Link>
          <Link to="/disclaimer" className="hover:text-envgo-marine transition-colors">
            Disclaimer
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
