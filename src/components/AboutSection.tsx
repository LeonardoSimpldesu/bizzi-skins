
import { User, Award, Zap, TrendingDown } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-t to-black from-gray-950">
    {/* // <section className="py-20 bg-black"> */}
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conheça <span className="gradient-text">Miguel Bizzi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Especialista em skins de CS:GO com anos de experiência no mercado, 
              oferecendo sempre os melhores preços e atendimento personalizado.
            </p>
          </div>

          {/* About Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Stats */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Por que escolher a Bizzi Skins?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 mt-1">
                      <Zap className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Pagamento Imediato</h4>
                      <p className="text-gray-400">Não precisa esperar dias para receber. O pagamento é feito na hora!</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 mt-1">
                      <TrendingDown className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Preço Justo</h4>
                      <p className="text-gray-400">Enquanto a concorrência tira 40%, eu faço um preço justo para você!</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 mt-1">
                      <Award className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Melhor Preço do Mercado</h4>
                      <p className="text-gray-400">Compare com qualquer concorrente. Nossos preços são imbatíveis!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile */}
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center animate-glow">
                  <User className="w-24 h-24 text-black" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 p-3 rounded-full animate-float">
                  <Award className="w-6 h-6 text-black" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Miguel Bizzi</h3>
              <p className="text-green-400 text-lg font-semibold mb-6">Especialista em Skins CS:GO</p>
              
              <div className="bg-gray-800/50 rounded-xl p-6 max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">5000+</div>
                    <div className="text-gray-400 text-sm">Transações</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">99%</div>
                    <div className="text-gray-400 text-sm">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
