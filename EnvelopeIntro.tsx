// src/components/EnvelopeIntro.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EnvelopeIntro: React.FC = () => {
  const navigate = useNavigate();

  const handleOpenEnvelope = () => {
    navigate("/love-letter");
  };

  return (
    <div 
      className="h-screen overflow-hidden flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/assets/Introback.png")' }}
    >
      {/* Envelope Icon (SVG or Image) */}
      <button onClick={handleOpenEnvelope} className="focus:outline-none">
        {/* Envelope Image */}
        <img 
          src="/assets/Introenvelope.png" 
          alt="Envelope" 
          className="mb-6 w-[500px] h-[400px] object-contain hover:scale-105 transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default EnvelopeIntro;
