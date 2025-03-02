import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          #hero {
            margin-top: 45px; /* Adjusted to match new navbar height */
          }
        `}
      </style>
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 m-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md' 
            : 'bg-white/90'
        }`}
        style={{ margin: 0, padding: 0 }}
      >
        <div className="container mx-auto px-4 h-14 flex justify-between items-center">
          <div
            className="text-2xl font-bold cursor-pointer transition-colors duration-300 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:from-yellow-500 hover:to-yellow-700"
            onClick={() => handleLinkClick('hero')}
          >
            Assurob
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item.toLowerCase())}
                className="relative group py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
              >
                <span>{item}</span>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-2 space-y-1">
            {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-green-600 rounded-lg transition-colors duration-300 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
