// src/components/Polaroids.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Polaroids: React.FC = () => {
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
      className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        background: '#000000',
        padding: '40px'
      }}
    >
      <div className="flex gap-12 items-center justify-center flex-wrap max-w-6xl">
        {/* Polaroid 1 */}
        <div 
          className="transform transition-all duration-700 hover:scale-105"
          style={{
            background: '#fff',
            padding: '20px 20px 60px 20px',
            boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
            transform: isVisible ? 'rotate(-5deg)' : 'rotate(-5deg) translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
        >
          <div 
            style={{
              width: '280px',
              height: '280px',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img 
              src="/assets/2024.jpg" 
              alt="Memory from 2024"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <p 
            style={{
              marginTop: '15px',
              fontFamily: "'Permanent Marker', cursive",
              fontSize: '16px',
              color: '#333',
              textAlign: 'center'
            }}
          >
            2024 Memory
          </p>
        </div>

        {/* Polaroid 2 */}
        <div 
          className="transform transition-all duration-700 hover:scale-105"
          style={{
            background: '#fff',
            padding: '20px 20px 60px 20px',
            boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
            transform: isVisible ? 'rotate(2deg)' : 'rotate(2deg) translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '400ms'
          }}
        >
          <div 
            style={{
              width: '280px',
              height: '280px',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img 
              src="/assets/2025.JPG" 
              alt="Memory from 2025"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <p 
            style={{
              marginTop: '15px',
              fontFamily: "'Permanent Marker', cursive",
              fontSize: '16px',
              color: '#333',
              textAlign: 'center'
            }}
          >
            2025 Memory
          </p>
        </div>

        {/* Polaroid 3 */}
        <div 
          className="transform transition-all duration-700 hover:scale-105 cursor-pointer"
          onClick={() => navigate('/are-you-ready')}
          style={{
            background: '#fff',
            padding: '20px 20px 60px 20px',
            boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
            transform: isVisible ? 'rotate(-3deg)' : 'rotate(-3deg) translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '600ms'
          }}
        >
          <div 
            style={{
              width: '280px',
              height: '280px',
              background: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '120px',
              color: '#666',
              fontFamily: "'Permanent Marker', cursive"
            }}
          >
            ?
          </div>
          <p 
            style={{
              marginTop: '15px',
              fontFamily: "'Permanent Marker', cursive",
              fontSize: '16px',
              color: '#333',
              textAlign: 'center'
            }}
          >
            Future Memories
          </p>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
        `}
      </style>
    </div>
  );
};

export default Polaroids;
