"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Feather } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";

export default function MariaCarolinaPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        <div className={`absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 dark:from-pink-800/20 dark:to-purple-800/20 transition-all duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 dark:bg-pink-900 mb-6">
              <Heart className="w-10 h-10 text-pink-500 dark:text-pink-300" />
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Maria Carolina
          </h1>
          
          <div className={`flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span>29/03/2007</span>
            <Feather className="w-4 h-4" />
            <span>05/11/2025</span>
          </div>
          
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Uma vida de coragem, fé e amor que iluminou a todos ao seu redor
          </p>
        </div>
        
        <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Momentos Especiais</h2>
            <p className="text-muted-foreground mb-4">Memórias que ficarão para sempre em nossos corações</p>
          </div>
          
          <PhotoGallery />
        </div>
      </section>

      {/* Her Story Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua História</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            <Card className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-justify">
                  Aos 18 anos, a vida costuma ser feita de sonhos, planos e descobertas. Para nossa amada Maria Carolina, no entanto, cada passo sempre foi marcado por coragem, fé e uma força que iluminava a todos ao redor.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-justify">
                  Sua batalha começou antes mesmo de seu primeiro choro, quando um diagnóstico difícil foi revelado ainda durante a gestação. Desde o início, ela nos mostrou o que é viver com bravura. Aos 4 anos, enfrentou e venceu a luta por um novo rim. Cresceu carregando consigo o peso de tratamentos, cuidados e limitações, mas também um sorriso doce, uma fé firme e um brilho que aquecia corações.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-justify">
                  Mais recentemente, um novo desafio surgiu: um tumor agressivo que exigiu forças além da compreensão humana. Nossa pequena gigante lutou. Lutou com tudo o que tinha. Com fé. Com coragem. Com a força de quem sabe que sua vida sempre esteve nas mãos dAquele que a criou.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Peace Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 mb-8 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <Heart className="w-12 h-12 text-blue-500 dark:text-blue-300" />
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Paz Eterna</h2>
            <p className="text-lg leading-relaxed mb-8">
              Mas, em meio às batalhas desta vida, chegou o momento em que Deus, em Sua infinita misericórdia, decidiu acolher Carol em Seus braços. Maria Carolina agora descansa. Livre da dor. Livre da luta. Envolvida na paz perfeita do Céu.
            </p>
            
            <div className="my-6 text-center">
              <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-600 dark:text-purple-300 mb-1">2 Timóteo 4:7</p>
                <p className="text-lg font-medium text-purple-800 dark:text-purple-200 italic">
                  "Combati o bom combate, terminei a carreira, guardei a fé."
                </p>
              </div>
            </div>
            
            <div className="my-8 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <p className="text-lg leading-relaxed mb-6">
              Sabemos que a saudade aperta. Não existe despedida fácil. Mas também sabemos que a história da Carol não termina aqui. Ela continua na fé que nos ensinou, na força que demonstrou, e no amor que deixou gravado em cada pessoa que teve o privilégio de conhecê-la.
            </p>
            
            <div className="my-6 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-600 dark:text-blue-300 mb-1">Salmos 116:15</p>
                <p className="text-lg font-medium text-blue-800 dark:text-blue-200 italic">
                  "Preciosa é aos olhos do Senhor a morte dos seus santos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Eterna Gratidão</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <Card className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-justify mb-6">
                A todos que oraram, contribuíram, compartilharam e sustentaram essa família com palavras, gestos, recursos e carinho, deixamos aqui nossa gratidão eterna. Cada ajuda, cada joelho dobrado, cada mensagem de apoio foi parte importante dessa caminhada.
              </p>
              
              <p className="text-lg leading-relaxed text-justify font-medium text-center text-purple-600 dark:text-purple-300">
                Que Deus recompense abundantemente cada ato de amor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4 text-center">
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Legado de Amor
          </h2>
          
          <p className="text-lg leading-relaxed mb-12">
            Que a memória da nossa guerreira viva sempre em nós — não como uma história de dor, mas como um testemunho de fé, coragem e esperança.
          </p>
          
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 rounded-2xl p-8 mb-8">
            <p className="text-2xl font-medium mb-4">Maria Carolina</p>
            <p className="text-lg mb-4">agora você descansa nos braços de Jesus.</p>
            <p className="text-lg font-medium">Nos reencontraremos um dia.</p>
          </div>
          
          <div className="flex justify-center gap-4 text-4xl">
            <span className="animate-pulse">💖</span>
            <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🕊️</span>
          </div>
        </div>
      </section>
    </div>
  );
}