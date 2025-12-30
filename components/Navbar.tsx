
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Áreas de Atuação', href: '#practice' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-light/95 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center group cursor-pointer">
            <img 
              src="/logo.svg"
              alt="Logo Dra. Yasmine F. Oliveira"
              className="h-12 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-brand font-bold tracking-widest hover:text-brand-primary transition-colors ${scrolled ? 'text-brand-dark' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2 rounded-full text-xs font-brand font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-primary/20"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-brand-dark' : 'text-white'} p-2`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-light border-t border-brand-gray/20 absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-brand-dark hover:text-brand-primary w-full font-brand tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-brand-primary text-white px-8 py-3 rounded-full text-sm font-brand font-bold uppercase tracking-widest w-full max-w-xs shadow-lg"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;