import BoxReveal from "./ui/Boxreveltext"; // Make sure this path is correct

export function BoxRevealDemo() {
  return (
    <div>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold text-white">
          WelCome Fresher<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] text-white">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal> */}

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-white">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}
