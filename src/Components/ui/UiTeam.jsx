"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { useOutsideClick } from "../../../hooks/use-outside-click";


const UITeam =({cards})=> {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
      AOS.init({
      duration: 1000, // Animation duration
      offset: 100,    // Offset from viewport
      once: false,     // Animation occurs only once
    });
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<div className="py-8 w-full  flex bg-transparent  ">
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[1000]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center rounded-full h-6 w-2"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  max-h-[90%]  md:h-fit md: flex flex-col bg-slate-100 border-2 border-base_600   overflow-hidden z-[1000]">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <img
               
                src={active.photo}
                alt={active.name}
                className="w-full  h-80 lg:h-80 object-cover object-top " />
            </motion.div>

            <div>
              <div className="flex justify-between items-start m-4  border-b border-neutral-200 ">
                <div className="w-full my-3">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-base_900  text-base">
                    {active.name}
                  </motion.h3>
                  <motion.div
                    layoutId={`description-${active.description}-${id}`}
                    className="text-base_600  text-base">
                    {active.designation}
                  </motion.div>
                </div>

                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.linkedin_url}
                  target="_blank"
                  className=" text-3xl p-21 font-bold hover:bg-blue-600 rounded text-base_900">
                     
                  <IoLogoLinkedin/>
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-base_900 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : <div
                    dangerouslySetInnerHTML={{
                      __html: active.description,
                    }}
                    className="text-base font-normal text-blue-950 dynamic-content"
                  />}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <div
      className="max-w-[90%]  mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4">
      {cards.map((card, index) => (
        <motion.div 
          layoutId={`card-${card.title}-${id}`}
          key={card?.id}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col bg-slate-100  rounded-md  hover:bg-gray-50 hover:text-white  cursor-pointer shadow-md " data-aos="zoom-in">
          <div className="flex gap-4 flex-col  w-full justify-center items-center" >
            <motion.div layoutId={`image-${card.title}-${id}`} className='h-52 w-60 md:w-52 overflow-hidden rounded-full relative'>
            {/* <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40"></div> */}
              <img
                width={100}
                height={100}
                src={card.photo}
                alt={card.name}
                className=" w-full h-full object-cover object-top rounded-full" />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800  text-center md:text-left text-base">
                {card.name}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600  text-center md:text-left text-base">
                {card.designation}
              </motion.p>
             
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>);
}
export default UITeam;
export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

