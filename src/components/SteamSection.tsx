
import { ExternalLink, Shield, Star, Trophy, Target } from 'lucide-react';

export const SteamStatsSection = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-t to-gray-950 black from-black" id="steam-stats">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfil <span className="gradient-text">Steam</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Conheça as estatísticas do Miguel Bizzi no CS:GO
            </p>
            <a
              href="https://steamcommunity.com/id/goodthoughts/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-black font-bold px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visitar Perfil Steam
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="bg-green-500 p-3 rounded-full inline-block mb-4">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">2.500+</div>
              <div className="text-gray-400">Horas Jogadas</div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="bg-green-500 p-3 rounded-full inline-block mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">Global Elite</div>
              <div className="text-gray-400">Rank Atual</div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="bg-green-500 p-3 rounded-full inline-block mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">15 Anos</div>
              <div className="text-gray-400">Conta Steam</div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="bg-green-500 p-3 rounded-full inline-block mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Skins Negociadas</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Informações da Conta Steam</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Steam ID:</span>
                    <span className="text-white font-semibold">STEAM_0:1:12345678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level Steam:</span>
                    <span className="text-green-400 font-semibold">187</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Prime Status:</span>
                    <span className="text-green-400 font-semibold">✓ Verificado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trade URL:</span>
                    <span className="text-blue-400 font-semibold cursor-pointer hover:text-blue-300">Disponível</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center mb-4 animate-glow">
                  <Shield className="w-16 h-16 text-black" />
                </div>
                <div className="text-lg font-semibold text-white">Conta Verificada</div>
                <div className="text-green-400">100% Segura</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
