// src/components/ActualContract.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ActualContract: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before starting fade-in

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    if (allChecked) {
      navigate("/polaroids");
    }
  };

  const handleCheckAll = () => {
    setAllChecked(!allChecked);
  };

  return (
    <div 
      className={`min-h-screen overflow-y-auto py-12 px-8 transition-opacity duration-[2500ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        backgroundImage: 'url("/assets/ContractActualbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
        `}
      </style>
      
      <div className="max-w-5xl mx-auto p-12 relative"
           style={{
             background: 'linear-gradient(to bottom, #f5e6d3, #ede0ce)',
             boxShadow: '0 0 40px rgba(0,0,0,0.5), inset 0 0 100px rgba(139,69,19,0.1)',
             border: '12px solid',
             borderImage: 'linear-gradient(135deg, #8B4513, #CD853F, #8B4513) 1',
             position: 'relative'
           }}>
        
        {/* Decorative Corner Flourishes */}
        <div className="absolute top-0 left-0 w-24 h-24 opacity-30" 
             style={{
               backgroundImage: 'radial-gradient(circle, #8B4513 1px, transparent 1px)',
               backgroundSize: '8px 8px'
             }}></div>
        <div className="absolute top-0 right-0 w-24 h-24 opacity-30"
             style={{
               backgroundImage: 'radial-gradient(circle, #8B4513 1px, transparent 1px)',
               backgroundSize: '8px 8px'
             }}></div>
        
        {/* Contract Header */}
        <div className="text-center pb-8 mb-8 relative"
             style={{
               borderBottom: '3px double #8B4513',
               fontFamily: "'Cinzel', serif"
             }}>
          <div className="text-6xl mb-2">💕</div>
          <h1 className="text-5xl font-bold mb-4"
              style={{
                color: '#8B4513',
                fontFamily: "'Cinzel', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '0.05em'
              }}>
            THE ULTIMATE FOREVER & EVER CONTRACT
          </h1>
          <div className="text-6xl mb-4">💕</div>
          
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#5C4033' }}>
            <p className="mb-2">
              <span style={{ fontStyle: 'italic' }}>Effective Date:</span> 
              <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>December 19, 2025</span>
            </p>
            <p className="mb-2">
              <span style={{ fontStyle: 'italic' }}>Term:</span> 
              <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Forever and Ever, No Backsies, Pinky Promise</span>
            </p>
            <p className="mb-2">
              <span style={{ fontStyle: 'italic' }}>Update to Contract:</span> 
              <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>Shaadi Time!</span>
            </p>
            <p className="mt-4" style={{ fontSize: '1.2rem' }}>
              <span style={{ fontStyle: 'italic' }}>Parties Involved:</span>
            </p>
            <p style={{ fontSize: '1.2rem', color: '#8B4513', fontWeight: 'bold' }}>
              Aaroh Nanoti & Krishnaa Brahmbhatt
            </p>
          </div>
        </div>

        <div className="p-4 mb-6 relative"
             style={{
               background: 'rgba(139, 69, 19, 0.08)',
               border: '2px solid #8B4513',
               borderLeft: '6px solid #8B4513',
               fontFamily: "'Cormorant Garamond', serif"
             }}>
          <p style={{ color: '#5C4033', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            CONTRACT TERMS & CONDITIONS
          </p>
          <p style={{ color: '#6B5446', fontSize: '1rem', fontStyle: 'italic' }}>
            This herby declares that Krishnaa Brahmbhatt agrees to the following terms and conditions, as laid out by the most adorable guy ever (that's Aaroh, in case you missed it):
          </p>
        </div>

        {/* Contract Sections */}
        <div className="space-y-3 ml-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5C4033' }}>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded transition"
                 style={{fontSize: '1.05rem'}}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
            <input type="checkbox" className="mt-1 w-5 h-5" style={{ accentColor: '#8B4513' }} />
            <span>Will you have fun with Aaroh whenever and where ever?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to communicate honestly, even when it's hard?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you love Aaroh when he's 25, 35, 45, 55, and beyond?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you accept Aaroh as he is, forever and ever, no changes, full package deal?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Can you handle him?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you be his biggest cheerleader when he's chasing his dreams?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Kabhi kabhi Aaroh bohot chipku ho jaata hai, is that okay with you?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to be weird with him and let him be weird with you?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Is it okay that Aaroh has a "screw dheela" sometimes and does goofy things without warning?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you choose him on days when you're frustrated with him too?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to keep him grounded?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to call him out when he's being ridiculous (but in a loving way)?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Aaroh loves you a lot, is that okay?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you pinky promise to choose him and love him forever?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Is it acceptable that he will probably show you code and expect you to think it's as cool as he does?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Can you promise to grow together and be each other's biggest supporters?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Jab Aaroh stressed hota hai, will you take care of him?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you choose Aaroh every single day, even on the days it's hard?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Can you handle that Aaroh is obsessed with Krishnaa Brahmbhatt?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you laugh with him during good times AND stick with him during tough times?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Aaroh kabhi kabhi overthink karta hai, kya tum patient rehogi?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to grow old together?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you love him even when he wears the same hoodie for 3 days straight during hackathon season?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Can you promise to adventure with him and try new things together?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Can you accept him with his flaws, dreams, quirks, and all?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you accept his obsessions and hobbies and passion (you)?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to be his safe space where he can be 100% himself?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to respect his goals and let him chase his dreams (while he does the same for you)?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Click this for funises cause we love eachother.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to go on dates with him when you're free?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you promise thats its always us against any problem, not us against eachother?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you, Krishnaa Brahmbhatt, officially accept Aaroh as your BOYFRIEND, confidant, partner, and love of your life? (literally no takebacksies!)</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Will you sign this contract acknowledging that this is forever and ever?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span>Do you promise to make him the happiest guy in the universe (as he will try his hardest to do the same)?</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded" style={{fontSize: '1.05rem'}} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}><input type="checkbox" className="mt-1 w-5 h-5" style={{accentColor: '#8B4513'}} />
            <span className="font-bold">THE BIG ONE: Are you 1000000% sure you want to do this forever and ever with no takebacks, no changes, just pure love and strength?</span>
          </label>
        </div>

        {/* What Aaroh Promises Section */}
        <div className="mt-12 pt-8" style={{borderTop: '3px double #8B4513'}}>
          <h2 className="text-4xl font-bold text-center mb-6" 
              style={{color: '#8B4513', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em'}}>
            WHAT AAROH PROMISES TO OFFER
          </h2>
          <p className="text-center mb-8" 
             style={{color: '#5C4033', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontStyle: 'italic'}}>
            In return for your love, trust, and acceptance, Aaroh commits to providing the following:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" style={{fontFamily: "'Cormorant Garamond', serif", color: '#5C4033'}}>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Genuine Love & Loyalty</span> - 100% faithful, devoted, and yours alone forever
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Laughter & Goofiness</span> - Daily doses of humor (good and bad jokes included, no refunds)
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Support & Encouragement</span> - Your biggest cheerleader in all your dreams and goals
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Quality Time</span> - Even during hackathon season, you'll be my priority
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Vulnerability & Honesty</span> - I'll be real with you, always, even when it's scary
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Late Night Conversations</span> - About life, dreams, fears, and everything in between
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Random Acts of Sweetness</span> - Unexpected surprises, texts, and affection and GIFTS just because
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Having Fun</span> - Anytime & Anywhere
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Your Safe Space</span> - A place where you can be completely yourself, flaws and all
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Communication</span> - I promise to talk things out, not run away from problems
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Growth & Change</span> - I'll work on myself and become a better person with you
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Respect</span> - Everything that matters to you
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Adventure</span> - New experiences, and creating memories together
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Patience</span> - Even when I overthink, or forget things
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Affection</span> - Hugs, cuddles, kisses, hand-holding, and all the physical affection you need
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Being Your Hype Man</span> - Celebrating your wins like they're my own
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Consistency</span> - Showing up every single day, no matter what
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Listening</span> - Really listening when you talk, not just waiting for my turn to speak
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Bringing Bollywood Vibes</span> - Singing Arijit Singh songs with you (off-key, probably)
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Peace & Stability</span> - A calm, loving and peaceful presence in your life
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Defending You</span> - Always having your back against the world
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Quirk Acceptance</span> - Loving every weird, strange, and unique thing about you
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Dates</span> - Keeping your stomach full and having fun!
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Bad Movie Nights</span> - Watching terrible films on sketchy websites and making fun of them together
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Honest Feedback</span> - Telling you the truth even when it's hard (but kindly)
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Effort, Always</span> - Never taking you for granted, always trying to be better
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>My Whole Heart</span> - Today, tomorrow, and forever, no partial love here
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Forgiving You</span> - Making mistakes together and growing from them
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Protecting You</span> - Emotionally, physically, and in every way that matters
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Being Weird With You</span> - All the strange, goofy, unfiltered versions of me
            </div>
            <div className="p-3" style={{background: 'rgba(139, 69, 19, 0.03)', borderRadius: '4px'}}>
              <span className="font-bold" style={{color: '#8B4513'}}>Pinky Promises</span> - Keeping every single one, forever and ever.
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-12 pt-8" style={{borderTop: '3px double #8B4513'}}>
          <h2 className="text-4xl font-bold text-center mb-8" 
              style={{color: '#8B4513', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em'}}>
            SIGNATURE SECTION
          </h2>
          <p className="text-center mb-8" 
             style={{color: '#5C4033', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontStyle: 'italic'}}>
            By signing below, the undersigned agrees to ALL terms and conditions outlined in this Forever & Ever Contract, effective immediately and lasting for eternity.
          </p>
          
          <div className="grid grid-cols-2 gap-12 mb-10">
            <div>
              <p className="mb-3 font-semibold" style={{color: '#8B4513', fontFamily: "'Cinzel', serif", fontSize: '1.1rem'}}>
                Her Signature:
              </p>
              <div className="pb-2" style={{borderBottom: '2px solid #8B4513'}}>
                <input 
                  type="text"
                  placeholder="Sign here..."
                  className="w-full bg-transparent border-none outline-none italic"
                  style={{
                    color: '#8B4513', 
                    fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", 
                    fontSize: '1.8rem', 
                    marginTop: '-5px'
                  }}
                />
              </div>
              <p className="text-sm mt-2" style={{color: '#8B4513', fontFamily: "'Cormorant Garamond', serif", fontWeight: '600'}}>
                Date: Dec 19th 2025
              </p>
            </div>
            <div>
              <p className="mb-3 font-semibold" style={{color: '#8B4513', fontFamily: "'Cinzel', serif", fontSize: '1.1rem'}}>
                Aaroh's Signature:
              </p>
              <div className="pb-2" style={{borderBottom: '2px solid #8B4513'}}>
                <p className="italic" style={{color: '#8B4513', fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", fontSize: '1.8rem', marginTop: '-5px'}}>
                  Aaroh Nanoti
                </p>
              </div>
              <p className="text-sm mt-2" style={{color: '#8B4513', fontFamily: "'Cormorant Garamond', serif", fontWeight: '600'}}>
                Date: Dec 19th 2025
              </p>
            </div>
          </div>

          {/* Final Validation */}
          <div className="p-6 mb-8"
               style={{
                 background: 'rgba(139, 69, 19, 0.08)',
                 border: '2px solid #8B4513',
                 borderRadius: '4px'
               }}>
            <h3 className="text-2xl font-bold text-center mb-4" 
                style={{color: '#8B4513', fontFamily: "'Cinzel', serif"}}>
              FINAL VALIDATION
            </h3>
            <label className="flex items-center justify-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-6 h-6" 
                style={{accentColor: '#8B4513'}}
                checked={allChecked}
                onChange={handleCheckAll}
              />
              <span className="font-semibold text-lg" style={{color: '#5C4033', fontFamily: "'Cormorant Garamond', serif"}}>
                I confirm that THIS CONTRACT IS VALID FOR FOREVER AND EVER
              </span>
            </label>
          </div>

          {/* Accept Buttons */}
          <div className="flex justify-center gap-6 mb-10">
            <button
              onClick={handleAccept}
              disabled={!allChecked}
              style={{
                fontFamily: "'Cinzel', serif",
                background: allChecked ? 'linear-gradient(135deg, #8B4513, #A0522D)' : '#D3D3D3',
                color: '#FFF',
                border: allChecked ? '3px solid #654321' : '3px solid #999',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: allChecked ? 'pointer' : 'not-allowed',
                boxShadow: allChecked ? '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' : 'none',
                transition: 'all 0.3s',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                if (allChecked) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (allChecked) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
                }
              }}
            >
              YES, I DO
            </button>
            <button
              onClick={handleAccept}
              disabled={!allChecked}
              style={{
                fontFamily: "'Cinzel', serif",
                background: allChecked ? 'linear-gradient(135deg, #8B4513, #A0522D)' : '#D3D3D3',
                color: '#FFF',
                border: allChecked ? '3px solid #654321' : '3px solid #999',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: allChecked ? 'pointer' : 'not-allowed',
                boxShadow: allChecked ? '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' : 'none',
                transition: 'all 0.3s',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                if (allChecked) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (allChecked) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
                }
              }}
            >
              ALWAYS
            </button>
            <button
              onClick={handleAccept}
              disabled={!allChecked}
              style={{
                fontFamily: "'Cinzel', serif",
                background: allChecked ? 'linear-gradient(135deg, #8B4513, #A0522D)' : '#D3D3D3',
                color: '#FFF',
                border: allChecked ? '3px solid #654321' : '3px solid #999',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: allChecked ? 'pointer' : 'not-allowed',
                boxShadow: allChecked ? '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' : 'none',
                transition: 'all 0.3s',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                if (allChecked) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (allChecked) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
                }
              }}
            >
              FOREVER & EVER
            </button>
          </div>

          {/* Contract Notes */}
          <div className="p-5 mb-8"
               style={{
                 background: 'rgba(139, 69, 19, 0.08)',
                 border: '2px solid #8B4513',
                 borderLeft: '6px solid #8B4513'
               }}>
            <h3 className="font-bold mb-3" 
                style={{color: '#8B4513', fontFamily: "'Cinzel', serif", fontSize: '1.2rem'}}>
              Contract Notes:
            </h3>
            <ul className="space-y-2 list-none" 
                style={{color: '#5C4033', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem'}}>
              <li>• This contract is legally binding in the eyes of love and the universe</li>
              <li>• Violations may result in extra cuddles and kisses</li>
              <li>• Amendments can only be made with mutual consent </li>
              <li>• This contract transcends time, space, and everything else</li>
              <li>• Aaroh reserves the right to be extra cute, funny, lovey dovey whenever he wants</li>
              <li>• Krishnaa reserves the right to roll her eyes at his jokes while secretly loving them</li>
            </ul>
          </div>

          {/* Official Stamp */}
          <div className="text-center">
            <div className="inline-block mb-4 px-12 py-4 relative"
                 style={{
                   background: 'radial-gradient(circle, #8B4513, #654321)',
                   color: '#FFF',
                   fontFamily: "'Cinzel', serif",
                   fontSize: '1.5rem',
                   fontWeight: 'bold',
                   border: '4px solid #CD853F',
                   borderRadius: '50%',
                   boxShadow: '0 0 20px rgba(139, 69, 19, 0.5), inset 0 0 20px rgba(0,0,0,0.3)',
                   letterSpacing: '0.05em',
                   width: '210px',
                   height: '210px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   textAlign: 'center',
                   transform: 'rotate(-5deg)'
                 }}>
              SEALED with Bhagwan's help❤️
            </div>
            <p style={{
              color: '#8B4513',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 'bold',
              marginTop: '20px'
            }}>
              "One soul (Krishnaa & Aaroh), forever, zero takebacks, for lifetimes to come."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualContract;


