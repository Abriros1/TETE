
import React from 'react';
import { Scale, ShieldCheck, Gavel, Users, Building2, Briefcase } from 'lucide-react';
import { PracticeArea, Testimonial } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Assessoria completa em contratos, responsabilidade civil e obrigações.',
    icon: 'Scale'
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description: 'Atuação humanizada em divórcios, guarda, inventários e planejamento sucessório.',
    icon: 'Users'
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    description: 'Defesa dos direitos do trabalhador e consultoria preventiva para empresas.',
    icon: 'Briefcase'
  },
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    description: 'Estruturação de negócios, conformidade e resolução de conflitos societários.',
    icon: 'Building2'
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    description: 'Defesa estratégica com foco na garantia dos direitos fundamentais.',
    icon: 'Gavel'
  },
  {
    id: 'digital',
    title: 'Direito Digital',
    description: 'Proteção de dados (LGPD), crimes virtuais e contratos de tecnologia.',
    icon: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mariana Silva',
    role: 'Empresária',
    text: 'A Dra. Yasmine demonstrou um profissionalismo impecável na resolução do meu caso de sucessão familiar.'
  },
  {
    id: '2',
    author: 'Carlos Alberto',
    role: 'Diretor Executivo',
    text: 'A Dra. Oliveira trouxe uma visão estratégica que mudou a forma como gerimos nossos contratos internacionais.'
  },
  {
    id: '3',
    author: 'Juliana Mendes',
    role: 'Cliente',
    text: 'Atendimento humano e extremamente técnico da Dra. Yasmine. Senti-me segura durante todo o processo.'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Scale': return <Scale className="w-8 h-8" />;
    case 'Users': return <Users className="w-8 h-8" />;
    case 'Briefcase': return <Briefcase className="w-8 h-8" />;
    case 'Building2': return <Building2 className="w-8 h-8" />;
    case 'Gavel': return <Gavel className="w-8 h-8" />;
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
    default: return <Scale className="w-8 h-8" />;
  }
};
