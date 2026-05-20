"use client";

import { useState, useEffect } from "react";

type HeroMode = "aggressive" | "minimal";

export function useHeroMode(): [HeroMode, (mode: HeroMode) => void] {
  const [mode, setMode] = useState<HeroMode>("aggressive");

  useEffect(() => {
    const saved = localStorage.getItem("hero-mode") as HeroMode;
    if (saved && (saved === "aggressive" || saved === "minimal")) {
      setMode(saved);
    }
  }, []);

  const updateMode = (newMode: HeroMode) => {
    setMode(newMode);
    localStorage.setItem("hero-mode", newMode);
  };

  return [mode, updateMode];
}
