import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { ScrollShadow } from "@nextui-org/react";
import GetAllUserCom from "./GetUser";
export function ShootingStarsAndStars({ children }) {
  return (
    <>
      <div className="h-svh bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h2>{children}</h2>
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="h-full overflow-y bg-black">
        <ScrollShadow>
          <GetAllUserCom />
        </ScrollShadow>
      </div>
    </>
  );
}
