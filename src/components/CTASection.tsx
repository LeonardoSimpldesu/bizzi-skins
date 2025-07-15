import { MessageCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20da%20Bizzi%20Skins!%20Gostaria%20de%20vender%20minhas%20facas%20de%20CS:GO', '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-t to-black from-gray-950" id="cta">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-3xl p-12 animate-glow">
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-green-400 fill-current" />
                ))}
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Venda suas facas
              <br />
              <span className="gradient-text">agora mesmo!</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Não perca tempo com sites que demoram para pagar ou que cobram taxas abusivas.
              Na Bizzi Skins você recebe na hora e pelo melhor preço!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/30 rounded-xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">Pagamento</div>
                <div className="text-white">Imediato</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">Preço</div>
                <div className="text-white">Justo</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">Atendimento</div>
                <div className="text-white">Personalizado</div>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-black font-bold text-xl px-12 py-6 rounded-2xl animate-glow transition-all duration-300 hover:scale-105 group"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar com Miguel no WhatsApp
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-green-400 text-sm mt-4 font-medium">
              Resposta garantida em menos de 5 minutos! ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
