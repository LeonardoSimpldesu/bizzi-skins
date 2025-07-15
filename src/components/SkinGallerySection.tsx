
import { Star } from 'lucide-react';

export const SkinsGallerySection = () => {
  const skins = [
    {
      name: "AK-47 | Redline",
      condition: "Field-Tested",
      price: "R$ 450,00",
      image: "https://blog.neshastore.com/wp-content/uploads/2024/10/ak-47-linhas-vermelhas-2.png"
    },
    {
      name: "AWP | Dragon Lore",
      condition: "Minimal Wear",
      price: "R$ 15.500,00",
      image: "https://bitskins.com/blog/content/images/2024/02/20240204203230_1.jpg"
    },
    {
      name: "Karambit | Fade",
      condition: "Factory New",
      price: "R$ 8.200,00",
      image: "https://pbs.twimg.com/media/DmISgD7XgAAIt-0.jpg"
    },
    {
      name: "M4A4 | Howl",
      condition: "Field-Tested",
      price: "R$ 12.000,00",
      image: "https://egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1682677147104.webp&w=1920&q=75"
    },
    {
      name: "Glock-18 | Fade",
      condition: "Factory New",
      price: "R$ 980,00",
      image: "https://skinflow.gg/_nuxt/GlockFade.D_vpaFzt.webp"
    },
    {
      name: "M9 Gamma Doppler",
      condition: "Minimal Wear",
      price: "R$ 3.200,00",
      image: "./skins/m9_gamma_doppler.png"
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-gradient-to-t to-black from-gray-950" id='skins-gallery'>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skins Já <span className="gradient-text">Negociadas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Algumas das melhores skins que já passaram pelas mãos do Miguel Bizzi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skins.map((skin, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-full h-48 object-cover object-bottom"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{skin.name}</h3>
                  <p className="text-gray-400 mb-3">{skin.condition}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">{skin.price}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
