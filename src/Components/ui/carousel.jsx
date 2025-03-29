"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const Modal = ({ slide, onClose }) => {
  if (!slide) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/5 lg:w-2/5 relative shadow-xl">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}>
          &times;
        </button>
        <img
          src={slide?.photo}
          alt={slide?.title}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{slide.title}</h2>
        <div className="dynamic-content mb-4" dangerouslySetInnerHTML={{ __html: slide.description }} />
        <img
          src={slide?.company_logo}
          alt="Company Logo"
          className="w-16 h-16 object-cover rounded-full mb-2"
        />
        <p className="text-gray-700"><strong>Service Type:</strong> {slide?.service_type}</p>
        <p className="text-gray-700"><strong>Sub Service Area:</strong> {slide?.sub_service_area}</p>
        <p className="text-gray-700"><strong>Practice Area:</strong> {slide?.practice_area}</p>
      </div>
    </div>
  );
};

const Slide = ({ slide, index, current, handleSlideClick, openModal }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white w-[40vmin] h-[40vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          xRef.current = 0;
          yRef.current = 0;
        }}
        style={{
          transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden"
          style={{ transform: current === index ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none" }}>
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={slide.title}
            src={slide.photo}
            loading="eager"
            decoding="sync" />
          {current === index && <div className="absolute inset-0 bg-black/30" />}
        </div>
        <article className={`relative p-[4vmin] ${current === index ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <h2 className="text-lg md:text-2xl lg:text-2xl font-semibold">{slide.title?.length > 30 ? slide.title.substring(0, 30) + "..." : description}</h2>
          <div className="flex justify-center">
            <button 
              className="mt-6 px-4 py-2 text-black bg-white h-12 border rounded-2xl hover:shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                openModal(slide);
              }}>
              View Details
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => (
  <button
    className="w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 rounded-full hover:-translate-y-0.5 active:translate-y-0.5"
    title={title}
    onClick={handleClick}>
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const handlePreviousClick = () => setCurrent((current - 1 + slides.length) % slides.length);
  const handleNextClick = () => setCurrent((current + 1) % slides.length);
  const handleSlideClick = (index) => setCurrent(index);

  return (
    <div className="relative w-[40vmin] h-[40vmin] mx-auto">
      <ul className="absolute flex mx-[-4vmin]" style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <Slide 
            key={slide.id} 
            slide={slide} 
            index={index} 
            current={current} 
            handleSlideClick={handleSlideClick} 
            openModal={setSelectedSlide} 
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
      <Modal slide={selectedSlide} onClose={() => setSelectedSlide(null)} />
    </div>
  );
}
