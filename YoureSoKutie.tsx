import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const YoureSoKutie: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => navigate('/gf-reveal')}
      style={{ 
        background: '#000000'
      }}
    >
      <h1 
        style={{
          color: '#ffffff',
          fontSize: '4rem',
          fontFamily: "'Cinzel', serif",
          fontWeight: 400,
          letterSpacing: '0.1em',
          textAlign: 'center',
          padding: '0 40px'
        }}
      >
        You're SO Kutie 🤭
      </h1>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');
        `}
      </style>
    </div>
  );
};

export default YoureSoKutie;
