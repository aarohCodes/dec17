// src/components/LoveLetter.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoveLetter: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Longer delay before starting fade-in

    return () => clearTimeout(timer);
  }, []);

  const handleProceed = () => {
    navigate("/photo-reveal");
  };

  return (
    <div 
      className={`min-h-screen flex flex-col items-center py-8 transition-opacity duration-[2500ms] ease-in-out bg-cover bg-center bg-no-repeat ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: 'url("/assets/Introback.png")' }}   
    >
      <div className="max-w-3xl w-full mx-4 bg-gradient-to-b from-amber-50 to-amber-100 shadow-2xl p-10 border-8 border-amber-600 relative my-8" 
           style={{
             background: 'linear-gradient(45deg, #fef3c7, #fde68a, #fef3c7)',
             borderRadius: '8px',
             boxShadow: 'inset 0 0 20px rgba(139, 69, 19, 0.3), 0 0 30px rgba(0, 0, 0, 0.5)',
             maxHeight: '85vh',
             display: 'flex',
             flexDirection: 'column'
           }}>
        {/* Ancient scroll decorative edges */}
        <div className="absolute -top-2 -left-2 w-full h-full border-2 border-amber-700 rounded-lg opacity-60 pointer-events-none"></div>
        <div className="absolute -top-1 -left-1 w-full h-full border border-amber-800 rounded-lg opacity-40 pointer-events-none"></div>
        
        <h1 className="text-3xl font-bold mb-6 text-amber-900 font-serif text-center relative z-10">My Dearest Krishnaa,</h1>
        <div className="flex-1 mb-6 overflow-y-scroll relative z-10 pr-2 scrollbar-hide" 
             style={{ 
               scrollbarWidth: 'none',
               msOverflowStyle: 'none'
             }}>
          <div className="space-y-4 leading-relaxed text-amber-900 font-serif text-base">
          {/* 
            Replace below with your actual love letter text. 
            For now, use filler text. 
            Use many paragraphs—it's scrollable.
          */}
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-amber-800">
            I have been trying to write this letter for a while now, and honestly, I don't even know where to start. How do you put into words what someone means to you when words feel like they're not enough? But I'm going to try, because you deserve to know exactly how I feel about you.

I remember the moment I first realized I was in love with you. It wasn't some dramatic, lightning strike kind of moment like you see in movies. It was just thousands of small moments, each one making me love you more. It was the way you laughed during our conversations, the way your eyes lit up when you talked about things you care about, the way you made me feel like I was the most important person in the world even though we're miles apart. And I remember thinking, "This is it. This is the person I want to wake up thinking about for the rest of my life."

When I fell in love with you, I would say I don't know. But that's the truth, it happened so gradually, so naturally, that by the time I realized it, I was already completely gone. You're the best thing that ever happened to me, and I thank Bhagwan every single day that you came into my life.

Your smile is absolutely radiant, Krishnaa. I mean that with every fiber of my being. The way your eyes light up when you're happy, it's like watching the sun break through clouds after a storm. And your laugh? Omg, your laugh is the most beautiful sound I've ever heard. I could listen to it on repeat forever and never get tired of it. That's not an exaggeration, that's just the truth.

But it's not just your physical beauty that gets me (though you are absolutely stunning, inside and out). It's who you are as a person. You're incredibly kind hearted, Krishnaa. The way you care about people, the way you treat others with such genuine compassion it makes me love you even more. Your compassion for others is beautiful. It's authentic. It's not performative. You genuinely give care about people, and that's rare. That's special. That's YOU.

Your honesty and integrity blow me away. You're genuinely authentic in everything you do. You don't pretend to be someone you're not, and you never ask me to be someone I'm not either. You accept me exactly as I am, flaws and all, and that's something I never had before. You're unapologetically yourself, and your realness is so refreshing. You're transparent and honest, and your integrity shines through everything you do.

I love your sense of humor so much. It matches mine perfectly, which is kind of crazy because not everyone gets the way I joke around. But you do. You're hilarious without even trying, and you make me laugh at the dumbest things. Your wit and cleverness have me constantly entertained. You find humor in everyday moments, and you can make light of difficult situations without being insensitive. That's a skill, honestly. And you're so good at it.

Your intelligence is absolutely captivating, Krishnaa. The way your mind works fascinates me. You're insightful and observant about everything. You understand complex things with ease. Your thoughts are always worth listening to, and you're articulate and well spoken in a way that just commands attention. You challenge me to think differently, and you're never judgmental about anything I say or feel. That means everything to me.

Your creativity is inspiring. You have such a unique perspective on everything—the way you see the world, your creativity, and the way you light up when you talk about the things you love (especially being a doctor) makes me feel happy just watching you be passionate about something. I still remember our 6+ hour movie call when you went into so much detail about REM sleep. It was amazing. Those tiny details matter to me because they're you being you, and you're incredible.

Your confidence is mesmerizing. You carry yourself with such elegance and grace. You're classy and sophisticated, but you're also fun and spontaneous. You embrace adventure, and you're willing to try new things. You don't overthink every moment; you live in the present. You go with the flow, and that's something I really admire about you. You're exciting to be around, Krishnaa. You keep life interesting.

You're strong and resilient in ways that inspire me daily. Your determination is admirable. You're ambitious and driven, and you never give up on your goals. Your work ethic is incredible. I've watched you push through hard times (o-chem), and the way you handle difficult situations with grace is something I aspire to. You're brave in everything you do. Your vulnerability shows true strength, not weakness. You're not really afraid to let me see the real you the scared parts, the uncertain parts, the messy parts.

Your emotional intelligence is something I've come to really appreciate. Your empathy is so genuine. You understand people without judgment. You're incredibly patient with me, especially when I'm overthinking. Your maturity is refreshing. The way you handle our conflicts is mature and loving. Your words are always thoughtful, and you listen without interrupting. Your presence is calming, and you make everyone feel valued. Your energy is infectious, and you light up every room you enter. Your vibes are immaculate, and I'm not even joking.

I love everything you do. Your playful banter, your pretty laughs, the way you make me feel literally everything, it's all perfect. You have this way of making me feel special and loved. You can sense how I feel and know just the right thing to say or do. It's comforting. You comfort me in ways I didn't even know I needed. You make me feel safe and cared for. You are my peace. No matter what I'm going through, you're always there to lift me up and remind me that I can do anything.

You're my deepest peace. There's something incredibly special about the way you see the world, your kindness, your passion, and the way you care about the things that matter to you. It makes me feel genuinely happy just knowing you exist. And the fact that you're mine? That you choose me every single day despite the distance, despite the challenges, despite everything. It feels too good to be true and real now.

I never want to lose you. I will always be there for you no matter what you go through, because we're in this together, and I will stand by your side. You will always have a place in my heart that no one else can have. And Krishnaa, our cute little moments together, our kaleshes, the way we laugh about them afterwards they're all great too. Every single moment with you is a moment I treasure.

It's amazing how we share the same goals. Our thinking is pretty much the exact same. And mujhe tum har cheez mein aur har time nazar aati ho. Like, it's crazy, but don't worry because I love it. When we're together, there's this energy that's just sooooooooo us. And I'm obsessed with it.

I love you so much, Krishnaa Brahmbhatt. I only want to be seen with you. I'll be with you through your highest and lowest points in life and never for a second leave you. I wish I could be there with you right now. We would be having so much fun. I miss you so much. Those moments when we just exist together on video calls, texting, talking about our dreams, laughing at each other's jokes, talking about Kiarah those are the moments that matter the most to me.

You're my favorite person to talk to about anything. You're not just my girlfrien, you're my best friend. My confidant. My person. You know me better than anyone else in this world, and I know you're going to know me even better as time goes on. And that's beautiful.

You have your own dreams and goals, and you're not waiting around for anyone to achieve them. You have your own passions, and the way you pursue them with such enthusiasm is something I deeply respect. Your passion is contagious. You care deeply about what matters to you, and your values align with mine in ways that feel like destiny. You're morally grounded. Your integrity is unshakeable. You do the right thing even when it's hard. Your character is impeccable, and you're genuinely great, not because anyone's watching, but because that's just who you are.

You're generous of spirit. You give people the benefit of the doubt. You're forgiving and understanding. You don't hold grudges. Your compassion extends to everyone, and you have a big heart. You love deeply. You're someone who lifts others up. Your positivity is genuine, and you're a light in this world. I know that sounds dramatic, but it's true. You make the world a better place just by existing in it.

I love your sense of style, by the way. You have such good taste. The way you dress is always perfect. You carry yourself with elegance, and you're classy and sophisticated. Your aesthetic is beautiful. You know what looks good, and your fashion sense is inspiring.

You process things healthily.

Krishnaa, here's the thing about us that I want you to understand completely: We are #InitToWinIt. We're committed to this, to us, to building something real and lasting together. I'm not just saying this, I mean it with everything I have. We're going to face challenges because long distance is hard, but we're going to face them together. And I believe in us so deeply. I've never felt this sure about anything in my life.

And you know what? I genuinely believe that Bhagwan is with us. I believe that Bhagwan brought us together, and I don't think it was an accident. I think our story is special. I think it's real. It's us against the world.

Our story is different. It's two people who found each other at the right time, who understand each other on a level that most people will never experience, who choose each other every single day. That's our story. That's us, KA//AK.

When I think about the future, I see you. I see us. I see late night conversations and inside jokes and moments where we just exist together in comfortable silence. I see you pursuing your dream of being a doctor, and me being right there cheering you on, supporting you, believing in you when you don't believe in yourself. I see us building something beautiful together. I see forever with you, Krishnaa.

I know this letter is getting really long, but I just have a lot to say. And honestly, even this all doesn't feel like enough to express how much you mean to me. And 🤭 if I had a thousand more pages, I'd fill them all trying to describe you, trying to capture what you make me feel, trying to express the depth of my love for you.

I want to be the person you think about when you wake up. I want to be the person who makes you laugh until you can't breathe. I want to be the person you call when something amazing happens or when everything falls apart. I want to be your person, Krishnaa.

Whatever amount of time our life repeats, I'll find you and choose you again and again.

When we do kalesh, or when I sleep without telling you, always remember I don't stop loving you. Be mine, forever and ever, no takebacks, no changes, just pure strong love. Be the person I wake up thinking about. Be my reason to smile on days when I want to give up. Be my greatest adventure. Be my forever.

I love you so so so much, Krishnaa. I love you in ways I didn't even know were possible. I love you on your best days and your worst days. I love you when you're being absolutely ridiculous and when you're being serious. I love every single part of you, the good, the bad, the messy, the beautiful, all of it.

Thank you for being you. Thank you for being the most incredible, beautiful, amazing person I've ever met. Thank you for making my life infinitely better just by existing in it.

Remember this isn't enough to express my love for you, but it's a start. I'm gonna need a thousand more letters to fully capture what you mean to me. But until then, know that every single moment I spend thinking about you, every single time your name pops up on my phone, every single time I see your face on a video call, my heart feels fuller. You're my forever, Krishnaa. Always.

Forever yours, always and completely.
          </p>
          </div>
        </div>
        <button
          onClick={handleProceed}
          className="bg-amber-700 hover:bg-amber-800 text-amber-100 font-bold py-3 px-7 rounded-lg text-xl shadow-lg border-2 border-amber-900 relative z-10 font-serif"
        >
          Proceed
        </button>
      </div>
      
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default LoveLetter;
