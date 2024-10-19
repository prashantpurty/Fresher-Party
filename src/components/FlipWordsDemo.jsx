import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Squad up", "Lit", "Vibe", "Dance","Slay", "Flex"];

  return (
    (<div className=" flex justify-center items-center px-4 my-8">
      <div
        className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Let's{"  "}
        <FlipWords words={words} /> <br />
      </div>
    </div>)
  );
}
