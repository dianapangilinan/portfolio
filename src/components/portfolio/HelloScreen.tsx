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
        setCurrentGreeting((prev: number) => prev + 1);
        setPhase("typing");
      }
    }
  }, [displayedText, phase, currentGreeting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "hsl(310, 30%, 97%)" }}
    >
      {/* Blush pink blob — top left */}
      <div
        className="absolute w-[65vw] h-[65vw] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, hsla(330, 65%, 80%, 0.75), transparent 70%)",
          top: "-10%",
          left: "-15%",
          animation: "floatBlob1 10s ease-in-out infinite",
        }}
      />
      {/* Lavender blob — right */}
      <div
        className="absolute w-[55vw] h-[55vw] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, hsla(275, 55%, 82%, 0.7), transparent 70%)",
          top: "20%",
          right: "-15%",
          animation: "floatBlob2 12s ease-in-out infinite",
        }}
      />
      {/* Sky blue blob — bottom left */}
      <div
        className="absolute w-[50vw] h-[50vw] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsla(200, 60%, 84%, 0.65), transparent 70%)",
          bottom: "-5%",
          left: "10%",
          animation: "floatBlob1 14s ease-in-out infinite reverse",
        }}
      />
      {/* Peach blob — bottom right */}
      <div
        className="absolute w-[45vw] h-[45vw] rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle, hsla(22, 70%, 82%, 0.6), transparent 70%)",
          bottom: "0%",
          right: "5%",
          animation: "floatBlob2 11s ease-in-out infinite reverse",
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
          background: "linear-gradient(160deg, hsla(330, 40%, 55%, 0.95) 0%, hsla(275, 40%, 60%, 0.8) 40%, hsla(200, 45%, 55%, 0.9) 75%, hsla(22, 50%, 60%, 0.75) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 1px 2px rgba(180,140,160,0.25)) drop-shadow(0 2px 10px rgba(180,140,160,0.15))",
          minHeight: "1.4em",
          lineHeight: "1.4",
          padding: "0.4em 0.3em",
          overflow: "visible",
          textShadow: "none",
        }}
      >
        {displayedText}
        <span
          className="inline-block w-[3px] ml-1 align-baseline"
          style={{
            height: "0.75em",
            background: "hsla(330, 50%, 65%, 0.8)",
            animation: "cursorBlink 1s step-end infinite",
            borderRadius: "2px",
          }}
        />
      </h1>
    </div>
  );
};

export default HelloScreen;
