"use client";;
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div className="bg-black flex items-center justify-center p-4 sm:p-10">
      <BackgroundGradient className="rounded-[22px] max-w-8xl max-h-90 mx-2 my-2 p-4 sm:p-10 bg-white dark:bg-zinc-900 text-center">
        <h1 className="text-4xl font-bold text-center text-white">🎉 Fresher Party Vibes Only! 🎉</h1>
        <div className="text-center my-7">
          <p className="text-white my-4">
            📅 When: Tuesday, 22th October 2024
          </p>
          <p className="text-white mb-4">⏰ Time: 10:00 AM - Till We Drop</p>
          <p className="text-white mb-4">📍 Where: Centurion University, BBSR</p>
          <p className="text-white text-xl">
            🌟 Drip hard, bring the energy, and let’s turn it up! 🔥<br />
            This Day gonna be legendary! 🚀
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
}
