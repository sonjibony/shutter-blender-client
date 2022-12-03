import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Achievement = () => {
  //counter animation
  const [counterOn, setCounterOn] = useState(false);
  //extra section for bonus
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="mt-10 mb-20">
        <div className="text-center ">
          <h3 className="text-2xl font-bold text-green-400">ACHIEVEMENTS</h3>
          <h3 className="text-5xl font-bold mb-3">Why Choose Me</h3>
          <p className="text-lg">
            Here is why you should hire me. I have added my work experiences and
            achievements
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-9">
          <div className=" md:px-2 w-20 md:w-32  lg:w-52 py-2 border-r-4 border-black text-center">
            <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 font-bold text-green-400">
              {counterOn && (
                <CountUp start={0} end={200} duration={2} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className=" md:text-xl lg:text-2xl">Projects Done</p>
          </div>
          <div className=" w-20 md:w-32  lg:w-52 md:px-2 py-2 border-r-4 border-black text-center">
            <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 font-bold text-green-400">
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className=" md:text-xl lg:text-2xl">Happy Clients</p>
          </div>
          <div className="text-start md:px-2 w-20 md:w-32  lg:w-52 py-2 border-r-4 border-black lg:text-center ">
            <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 font-bold text-green-400">
              {counterOn && (
                <CountUp start={0} end={15} duration={2} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className=" md:text-xl lg:text-2xl">Exhibition</p>
          </div>
          <div className=" md:px-2 w-20 md:w-32 lg:w-52 py-2 border-r-4 border-black text-center">
            <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 text-green-400 font-bold">
              {counterOn && (
                <CountUp start={0} end={7} duration={2} delay={0}></CountUp>
              )}
              +{" "}
            </h1>
            <p className=" md:text-xl lg:text-2xl">Years of Work</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Achievement;
