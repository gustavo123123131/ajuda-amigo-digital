
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
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src="/assets/capa.jpg" 
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-16 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden rose-gold-border bg-background/60 backdrop-blur-sm">
              <img 
                src="/assets/perfil.jpg" 
                alt="Isabella"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-playfair text-xl md:text-3xl font-bold text-gradient mb-1">
              ISABELA
            </h1>
            
            <p className="text-pink-300 text-sm md:text-base mb-3">
              Tenho 21 anos e sou de <span className="text-pink-200 font-semibold">{cidade}</span>
            </p>

            {/* Social Media Buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={handleInstagramClick}
                className="flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition-transform"
              >
                <Instagram size={14} />
                Instagram
              </button>
              
              <button
                onClick={handleTelegramClick}
                className="flex items-center gap-1.5 bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition-transform"
              >
                <MessageCircle size={14} />
                Prévias
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition-transform"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.011c-5.506 0-9.974 4.468-9.974 9.974 0 1.76.46 3.416 1.257 4.851L2.04 21.99l5.154-1.26a9.956 9.956 0 004.823 1.257c5.506 0 9.974-4.468 9.974-9.974s-4.468-9.974-9.974-9.974zm0 18.187a8.235 8.235 0 01-4.197-1.154l-.301-.179-3.128.765.788-3.128-.197-.32a8.235 8.235 0 01-1.174-4.197c0-4.556 3.708-8.264 8.264-8.264s8.264 3.708 8.264 8.264-3.708 8.264-8.264 8.264z"/>
                  <path d="M16.735 13.492c-.301-.151-1.781-.879-2.057-.979-.276-.1-.477-.151-.678.151-.201.301-.779.979-.956 1.18-.176.201-.352.226-.653.075-.301-.151-1.271-.469-2.42-1.494-.894-.799-1.497-1.786-1.673-2.087-.176-.301-.019-.463.132-.614.135-.135.301-.352.452-.528.151-.176.201-.301.301-.502.1-.201.05-.377-.025-.528-.075-.151-.678-1.634-.929-2.238-.246-.593-.497-.513-.678-.522-.176-.009-.377-.011-.578-.011s-.528.075-.804.377c-.276.301-1.055 1.031-1.055 2.515s1.08 2.918 1.231 3.12c.151.201 2.132 3.256 5.166 4.568.722.312 1.286.498 1.725.638.725.231 1.385.198 1.908.12.582-.087 1.781-.729 2.032-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.578-.352z"/>
                </svg>
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-background/70 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-pink-500/30 shadow-lg shadow-pink-500/10">
            <h2 className="text-lg md:text-xl font-bold text-gradient mb-3">
              PUTA CHEFE NÉ BEBÊ? A 01 🥇
            </h2>
            
            <div className="space-y-3 text-gray-200 text-sm md:text-base leading-relaxed">
              <div className="bg-pink-900/20 p-3 rounded-lg border-l-4 border-pink-400">
                <p className="font-medium text-pink-300">
                  Os vídeos contêm sexo explícito mostrando tudo, vídeo mamando, se masturbando e tudo mais que você pode imaginar! Aqui tem de tudo!!!
                </p>
              </div>
              
              <div className="bg-red-900/20 p-3 rounded-lg border-l-4 border-red-400">
                <p className="text-red-300 font-semibold">
                  NOVINHA DO BUCETÃO 😍😋<br/>
                  BUCETINHA TÃO GOSTOSA E NOVINHA QUE NEM PARECE QUE JÁ FOI USADA!! 🔥😋 🔥
                </p>
              </div>
              
              <div className="bg-purple-900/20 p-3 rounded-lg border-l-4 border-purple-400">
                <p className="text-purple-300">
                  AQUI TAMBÉM TEM MUITO CHAT PRIVADO COM FOTOS E VÍDEOS EXCLUSIVOS QUE MANDO PRA VOCÊ, COMO VOCÊ PEDIR 🍷😈📞
                </p>
              </div>
              
              <div className="bg-indigo-900/20 p-3 rounded-lg border-l-4 border-indigo-400">
                <p className="text-indigo-300">
                  Conteúdo pesado MESMO, gosto de conversar no chat, aqui você vai ver de tudo e vai se apaixonar!
                </p>
              </div>
              
              <div className="bg-pink-900/20 p-3 rounded-lg border-l-4 border-pink-400">
                <p className="text-pink-300 font-semibold">
                  ME MANDA FOTO DO PAU QUE EU GOSTO MUITO 😈🍆📞
                </p>
              </div>
              
              <div className="bg-rose-900/20 p-3 rounded-lg border-l-4 border-rose-400">
                <p className="text-rose-300 font-medium">
                  EU POSTO CONTEÚDO TODOS OS DIAS E FALO COM VOCÊ NO CHAT!!
                </p>
              </div>

              {/* Additional Details */}
              <div className="grid md:grid-cols-2 gap-3 mt-4">
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-3 rounded-lg border border-pink-400/30">
                  <h4 className="font-semibold text-pink-300 mb-1">✨ Conteúdo Exclusivo</h4>
                  <p className="text-xs text-gray-300">Fotos e vídeos que você não encontra em lugar nenhum</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-3 rounded-lg border border-purple-400/30">
                  <h4 className="font-semibold text-purple-300 mb-1">💬 Chat Direto</h4>
                  <p className="text-xs text-gray-300">Converso pessoalmente com você todos os dias</p>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-3 rounded-lg border border-red-400/30">
                  <h4 className="font-semibold text-red-300 mb-1">🔥 Conteúdo Pesado</h4>
                  <p className="text-xs text-gray-300">Sem limites, tudo que você imaginar</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-3 rounded-lg border border-indigo-400/30">
                  <h4 className="font-semibold text-indigo-300 mb-1">📱 Disponível 24h</h4>
                  <p className="text-xs text-gray-300">Sempre online para você</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 left-6 text-pink-400 opacity-60">
        <div className="font-great-vibes text-2xl rotate-12">💋</div>
      </div>
      <div className="absolute bottom-10 right-6 text-purple-400 opacity-60">
        <div className="font-great-vibes text-xl -rotate-12">✨</div>
      </div>
    </section>
  );
};

export default HeroSection;
