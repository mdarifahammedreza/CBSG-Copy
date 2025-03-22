"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../lib/utils";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-[50rem] items-start overflow-y-auto w-full z-20", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {[firstPart, secondPart, thirdPart].map((part, index) => {
          const translateY = [translateFirst, translateSecond, translateThird][index];
          return (
            <div key={index} className="grid gap-10">
              {part.map((el, idx) => (
                <motion.div style={{ y: translateY }} key={`grid-${index}-${idx}`}>
                  <img
                    src={el}
                    className="h-60 w-full object-cover object-left-top rounded-lg"
                    height={400}
                    width={400}
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
