"use client";

import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import { cn } from "../../../lib/utils";

// Carousel Context
export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

// Carousel Component
export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l opacity-15"
            )}
          ></div>
          <div
            className={cn("flex flex-row justify-start gap-4 pl-4", "mx-auto")}
          >
            {items?.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-base_900 text-white flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-base_900 text-white flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Card Component
export const Card = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-[500] overflow-auto rounded-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/20 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.assignment_name}` : undefined}
              className="max-w-5xl mx-auto h-fit z-[60] my-4 md:my-10 p-4 md:p-8 lg:p-12 rounded-3xl font-sans relative bg-white dark:bg-base_900 shadow-2xl"
            >
              {/* Close Button */}
              <button
                className="sticky top-4 h-10 w-10 right-4 md:right-8 lg:right-12 ml-auto bg-base_600 rounded-full flex items-center justify-center hover:bg-base_700 transition-colors"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              {/* Company Logo */}
              {card.company_logo && (
                <div className="flex justify-center mb-4 md:mb-8">
                  <img
                    src={card.company_logo}
                    alt={`${card.assignment_with} Logo`}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full border-2 border-base_200 dark:border-base_700"
                  />
                </div>
              )}

              {/* Assignment Name */}
              <motion.h1
                layoutId={layout ? `title-${card.assignment_name}` : undefined}
                className="text-xl md:text-xl lg:text-3xl font-bold text-neutral-800 dark:text-white text-center mb-2 md:mb-4"
              >
                {card.assignment_name}
              </motion.h1>

              {/* Assignment With (Company Name) */}
              <motion.p
                layoutId={
                  layout ? `category-${card.assignment_name}` : undefined
                }
                className="text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-300 text-center mb-4 md:mb-8"
              >
                {card.assignment_with}
              </motion.p>

              {/* Assignment Dates */}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-4 md:mb-8">
                <div className="text-center">
                  <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    Start Date
                  </p>
                  <p className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {new Date(card.assignment_start).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    End Date
                  </p>
                  <p className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {new Date(card.assignment_end).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Assignment Image */}
              {card.assignment_photo && (
                <div className="my-4 md:my-8">
                  <img
                    src={card.assignment_photo}
                    alt={card.assignment_name}
                    className="w-full h-48 md:h-64 lg:h-96 rounded-lg object-cover shadow-lg"
                  />
                </div>
              )}

              {/* Assignment Description */}
              <div
                className="py-4 md:py-8 prose prose-sm md:prose-base lg:prose-lg prose-neutral dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: card.assignment_description,
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.assignment_name}` : undefined}
        onClick={handleOpen}
        className="bg-base_900 h-80 w-56 md:h-[20rem] md:w-72 overflow-hidden flex flex-col items-start justify-start relative z-10 rounded-md"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black via-black/60 to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.assignment_with}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.assignment_with}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.assignment_name}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.assignment_name}
          </motion.p>
        </div>
        {card.assignment_photo && (
          <BlurImage
            src={card.assignment_photo}
            alt={card.assignment_name}
            
            className="object-cover absolute z-10 inset-0"
          />
        )}
      </motion.button>
    </>
  );
};

// BlurImage Component
export const BlurImage = ({ src, alt, className, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={`transition duration-300 ${
        isLoading ? "blur-sm" : "blur-0"
      } ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
