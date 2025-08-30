import React, { useState, useEffect } from 'react';

interface CoupleData {
  bride: {
    name: string;
    description: string;
  };
  groom: {
    name: string;
    description: string;
  };
}

interface TimelineEvent {
  id: number;
  time: string;
  title: string;
  description: string;
}

const Homepage: React.FC = () => {
  const [coupleData, setCoupleData] = useState<CoupleData | null>(null);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    // Fetch couple data
    fetch('/api/couple')
      .then(res => res.json())
      .then(data => setCoupleData(data))
      .catch(err => console.error('Error fetching couple data:', err));

    // Fetch timeline events
    fetch('/api/timeline')
      .then(res => res.json())
      .then(data => setTimelineEvents(data))
      .catch(err => console.error('Error fetching timeline:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-ivory via-wedding-white to-wedding-pink">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-wedding-ivory/30"></div>
        <div className="relative z-10 text-center fade-in">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-wedding-brown mb-4 float">
            Wedding Story
          </h1>
          <p className="text-xl md:text-2xl text-wedding-brown/80 mb-8 font-light">
            愛の物語が始まります
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-brown px-8 py-3 rounded-full font-medium hover-lift transition-all duration-300">
              ストーリーを見る
            </button>
            <button className="border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-wedding-brown px-8 py-3 rounded-full font-medium hover-lift transition-all duration-300">
              招待状を確認
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-wedding-pink rounded-full opacity-60 float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-wedding-gold rounded-full opacity-40 float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-wedding-blue rounded-full opacity-50 float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4 bg-wedding-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-brown mb-8">
            ようこそ
          </h2>
          <p className="text-lg md:text-xl text-wedding-brown/80 leading-relaxed max-w-3xl mx-auto">
            この特別な日に、私たちの愛の物語を皆様と共有できることを心より嬉しく思います。
            温かいお気持ちで見守っていただき、素晴らしい時間を一緒に過ごしましょう。
          </p>
        </div>
      </section>

      {/* Couple Introduction */}
      <section className="py-20 px-4 bg-gradient-to-r from-wedding-ivory to-wedding-blue/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-wedding-brown mb-16 fade-in">
            新郎新婦のご紹介
          </h2>
          
          {coupleData && (
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Bride */}
              <div className="text-center fade-in hover-lift">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 bg-wedding-pink/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👰</div>
                </div>
                <h3 className="font-serif text-3xl text-wedding-brown mb-4">
                  新婦 {coupleData.bride.name}
                </h3>
                <p className="text-wedding-brown/80 text-lg">
                  {coupleData.bride.description}
                </p>
              </div>

              {/* Groom */}
              <div className="text-center fade-in hover-lift">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 bg-wedding-blue/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🤵</div>
                </div>
                <h3 className="font-serif text-3xl text-wedding-brown mb-4">
                  新郎 {coupleData.groom.name}
                </h3>
                <p className="text-wedding-brown/80 text-lg">
                  {coupleData.groom.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-20 px-4 bg-wedding-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-wedding-brown mb-16 fade-in">
            当日のスケジュール
          </h2>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id}
                className="flex items-center space-x-6 hover-lift"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-wedding-gold rounded-full flex items-center justify-center">
                  <span className="text-wedding-brown font-bold text-sm">
                    {event.time}
                  </span>
                </div>
                <div className="flex-grow bg-wedding-ivory p-6 rounded-lg shadow-md">
                  <h3 className="font-serif text-xl text-wedding-brown mb-2">
                    {event.title}
                  </h3>
                  <p className="text-wedding-brown/80">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Access Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-wedding-gold/10 to-wedding-orange/10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-brown mb-8">
            ご招待の皆様へ
          </h2>
          <p className="text-lg md:text-xl text-wedding-brown/80 mb-8 leading-relaxed">
            招待状に記載されているコードをご入力いただくと、
            詳細な情報やゲスト専用コンテンツをご覧いただけます。
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <input 
              type="text" 
              placeholder="招待コードを入力してください"
              className="w-full px-6 py-4 border-2 border-wedding-gold rounded-full text-center text-wedding-brown placeholder-wedding-brown/50 focus:outline-none focus:border-wedding-gold/80"
            />
          </div>
          
          <button className="bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-brown px-8 py-3 rounded-full font-medium hover-lift transition-all duration-300">
            アクセス
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-wedding-brown text-wedding-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4">
            Wedding Story 2024
          </p>
          <p className="text-wedding-ivory/80">
            愛と感謝を込めて
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;