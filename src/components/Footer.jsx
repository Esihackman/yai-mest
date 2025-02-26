import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#004721] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-lg">&copy; 2025 Assuah Robotics. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}