import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NoTurningBack: React.FC = () => {
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
      onClick={() => navigate('/youre-so-kutie')}
      style={{ 
        background: '#000000'
      }}
    >
      <h1 
        style={{
          color: '#ffffff',
          fontSize: '3.5rem',
          fontFamily: "'Cinzel', serif",
          fontWeight: 400,
          letterSpacing: '0.1em',
          textAlign: 'center',
          padding: '0 40px',
          lineHeight: '1.4'
        }}
      >
        Are You 100% Sure<br />There is No Turning Back
      </h1>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');
        `}
      </style>
    </div>
  );
};

export default NoTurningBack;
