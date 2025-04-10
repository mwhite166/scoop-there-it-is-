
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialLinks from '../SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/013a76a0-1e1b-4894-bf24-4d32016e5de0.png" 
              alt="Scoop There It Is Logo" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/cake-decorating" className="nav-link">Cake Decorating</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <SocialLinks />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-accordion-down">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <Link 
              to="/" 
              className="py-2 px-4 hover:bg-icecream-blue/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="py-2 px-4 hover:bg-icecream-blue/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/cake-decorating" 
              className="py-2 px-4 hover:bg-icecream-blue/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Cake Decorating
            </Link>
            <Link 
              to="/about-us" 
              className="py-2 px-4 hover:bg-icecream-blue/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <SocialLinks className="py-2 px-4" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
