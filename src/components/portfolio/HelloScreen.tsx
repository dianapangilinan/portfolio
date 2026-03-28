import { useState, useEffect } from "react";

interface HelloScreenProps {
  onComplete: () => void;
}

const greetings = [
  { text: "hello", lang: "English" },
  { text: "kumusta", lang: "Tagalog" },
];

const HelloScreen = ({ onComplete }: HelloScreenProps) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing" | "done">("typing");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const word = greetings[currentGreeting].text;

    if (phase === "typing") {
      if (displayedText.length < word.length) {
        const timer = setTimeout(() => {
          setDisplayedText(word.slice(0, displayedText.length + 1));
        }, 120);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("hold"), 800);
        return () => clearTimeout(timer);
      }
    }

    if (phase === "hold") {
      if (currentGreeting < greetings.length - 1) {
        const timer = setTimeout(() => setPhase("erasing"), 400);
        return () => clearTimeout(timer);
      } else {
        // Last greeting — fade out and complete
        const timer = setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 800);
        }, 600);
        return () => clearTimeout(timer);
      }
    }

    if (phase === "erasing") {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 60);
        return () => clearTimeout(timer);
      } else {
        setCurrentGreeting((prev) => prev + 1);
        setPhase("typing");
      }
    }
  }, [displayedText, phase, currentGreeting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(280 60% 85%), hsl(220 70% 88%), hsl(340 50% 88%), hsl(200 65% 90%), hsl(260 55% 87%))",
        backgroundSize: "400% 400%",
        animation: "helloGradient 8s ease-in-out infinite",
      }}
    >
      {/* Soft ambient blobs */}
      <div
        className="absolute w-[60vw] h-[60vw] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 75%), transparent 70%)",
          top: "10%",
          left: "-10%",
          animation: "floatBlob1 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[50vw] h-[50vw] rounded-full opacity-25 blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 78%), transparent 70%)",
          bottom: "5%",
          right: "-5%",
          animation: "floatBlob2 12s ease-in-out infinite",
        }}
      />

      <h1
        className="relative z-10 select-none"
        style={{
          fontFamily: "'Borel', cursive",
          fontSize: "clamp(4rem, 12vw, 10rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: "transparent",
          background: "linear-gradient(180deg, hsla(210 30% 85% / 0.95) 0%, hsla(210 20% 70% / 0.5) 40%, hsla(210 30% 85% / 0.9) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 1px 2px hsla(210 40% 60% / 0.3)) drop-shadow(0 4px 20px hsla(210 50% 80% / 0.25))",
          minHeight: "1.2em",
          textShadow: "none",
        }}
      >
        {displayedText}
        <span
          className="inline-block w-[3px] ml-1 align-baseline"
          style={{
            height: "0.75em",
            background: "hsla(0 0% 100% / 0.7)",
            animation: "cursorBlink 1s step-end infinite",
            borderRadius: "2px",
          }}
        />
      </h1>
    </div>
  );
};

export default HelloScreen;
