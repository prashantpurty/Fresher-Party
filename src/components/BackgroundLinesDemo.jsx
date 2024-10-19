import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWordsDemo } from "./FlipWordsDemo";
export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome <br /> Freshers 2024
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
       💥 YO FRESHERS! 💥<br />
       It’s time to vibe, slay, and make some memories. 💫
      </p>
      <br />
      <p className="text-white mx-auto text-center md:text-xl">
         <div className="text-5xl font-mono">Fresher Party 2024 </div><br />
         ✨ New Faces, Crazy Vibes, Endless Fun ✨
         </p>
         <div className="text-2xl">
          <FlipWordsDemo />
         </div>
    </BackgroundLines>)
  );
}
