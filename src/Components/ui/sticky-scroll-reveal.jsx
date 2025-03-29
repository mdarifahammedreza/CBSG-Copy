"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Uncomment line below and comment `container: ref` if you don't want the overflow container
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--base_900)",
    "var(--violet-950)",
    "var(--yellow-950)",
  ];
  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, var(--base_500), var(--base_600))",
      "linear-gradient(to bottom right, var(--violet-800), var(--violet-900))",
      "linear-gradient(to bottom right, var(--yellow-700), var(--yellow-800))",
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] overflow-y-auto scroll-smooth flex justify-center relative space-x-10 scrollbar-hide p-10"
      ref={ref}
    >
      <div className="div relative flex items-start ">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.year_range}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10 hidden md:block mb-64"
              >
                <div dangerouslySetInnerHTML={{__html:item.description}}/>
              </motion.div>
              {item.image && (
                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-5 rounded"
                />
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "lg:block h-1/2 md:h-[30rem] w-[45rem] sticky top-10 shadow-lg",
          contentClassName
        )}
      >
        <div className="h-full  overflow-auto p-4 text-white flex flex-col space-y-4">
  {content[activeCard].timelines?.map((item, index) => (
    <div key={index} className="content-item mb-4 border-2 p-5 w-max-56">
      <div className="flex justify-center items-center"><img src={item.image} alt={item.Content_title} className="w-fit h-[15rem] mt-2 rounded " /></div>
      <h3 className="text-xl font-bold border-b mt-5">{item.title}</h3>
      <div className="text-sm mt-3" dangerouslySetInnerHTML={{__html:item.description}}/>
    </div>
  ))}
</div>
      </div>
    </motion.div>
  );
};
