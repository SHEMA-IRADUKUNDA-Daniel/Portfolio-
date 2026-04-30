import { useEffect, useState } from "react";

const words = [
  "Shema Iradukunda Daniel",
  "Junior Front-End Developer",
  "UI Designer",
  "Graphic Designer",
];

const HeroTyping = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(100);

        if (text === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(50);

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <div className="text-start">
      <h1 className="text-lg tracking-[0.25em]  text-zinc-500 uppercase mb-6">
        I'm {text}
        <span className="animate-blink text-white ">|</span>
      </h1>
    </div>
  );
};

export default HeroTyping;
