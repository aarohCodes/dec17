import React, { useEffect, useState, useRef } from "react";

const GFReveal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '1ac9FLyQo88', // Replace with your YouTube video ID
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
      });
    };

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setCelebrate(true);
    
    // Play YouTube video
    if (playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
    <div 
      className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        backgroundImage: 'url(/assets/question.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={handleClick}
        style={{
          width: '200px',
          height: '200px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          opacity: 0
        }}
      >
      </button>

      {/* Hidden YouTube Player */}
      <div id="youtube-player" style={{ display: 'none' }}></div>

      {/* Rain Effect */}
      {celebrate && (
        <>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '-50px',
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 16}px`,
                color: '#ff69b4',
                fontFamily: "'Cinzel', serif",
                fontWeight: 600,
                animation: `fallText ${Math.random() * 3 + 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none'
              }}
            >
              I love you Jaanu ❤️
            </div>
          ))}
          
          {/* Confetti */}
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`confetti-${i}`}
              style={{
                position: 'absolute',
                top: '-20px',
                left: `${Math.random() * 100}%`,
                width: '10px',
                height: '10px',
                background: ['#ff69b4', '#ffd700', '#ff1493', '#ff6b9d', '#ffb6c1'][Math.floor(Math.random() * 5)],
                borderRadius: '50%',
                animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                pointerEvents: 'none'
              }}
            />
          ))}
        </>
      )}
    </div>

    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');
        
        @keyframes fallText {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100vh);
          }
        }
        
        @keyframes fall {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}
    </style>
    </>
  );
};

export default GFReveal;

