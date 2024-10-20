"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
export function ShootingStarsAndStars({ children }) {
  return (
    <div className="h-svh bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2>{children}</h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
