"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypingEffect({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayedText("");
    setIsComplete(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(timer);
  }, [startTyping, delay]);

  return { displayedText, isComplete };
}
