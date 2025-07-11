
import { MessageCircle, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20da%20Bizzi%20Skins!', '_blank');
  };

  return (
    <footer className="bg-black border-t border-green-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Bizzi Skins</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Especialista em compra e venda de facas de CS:GO.
              Pagamento imediato, preços justos e atendimento personalizado.
            </p>

            {/* Contact Button */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contato via WhatsApp
            </button>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={handleWhatsAppClick}
              className="bg-gray-800 hover:bg-green-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 group"
            >
              <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </button>
            <button className="bg-gray-800 hover:bg-green-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 group">
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </button>
            <button className="bg-gray-800 hover:bg-green-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 group">
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-green-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2024 Bizzi Skins. Todos os direitos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span>✓ Transações seguras</span>
                <span>✓ Pagamento imediato</span>
                <span>✓ Preços justos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };