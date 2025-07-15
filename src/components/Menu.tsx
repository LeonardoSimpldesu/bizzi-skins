import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export const Menu = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const navigationRef = useRef<HTMLDivElement>(null);

  const sections = ['features', 'cta', 'hero', 'about', 'testimonials', 'how-it-works', 'skins-gallery'];

  const navigationLinks = [
    { id: 'about', label: 'Sobre' },
    { id: 'how-it-works', label: 'Negocie' },
    { id: 'skins-gallery', label: 'Skins' },
    { id: 'features', label: 'Vantagens' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'cta', label: 'Contato' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const updateBackgroundPosition = () => {
    if (!navigationRef.current) return;

    const activeIndex = navigationLinks.findIndex(link => link.id === currentSection);
    if (activeIndex === -1) {
      setBackgroundStyle({ opacity: 0 });
      return;
    }

    const buttons = navigationRef.current.querySelectorAll('button');
    const activeButton = buttons[activeIndex] as HTMLButtonElement;

    if (activeButton) {
      const containerRect = navigationRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;
      const height = buttonRect.height;

      setBackgroundStyle({
        opacity: 1,
        transform: `translateX(${left}px)`,
        width: `${width}px`,
        height: `${height}px`
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    updateBackgroundPosition();
  }, [currentSection]);

  useEffect(() => {
    const handleResize = () => {
      updateBackgroundPosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSection]);

  const isActive = (sectionId: string) => currentSection === sectionId;

  return (
    <nav className={twMerge('fixed top-4 inset-x-0 mx-auto w-xs z-50 bg-black/95 backdrop-blur-sm border rounded-full border-green-500/20 transition-all duration-300 opacity-90 lg:w-5xl', isActive('hero') && 'lg:w-6xl opacity-100 top-6')}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold text-xl">Bizzi Skins</span>
          </button>

          <div className="hidden md:flex items-center space-x-8 relative" ref={navigationRef}>
            <div
              className="absolute bg-gradient-to-br from-green-400 to-green-600 rounded-full transition-all duration-300 ease-in-out"
              style={backgroundStyle}
            />

            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={twMerge(
                  'relative z-10 transition-all duration-300 cursor-pointer font-medium px-4 py-2 rounded-full',
                  isActive(link.id)
                    ? 'text-black hover:scale-105'
                    : 'text-gray-300 hover:text-green-400'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none lg:hidden">
              <MenuIcon className="outline-none"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-5 bg-black border border-green-500/20 rounded-lg shadow-lg text-white">
              {navigationLinks.map((link) => (
                <DropdownMenuItem
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={twMerge(
                    'z-10 transition-all duration-300 font-medium px-4 py-2 rounded-full',
                    isActive(link.id)
                      ? 'text-green-400'
                      : 'text-white'
                  )}
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};