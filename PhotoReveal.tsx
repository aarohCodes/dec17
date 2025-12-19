// src/components/PhotoReveal.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotoReveal: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before starting fade-in

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    navigate("/memories");
  };

  return (
    <div 
      className={`min-h-screen flex items-center justify-center transition-opacity duration-[2500ms] ease-in-out bg-cover bg-center bg-no-repeat ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: 'url("/assets/PhotoReveal.png")' }}   
    >
      {/* Center clickable image */}
      <img 
        src="/assets/usHeartButton.png" 
        onClick={handleImageClick}
        className="max-w-[470px] max-h-[95vh] object-contain rounded-lg cursor-pointer"
      />
    </div>
  );
};

export default PhotoReveal;
