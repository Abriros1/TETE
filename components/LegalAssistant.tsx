
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Info } from 'lucide-react';
import { getLegalGuidance } from '../services/geminiService';
import { Message } from '../types';

const LegalAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou a assistente virtual da Dra. Yasmine Oliveira. Como posso orientar você hoje? Você pode tirar dúvidas gerais sobre Direito Civil, Família ou outras áreas.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const guidance = await getLegalGuidance(input);

    const assistantMsg: Message = {
      role: 'assistant',
      content: guidance,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMsg]);
    setLoading(false);
  };

  return (
    <section id="assistant" className="py-24 bg-brand-dark scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-light mb-4">Orientação Jurídica com IA</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Utilize nossa inteligência artificial para tirar dúvidas preliminares. Rápido, seguro e disponível 24h.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] border border-brand-light">
          {/* Header */}
          <div className="bg-brand-light/50 border-b border-brand-light p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <Bot className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">Assistente Elegance Law</h3>
                <span className="text-xs text-brand-primary flex items-center font-medium">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mr-1 animate-pulse"></span> Online agora
                </span>
              </div>
            </div>
            <div className="group relative">
              <Info className="text-brand-gray w-5 h-5 cursor-help" />
              <div className="hidden group-hover:block absolute right-0 top-8 bg-brand-dark text-white text-[10px] p-2 rounded shadow-lg w-48 z-10 leading-snug">
                Esta IA fornece apenas orientações genéricas. Não substitui consulta jurídica com a Dra. Yasmine.
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-light/20">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] sm:max-w-[70%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-auto ${m.role === 'user' ? 'bg-brand-primary/10 ml-2' : 'bg-brand-gray/10 mr-2'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-brand-primary" /> : <Bot className="w-4 h-4 text-brand-gray" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-brand-primary text-white rounded-tr-none' : 'bg-white text-brand-dark rounded-tl-none border border-brand-light'}`}>
                    {m.content.split('\n').map((line, i) => <p key={i} className={line ? 'mb-2' : 'h-2'} dangerouslySetInnerHTML={{ __html: line }} />)}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 bg-white p-3 rounded-2xl border border-brand-light shadow-sm">
                  <Loader2 className="w-4 h-4 text-brand-primary animate-spin" />
                  <span className="text-xs text-brand-gray font-medium tracking-wide">Analisando fundamentos jurídicos...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 bg-white border-t border-brand-light">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Como funciona o divórcio consensual?"
                className="w-full bg-brand-light border border-brand-gray/20 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-dark placeholder:text-brand-gray/50"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className={`absolute right-2 p-3 rounded-full transition-all ${input.trim() ? 'bg-brand-primary text-white hover:bg-brand-secondary' : 'bg-brand-gray/20 text-brand-gray/50'}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-brand-gray mt-3 uppercase tracking-widest">
              As respostas são geradas por IA. Confirme sempre com a Dra. Yasmine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAssistant;