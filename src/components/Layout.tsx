import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const CLINIC_PHONE = "+919425088167";
  const DISPLAY_PHONE = "+91 94250 88167";
  const WHATSAPP_URL = `https://wa.me/${CLINIC_PHONE.replace('+', '')}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar - Hidden on mobile */ }
      <div className="hidden md:flex bg-teal-700 text-white text-[11px] px-8 py-2 justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" /> Vijay Nagar, Indore
          </span>
          <span className="flex items-center">
            <Phone className="w-3 h-3 mr-1" /> {DISPLAY_PHONE}
          </span>
        </div>
        <div className="flex space-x-4 uppercase tracking-widest font-bold">
          <span>Mon - Sat: 10AM - 8PM</span>
        </div>
      </div>

      {/* Main Navigation */ }
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        } border-b border-slate-200 px-4 md:px-8 py-4`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v2a2 2 0 002 2h2v2a2 2 0 002 2 2 2 0 002-2v-2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z"/></svg>
            </div>
            <div>
              <h1 className="text-[1.1rem] md:text-xl font-extrabold text-teal-800 leading-none">INFINITY DENTAL</h1>
              <p className="text-[9px] md:text-[10px] text-yellow-600 font-bold tracking-widest uppercase">Indore's Premier Clinic</p>
            </div>
          </Link>

          {/* Desktop Nav */ }
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold text-sm transition-colors ${
                  location.pathname === link.path ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-teal-100 hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */ }
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */ }
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden absolute top-full left-0 right-0 z-40 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-2 py-2 text-base font-medium rounded-md ${
                    location.pathname === link.path ? 'bg-primary/5 text-primary' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col space-y-3">
                <a href={`tel:${CLINIC_PHONE}`} className="flex items-center justify-center space-x-2 w-full py-3 bg-gray-100 text-gray-900 font-medium rounded-md">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call Us</span>
                </a>
                <Link
                  to="/contact"
                  className="flex justify-center w-full bg-primary text-white px-4 py-3 rounded-md font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */ }
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */ }
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex flex-col mb-6">
                <span className="font-heading text-2xl font-bold tracking-tight text-white">
                  Infinity <span className="text-accent">Dental</span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Clinic
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing premium, painless, and personalized dental care in a hygienic environment using advanced technology. Bringing healthy smiles to Indore.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><Link to="/treatments" className="text-gray-400 hover:text-accent transition-colors text-sm">Dental Implants</Link></li>
                <li><Link to="/treatments" className="text-gray-400 hover:text-accent transition-colors text-sm">Smile Designing</Link></li>
                <li><Link to="/treatments" className="text-gray-400 hover:text-accent transition-colors text-sm">Root Canal Treatment</Link></li>
                <li><Link to="/treatments" className="text-gray-400 hover:text-accent transition-colors text-sm">Clear Aligners</Link></li>
                <li><Link to="/treatments" className="text-gray-400 hover:text-accent transition-colors text-sm">Teeth Whitening</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Ground Floor, In Front of Choudhary Cycle & Tyre House, 34 Vijay Nagar Main Road, Scheme No. 54, Indore, MP 452010</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>{DISPLAY_PHONE}</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-400">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Infinity Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */ }
      <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-4 z-50">
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-teal-100 flex items-center space-x-3 mb-2 hidden md:flex">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-slate-600">Ask a Doctor Now</span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      {/* Mobile floating call button (bottom left) */ }
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <a
          href={`tel:${CLINIC_PHONE}`}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
