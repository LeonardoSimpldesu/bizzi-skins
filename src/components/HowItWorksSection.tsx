
import { MessageCircle, Package, Search, RefreshCw, DollarSign } from 'lucide-react';
import { CheckeredPattern } from './CheckeredPattern';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Mensagem Zap",
      description: "Entre em contato via WhatsApp com suas skins disponíveis",
      step: "01"
    },
    {
      icon: Package,
      title: "Item",
      description: "Envie informações detalhadas sobre os itens que deseja vender",
      step: "02"
    },
    {
      icon: Search,
      title: "Avaliação",
      description: "Receba uma avaliação justa e imediata do valor das suas skins",
      step: "03"
    },
    {
      icon: RefreshCw,
      title: "Troca",
      description: "Realize a troca segura através da plataforma Steam",
      step: "04"
    },
    {
      icon: DollarSign,
      title: "Pix",
      description: "Receba o pagamento instantâneo via Pix após confirmação",
      step: "05"
    }
  ];

  return (
    <section className="pt-40 relative min-h-screen bg-gradient-to-t to-gray-950 black from-black" id='how-it-works'>
      <CheckeredPattern />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Processo simples e seguro para vender suas skins de CS:GO com o melhor preço do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-green-500 to-green-400 z-0"></div>
                  )}

                  <div className="relative z-10 text-center">
                    <div className="bg-gradient-to-r from-green-500/10 to-green-950/20 border border-green-500/10 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-xs">
                      <div className="relative mb-4">
                        <div className="bg-green-500 p-4 rounded-full inline-block mb-2 animate-glow">
                          <IconComponent className="w-8 h-8 text-black" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-green-600 text-black text-xs font-bold px-2 py-1 rounded-full">
                          {step.step}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8 inline-block">
              <p className="text-gray-300 text-lg mb-4">
                <span className="text-green-400 font-bold">Todo o processo leva menos de 10 minutos!</span>
              </p>
              <p className="text-gray-400">
                Pagamento garantido e processo 100% seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
