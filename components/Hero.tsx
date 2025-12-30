
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden scroll-mt-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-primary/30 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
        alt="Escritório de Advocacia Premium"
        className="absolute inset-0 w-full h-full object-cover scale-100"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/20 border border-brand-primary/30 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
            <span className="text-brand-secondary text-xs font-brand font-bold uppercase tracking-widest">Dra. Yasmine F. Oliveira</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-brand-light font-serif font-bold leading-tight mb-6">
            Defesa Estratégica & <br />
            <span className="italic text-brand-primary font-normal">Justiça Especializada.</span>
          </h1>
          <p className="text-xl text-brand-light/80 mb-8 max-w-xl leading-relaxed">
            Unindo técnica jurídica de alto nível com um olhar humano e resolutivo. Protegemos seus direitos com ética, transparência e agilidade.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="group bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-brand font-bold flex items-center justify-center transition-all shadow-xl shadow-brand-dark/20"
            >
              Consultar Especialista
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#practice"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-brand font-bold transition-all text-center tracking-wider"
            >
              Áreas de Atuação
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-brand-light/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-light/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;