
import { Link } from 'react-router-dom';
import { Mail, Phone, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Success Squad</h4>
            <p className="text-gray-400 max-w-xs">
              Empowering pre-graduate students with entrepreneurship skills
              and business know-how.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contact</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@successsquad.com" className="hover:text-white transition-colors">
                info@successsquad.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="w-5 h-5" />
              <span>12345 67890</span>
            </div>

            <div className="pt-4">
              <h5 className="text-lg font-medium mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Success Squad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
