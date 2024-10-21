import { useCallback, useEffect, useState } from "react";

import Particles from "./ui/particleui";
import NeonGradientCardCom from "./ui/Gredientcard";
import { GoogleLogin } from "@react-oauth/google";
import { BoxRevealDemo } from "./BoxModel";
import { VerifyGoogleAuthToken } from "../graphql/query/user";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { graphqlClient } from "../api";

export function ParticlesDemo() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, []);

  const queryClient = useQueryClient();
  const handleCredGoogle = useCallback(
    async (cred) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error("Google Token not found!");
      const { verifyGoogleToken } = await graphqlClient.request(
        VerifyGoogleAuthToken,
        {
          token: googleToken,
        }
      );

      console.log(googleToken);

      console.log(verifyGoogleToken);

      toast.success("Verified Success!");
      if (verifyGoogleToken)
        window.localStorage.setItem("token", verifyGoogleToken);

      await queryClient.invalidateQueries({ queryKey: ["Login_User"] });
    },
    [queryClient]
  );

  return (
    <div className="relative h-svh w-full flex bg-black flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl">
      {/* <div className="p-8 mb-10 max-w-lg items-center justify-center overflow-hidden">
        <BoxRevealDemo />
      </div> */}
      <NeonGradientCardCom className="max-w-sm h-fit items-center justify-center text-center">
        <span className="z-10 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] w-full">
          <GoogleLogin onSuccess={handleCredGoogle} />
        </span>
      </NeonGradientCardCom>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
