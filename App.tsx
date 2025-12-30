
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Contact from './components/Contact';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <div className="py-12 bg-white border-b border-brand-light">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
            <span className="text-xl font-brand font-bold text-brand-gray tracking-widest uppercase">Forbes Jurídico</span>
            <span className="text-xl font-brand font-bold text-brand-gray tracking-widest uppercase">Exame</span>
            <span className="text-xl font-brand font-bold text-brand-gray tracking-widest uppercase">OAB Federal</span>
            <span className="text-xl font-brand font-bold text-brand-gray tracking-widest uppercase">Legal 500</span>
          </div>
        </div>

        <PracticeAreas />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-light pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo e Descrição */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <img
                  src="/logo.svg"
                  alt="Logo Dra. Yasmine F. Oliveira"
                  className="h-16 md:h-20 w-auto mx-auto md:mx-0"
                />
              </div>
              <p className="text-brand-gray text-sm leading-relaxed">
                Advocacia de excelência com foco em resultados e comprometimento com a justiça.
              </p>
            </div>

            {/* Navegação */}
            <div className="md:col-span-1">
              <h3 className="font-brand font-bold text-xs uppercase tracking-widest mb-6 text-white">Navegação</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Início</a></li>
                <li><a href="#about" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Sobre</a></li>
                <li><a href="#practice" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Áreas de Atuação</a></li>
                <li><a href="#contact" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Contato</a></li>
              </ul>
            </div>

            {/* Áreas de Atuação */}
            <div className="md:col-span-1">
              <h3 className="font-brand font-bold text-xs uppercase tracking-widest mb-6 text-white">Áreas de Atuação</h3>
              <ul className="space-y-3">
                <li><a href="#practice" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Direito Tributário</a></li>
                <li><a href="#practice" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Advocacia dos Contratos</a></li>
                <li><a href="#practice" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Execução Contratual</a></li>
                <li><a href="#practice" className="text-brand-gray hover:text-brand-primary transition-colors text-sm">Direito da Família</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="md:col-span-1">
              <h3 className="font-brand font-bold text-xs uppercase tracking-widest mb-6 text-white">Contato</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-brand-primary font-brand font-bold text-xs uppercase tracking-widest mb-1">E-mail:</p>
                  <a href="mailto:Yasmineoliveira55@gmail.com" className="text-brand-gray hover:text-white transition-colors text-sm break-all">
                    Yasmineoliveira55@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-brand-primary font-brand font-bold text-xs uppercase tracking-widest mb-1">Endereço:</p>
                  <p className="text-brand-gray text-sm">
                    Presidente Kennedy<br />
                    Espírito Santo - ES
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-white/10 pt-8 mb-8"></div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center mb-8">
            <p className="font-brand font-bold text-xs uppercase tracking-widest mb-4 text-brand-gray">Siga-nos</p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all shadow-lg hover:shadow-brand-primary/20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all shadow-lg hover:shadow-brand-primary/20">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all shadow-lg hover:shadow-brand-primary/20">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-gray text-[10px] tracking-[0.2em] uppercase font-brand">
            <p>© {new Date().getFullYear()} Yasmine F. Oliveira Advocacia. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0 opacity-50">Justiça com Elegância e Estratégia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;