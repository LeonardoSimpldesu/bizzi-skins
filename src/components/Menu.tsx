


export const Menu = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 inset-x-0 max-w-3xl mx-auto z-50 bg-black/95 backdrop-blur-sm border rounded-full border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold text-xl">Bizzi Skins</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              Vantagens
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-green-400 transition-colors font-medium"
            >
              Depoimentos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
