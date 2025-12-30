
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Foto Circular - Topo */}
        <div className="flex justify-center mb-16">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Elementos decorativos de fundo */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full -z-10"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-4 border-white group hover:shadow-[0_40px_80px_rgba(217,89,112,0.4)] transition-all duration-500">
              {/* Imagem da Advogada - Circular */}
              <img
                src="/156816cd-0c5b-4ec7-9d23-bce7dd76c3a2.jfif"
                alt="Dra. Yasmine F. Oliveira"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Texto - Centro */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-brand-primary font-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Perfil Profissional</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
            Excelência Jurídica com <br />
            <span className="italic font-normal text-brand-primary">Foco no Seu Direito</span>
          </h3>
          <p className="text-brand-dark/80 text-lg mb-12 leading-relaxed font-light">
            Com uma visão moderna e estratégica, a Dra. Yasmine F. Oliveira dedica-se a uma advocacia de resultados, onde cada cliente recebe um atendimento único e especializado. Sua atuação é reconhecida pela precisão técnica e pelo compromisso inegociável com os interesses de quem representa.
          </p>

          <div className="space-y-5 mb-12">
            {[
              "Especialista em Direito Civil e Processual",
              "Foco em Planejamento Sucessório e Família",
              "Consultoria Estratégica para Alta Performance",
              "Defesa Assertiva de Direitos Individuais"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center space-x-4 group">
                <div className="w-7 h-7 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-all duration-300 flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-brand-dark font-semibold tracking-wide">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-10 py-12 border-y border-brand-gray/20 mb-12">
            <div className="group cursor-default">
              <p className="text-4xl font-brand font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">500+</p>
              <p className="text-[10px] font-brand text-brand-gray font-bold uppercase tracking-widest mt-2">Demandas Resolvidas</p>
            </div>
            <div className="group cursor-default">
              <p className="text-4xl font-brand font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">100%</p>
              <p className="text-[10px] font-brand text-brand-gray font-bold uppercase tracking-widest mt-2">Dedicacão Exclusiva</p>
            </div>
          </div>

          <div>
            <a href="#contact" className="inline-block bg-brand-dark text-white font-brand font-bold px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-lg">
              Conhecer Minha Trajetória
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
