import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Memory = {
  image: string;   // URL or local image path
  caption?: string;
  date?: string;   // Optional: for displaying when memory occurred
};

const memories: Memory[] = [
  { image: "/assets/May1firstss.PNG", caption: "First Screenshot I took!", date: "May 1, 2024" },
  { image: "/assets/FirstMovie.PNG", caption: "First movie we watched!", date: "SS Taken on: August 6, 2024" },
  { image: "/assets/Cheeks1.PNG", caption: "Cheeks!", date: "October 30, 2024" },
  { image: "/assets/bfgf.jpg", caption: "Boyfrien & Girlfrien!", date: "November 4, 2024" },
  { image: "/assets/Something.jpg", caption: "Kuch hua tha iss din", date: "November 22, 2024" },
  { image: "/assets/100us.jpg", caption: "100% In Love!", date: "July 15, 2025" },
  { image: "/assets/cheeks2.PNG", caption: "Cheeks 🤪", date: "SS Taken on: Unknown, 2025" },
  { image: "/assets/eyes.JPG", caption: "Our Beautiful Eyes!", date: "August 2, 2025" },
  { image: "/assets/me.JPG", caption: "Me!", date: "August 21, 2025" },
  { image: "/assets/sleeping.jpg", caption: "Sleeping Peacefully :))", date: "SS Taken on: November 22, 2025" },
  { image: "/assets/cutie.JPG", caption: "My Love Documenting Us!", date: "December 14, 2025" },
  // ...add more memories with URLs/captions/dates
];

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before starting fade-in

    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrent((prev) => Math.min(prev + 1, memories.length - 1));
  const handleProceed = () => navigate("/contract"); // Next route

  const memory = memories[current];

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center transition-opacity duration-[2500ms] ease-in-out bg-cover bg-center bg-no-repeat ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: 'url("/assets/PhotoReveal.png")' }}
    >
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
        <img
          src={memory.image}
          alt={memory.caption ?? `Memory #${current + 1}`}
          className="w-full h-72 object-contain rounded-xl mb-4"
        />
        {memory.caption && (
          <div className="text-lg font-medium mb-2 text-gray-700">{memory.caption}</div>
        )}
        {memory.date && (
          <div className="text-sm mb-4 text-gray-400">{memory.date}</div>
        )}
        <div className="flex justify-between w-full mb-4">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className={`px-5 py-2 rounded bg-pink-100 font-semibold text-pink-600 shadow hover:bg-pink-200 transition ${
              current === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Prev
          </button>
          <span className="text-gray-500 font-bold">{current + 1} / {memories.length}</span>
          <button
            onClick={handleNext}
            disabled={current === memories.length - 1}
            className={`px-5 py-2 rounded bg-pink-100 font-semibold text-pink-600 shadow hover:bg-pink-200 transition ${
              current === memories.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
        {current === memories.length - 1 && (
          <button
            onClick={handleProceed}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-7 rounded-lg text-xl shadow mt-4"
          >
            Proceed
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
