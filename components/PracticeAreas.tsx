
import React from 'react';
import { PRACTICE_AREAS, getIcon } from '../constants';

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-10">
            <img 
              src="/logo.svg"
              alt="Logo YFO Advocacia"
              className="h-32 md:h-44 w-auto"
            />
          </div>
          
          <h2 className="text-brand-primary font-brand font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Nossas Áreas de Atuação</h3>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos suporte jurídico integral com foco na prevenção de litígios e na resolução estratégica de conflitos, sempre pautados pela excelência e ética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="group p-8 rounded-3xl border border-brand-light bg-brand-light/30 hover:bg-brand-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all">
                {getIcon(area.icon)}
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-dark mb-4">{area.title}</h4>
              <p className="text-brand-gray leading-relaxed mb-6">
                {area.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-brand-primary font-brand font-bold text-xs uppercase tracking-widest hover:text-brand-secondary transition-colors">
                Saiba mais
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;