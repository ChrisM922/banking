"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={2.75}
        decimal="."
        decimals={2}
        end={amount}
        suffix="€"
      />
    </div>
  );
};

export default AnimatedCounter;
