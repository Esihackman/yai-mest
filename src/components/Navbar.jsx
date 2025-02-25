import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50" style={{ fontFamily: 'Times New Roman' }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => handleLinkClick('hero')}
        >
          Assurob
        </div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => handleLinkClick('hero')} className="text-green-600 hover:text-yellow-500">Home</button>
          <button onClick={() => handleLinkClick('about')} className="text-green-600 hover:text-yellow-500">About</button>
          <button onClick={() => handleLinkClick('products')} className="text-green-600 hover:text-yellow-500">Products</button>
          <button onClick={() => handleLinkClick('showcase')} className="text-green-600 hover:text-yellow-500">Showcase</button>
          <button onClick={() => handleLinkClick('contact')} className="text-green-600 hover:text-yellow-500">Contact</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-green-600">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-4 space-y-2">
          <button onClick={() => handleLinkClick('hero')} className="block w-full text-left text-green-600 hover:text-yellow-500">Home</button>
          <button onClick={() => handleLinkClick('about')} className="block w-full text-left text-green-600 hover:text-yellow-500">About</button>
          <button onClick={() => handleLinkClick('products')} className="block w-full text-left text-green-600 hover:text-yellow-500">Products</button>
          <button onClick={() => handleLinkClick('showcase')} className="block w-full text-left text-green-600 hover:text-yellow-500">Showcase</button>
          <button onClick={() => handleLinkClick('contact')} className="block w-full text-left text-green-600 hover:text-yellow-500">Contact</button>
        </div>
      )}
    </nav>
  );
}
