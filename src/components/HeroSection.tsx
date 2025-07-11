import { MessageCircle, Zap, TrendingDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20da%20Bizzi%20Skins!', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_50%)]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_40%_0%,#000_100%,transparent_120%)] animate-grid-slide pointer-events-none" />

      {/* <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-green-300 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-green-500 rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }}></div> */}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8 animate-glow">
          <Zap className="w-4 h-4 text-green-400 mr-2" />
          <span className="text-green-400 text-sm font-medium">Melhor preço do mercado</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Compre suas</span><br />
          <span className="gradient-text">Facas de CS:GO</span><br />
          <span className="text-white">com segurança</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Sou <span className="text-green-400 font-semibold">Miguel Bizzi</span>, especialista em skins de CS:GO.
          Ofereço as melhores facas com pagamento imediato e preços justos.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 hover:bg-green-500/10 transition-all duration-300">
            <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Pagamento Imediato</h3>
            <p className="text-gray-400">Receba o pagamento na hora da venda</p>
          </div>
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 hover:bg-green-500/10 transition-all duration-300">
            <TrendingDown className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Melhor Preço</h3>
            <p className="text-gray-400">Preços justos, sem taxas abusivas</p>
          </div>
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 hover:bg-green-500/10 transition-all duration-300">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Confiança</h3>
            <p className="text-gray-400">Transações 100% seguras</p>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-xl animate-glow transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Falar com Miguel no WhatsApp
        </Button>

        <p className="text-gray-500 text-sm mt-4">
          ✓ Milhares de transações realizadas com sucesso
        </p>
      </div>
    </section>
  );
};

export { HeroSection };