
import React, { useEffect, useState } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [cidade, setCidade] = useState('São Paulo');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setCidade(data.city);
        }
      })
      .catch(() => {
        setCidade('São Paulo'); // fallback
      });
  }, []);

  const handleInstagramClick = () => {
    // TODO: Substituir pela URL real do Instagram
    window.open('https://instagram.com/isabella', '_blank');
  };

  const handleTelegramClick = () => {
    // TODO: Substituir pela URL real do Telegram
    window.open('https://t.me/isabella_previas', '_blank');
  };

  const handleWhatsAppClick = () => {
    // TODO: Substituir pelo número real do WhatsApp
    const phoneNumber = "5511999999999";
    const message = "Olá Isabella! Vim da sua página exclusiva 💋";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="/assets/capa.jpg" 
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-20 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden rose-gold-border bg-black/50 backdrop-blur-sm">
              <img 
                src="/assets/perfil.jpg" 
                alt="Isabella"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="font-playfair text-2xl md:text-4xl font-bold text-gradient mb-2">
              ISABELA
            </h1>
            
            <p className="text-rose-baby text-base mb-4">
              Tenho 21 anos e sou de <span className="text-gold-soft font-semibold">{cidade}</span>
            </p>

            {/* Social Media Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleInstagramClick}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <Instagram size={16} />
                Instagram
              </button>
              
              <button
                onClick={handleTelegramClick}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <MessageCircle size={16} />
                Prévias
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.011c-5.506 0-9.974 4.468-9.974 9.974 0 1.76.46 3.416 1.257 4.851L2.04 21.99l5.154-1.26a9.956 9.956 0 004.823 1.257c5.506 0 9.974-4.468 9.974-9.974s-4.468-9.974-9.974-9.974zm0 18.187a8.235 8.235 0 01-4.197-1.154l-.301-.179-3.128.765.788-3.128-.197-.32a8.235 8.235 0 01-1.174-4.197c0-4.556 3.708-8.264 8.264-8.264s8.264 3.708 8.264 8.264-3.708 8.264-8.264 8.264z"/>
                  <path d="M16.735 13.492c-.301-.151-1.781-.879-2.057-.979-.276-.1-.477-.151-.678.151-.201.301-.779.979-.956 1.18-.176.201-.352.226-.653.075-.301-.151-1.271-.469-2.42-1.494-.894-.799-1.497-1.786-1.673-2.087-.176-.301-.019-.463.132-.614.135-.135.301-.352.452-.528.151-.176.201-.301.301-.502.1-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.246-.593-.497-.513-.678-.522-.176-.009-.377-.011-.578-.011s-.528.075-.804.377c-.276.301-1.055 1.031-1.055 2.515s1.08 2.918 1.231 3.12c.151.201 2.132 3.256 5.166 4.568.722.312 1.286.498 1.725.638.725.231 1.385.198 1.908.12.582-.087 1.781-.729 2.032-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.578-.352z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-rose-baby/20">
            <h2 className="text-xl md:text-2xl font-bold text-gradient mb-4">
              PUTA CHEFE NÉ BEBÊ? A 01 🥇
            </h2>
            
            <div className="space-y-3 text-gray-200 text-sm md:text-base">
              <p className="leading-relaxed">
                Os vídeos contêm sexo explícito mostrando tudo, vídeo mamando, se masturbando e tudo mais que você pode imaginar! Aqui tem de tudo!!!
              </p>
              
              <p className="text-rose-baby font-semibold">
                NOVINHA DO BUCETÃO 😍😋<br/>
                BUCETINHA TÃO GOSTOSA E NOVINHA QUE NEM PARECE QUE JÁ FOI USADA!! 🔥😋 🔥
              </p>
              
              <p className="leading-relaxed">
                AQUI TAMBÉM TEM MUITO CHAT PRIVADO COM FOTOS E VÍDEOS EXCLUSIVOS QUE MANDO PRA VOCÊ, COMO VOCÊ PEDIR 🍷😈📞
              </p>
              
              <p className="leading-relaxed">
                Conteúdo pesado MESMO, gosto de conversar no chat, aqui você vai ver de tudo e vai se apaixonar!
              </p>
              
              <p className="text-rose-baby font-semibold">
                ME MANDA FOTO DO PAU QUE EU GOSTO MUITO 😈🍆📞
              </p>
              
              <p className="leading-relaxed">
                EU POSTO CONTEÚDO TODOS OS DIAS E FALO COM VOCÊ NO CHAT!!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 animate-fade-in">
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-black font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300"
          >
            Ver Pacotes Exclusivos 💖
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-rose-baby opacity-50">
        <div className="font-great-vibes text-3xl rotate-12">💋</div>
      </div>
      <div className="absolute bottom-20 right-10 text-gold-soft opacity-50">
        <div className="font-great-vibes text-2xl -rotate-12">✨</div>
      </div>
    </section>
  );
};

export default HeroSection;
