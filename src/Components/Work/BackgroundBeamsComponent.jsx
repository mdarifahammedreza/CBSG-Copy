import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const BackgroundBeamsComponent = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay for loading or fetch initial data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 2000); // You can adjust this duration as needed

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-lg"></span> {/* Loader */}
      </div>
    );
  }

  return (
    <>
      <BackgroundBeamsWithCollision>
        <h2 className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-base_500 to-base_600 text-center font-sans font-bold flex justify-center items-center">
          Our work fuels it.{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Our reach</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span>Our reach</span>
            </div>
          </div>
          <div>
            <span className="ml-1">defines it</span>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default BackgroundBeamsComponent;
