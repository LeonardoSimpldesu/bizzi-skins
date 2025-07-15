
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Card, CardContent } from './ui/card';
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rafael Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Vendi minha Karambit Fade com o Miguel e foi incrível! Pagamento na hora e preço justo. Recomendo demais!",
      avatar: "R",
      knife: "Karambit Fade"
    },
    {
      name: "Lucas Mendes",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Melhor experiência que já tive vendendo skins. O Miguel é confiável e sempre responde rápido no WhatsApp.",
      avatar: "L",
      knife: "M9 Bayonet Doppler"
    },
    {
      name: "Pedro Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Tinha medo de vender online, mas o Miguel me passou muita confiança. Transação segura e valor excelente!",
      avatar: "P",
      knife: "Butterfly Knife Tiger Tooth"
    },
    {
      name: "Thiago Oliveira",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Já vendi várias facas com o Miguel. Sempre preço justo e pagamento imediato. É o cara!",
      avatar: "T",
      knife: "Gut Knife Marble Fade"
    },
    {
      name: "Gabriel Santos",
      location: "Brasília, DF",
      rating: 5,
      text: "Atendimento personalizado e preços que não encontro em outros lugares. Virei cliente fiel da Bizzi Skins!",
      avatar: "G",
      knife: "Huntsman Knife Crimson Web"
    },
    {
      name: "Bruno Lima",
      location: "Salvador, BA",
      rating: 5,
      text: "Processo super rápido e transparente. Em 10 minutos estava com o dinheiro na conta. Recomendo!",
      avatar: "B",
      knife: "Flip Knife Lore"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-t to-gray-950 black from-black" id="testimonials">
      <div className="px-6">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que nossos <span className="gradient-text">clientes dizem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milhares de jogadores já venderam suas facas conosco.
              Veja alguns depoimentos reais de quem confia na Bizzi Skins.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,

            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                playOnInit: true
              })
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-96 md:basis-1/2 lg:basis-1/4 p-4">
                  <Card className="bg-green-950/5 border border-green-500/20 rounded-2xl p-6 h-full hover:border-green-500/40  transition-all duration-300 hover:scale-105 relative">
                    <CardContent className="flex flex-col p-6">
                      <Quote className="w-8 h-8 text-green-400 mb-4 opacity-60" />

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                        ))}
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center space-x-4 mt-auto">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`/placeholder.svg`} alt={testimonial.name} />
                          <AvatarFallback className="bg-green-500 text-black font-bold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.location}</div>
                          <div className="text-xs text-green-400">{testimonial.knife}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">5000+</div>
                  <div className="text-gray-400">Facas vendidas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                  <div className="text-gray-400">Avaliação média</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                  <div className="text-gray-400">Clientes satisfeitos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">24h</div>
                  <div className="text-gray-400">Suporte disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export { TestimonialsSection };