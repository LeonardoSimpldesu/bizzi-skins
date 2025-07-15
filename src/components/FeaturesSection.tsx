import { Zap, DollarSign, Shield, Clock, TrendingUp, MessageCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Pagamento Imediato",
      description: "Receba o dinheiro na hora da venda, sem esperas ou burocracias.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Melhor Preço do Mercado",
      description: "Oferecemos os melhores valores, sempre acima da concorrência.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: TrendingUp,
      title: "Preço Justo",
      description: "Enquanto outros tiram 40%, nós fazemos preços justos para você.",
      color: "from-green-300 to-green-500"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Transações totalmente seguras com garantia total.",
      color: "from-green-600 to-green-800"
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Resposta imediata no WhatsApp, sem enrolação.",
      color: "from-green-400 to-green-700"
    },
    {
      icon: MessageCircle,
      title: "Suporte Personalizado",
      description: "Atendimento direto com Miguel, sempre disponível.",
      color: "from-green-500 to-green-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-950 min-h-screen " id="features">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vantagens da <span className="gradient-text">Bizzi Skins</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra por que milhares de jogadores confiam em nossos serviços 
              para comprar e vender suas skins de CS:GO.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-black/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para vender suas skins?
              </h3>
              <p className="text-gray-300 mb-6">
                Entre em contato agora e receba uma cotação personalizada!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-400">
                <span>✓ Avaliação gratuita</span>
                <span>✓ Sem compromisso</span>
                <span>✓ Resposta imediata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {FeaturesSection};