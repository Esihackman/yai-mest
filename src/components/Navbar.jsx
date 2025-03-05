import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect which section is in view
      const sections = ['home', 'products', 'about', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
    setActiveSection(id); 
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/90'}`}>
      <div className="container mx-auto px-4 h-14 flex justify-between items-center">
        <div
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          onClick={() => handleLinkClick('hero')}
        >
          Assurob
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Products', 'About', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className={`relative group py-2 transition-colors duration-300 ${
                activeSection === item.toLowerCase() ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              <span>{item}</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-transform duration-300 ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-2 space-y-1">
          {['Home', 'Products', 'About', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                activeSection === item.toLowerCase() ? 'bg-yellow-50 text-green-600 font-bold' : 'text-gray-700 hover:bg-yellow-50 hover:text-green-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
