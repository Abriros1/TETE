
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-2/5 p-12 lg:p-16 bg-brand-primary text-white">
            <h2 className="text-3xl font-serif font-bold mb-8">Vamos conversar?</h2>
            <p className="text-brand-light/80 mb-12 text-lg leading-relaxed">
              Estamos prontos para analisar seu caso e oferecer a melhor orientação jurídica personalizada.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-brand font-bold text-[10px] uppercase tracking-[0.2em] text-white/60">Telefone / WhatsApp</p>
                  <p className="text-xl font-brand tracking-widest">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-brand font-bold text-[10px] uppercase tracking-[0.2em] text-white/60">E-mail</p>
                  <p className="text-xl font-brand tracking-wider">contato@yasmineoliveira.adv.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-brand font-bold text-[10px] uppercase tracking-[0.2em] text-white/60">Localização</p>
                  <p className="text-xl">Av. Paulista, 1000 - Bela Vista <br />São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-brand font-bold text-[10px] uppercase tracking-[0.2em] text-white/60">Horário</p>
                  <p className="text-lg">Seg a Sex: 09h às 18h</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                className="inline-flex items-center space-x-3 bg-brand-light text-brand-primary px-8 py-4 rounded-full font-brand font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-brand-dark">
            <h3 className="text-3xl font-serif font-bold text-brand-light mb-8">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brand-gray text-[10px] font-brand font-bold uppercase tracking-widest mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full bg-brand-dark border border-brand-gray/30 rounded-2xl py-4 px-6 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all placeholder:text-brand-gray/50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-brand-gray text-[10px] font-brand font-bold uppercase tracking-widest mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full bg-brand-dark border border-brand-gray/30 rounded-2xl py-4 px-6 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all placeholder:text-brand-gray/50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-brand-gray text-[10px] font-brand font-bold uppercase tracking-widest mb-2">Assunto</label>
                <select className="w-full bg-brand-dark border border-brand-gray/30 rounded-2xl py-4 px-6 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all appearance-none">
                  <option>Direito de Família</option>
                  <option>Direito Civil</option>
                  <option>Direito Trabalhista</option>
                  <option>Direito Empresarial</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-brand-gray text-[10px] font-brand font-bold uppercase tracking-widest mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-dark border border-brand-gray/30 rounded-2xl py-4 px-6 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all placeholder:text-brand-gray/50"
                  placeholder="Descreva brevemente sua situação..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-5 rounded-2xl font-brand font-bold text-lg uppercase tracking-[0.2em] transition-all shadow-xl shadow-brand-primary/40"
              >
                Enviar Mensagem
              </button>
              <p className="text-center text-brand-gray text-[10px] font-brand tracking-widest uppercase mt-4">
                Seus dados estão protegidos conforme a LGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;