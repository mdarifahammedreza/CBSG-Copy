import { motion } from "framer-motion";
import AssignmentFilter from "../Components/AssigmentFilter";
import Gallery from "../Components/Gallary";
import ContinentSelector from "../Components/Report&service/ContinentSelector";
import ReportsPagination from "../Components/Report&service/Report";
import CarouselComponent from "../Components/Work/CarouselComponent";
import { BackgroundBeams } from "../Components/ui/background-beams";
import WorldMap from "../Components/ui/world-map";
const Work = () => {
  return (
    <div className="mt-5">
      {/* <BackgroundBeamsComponent /> */}
      {/* <Line/> */}
      <div className="py-10 w-full bg-gradient-to-b from-white to-gray-100 relative flex flex-col items-center justify-center antialiased">
        <div className="w-full p-4 flex flex-col justify-center items-center">
          {/* Title */}
          <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-base_500 to-base_600 text-center font-sans font-bold">
            Explore Services & Research Areas
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
            Our team of experts provide a wide range of services and research
            areas to help you achieve your goals.
          </p>

          {/* Form */}
          <AssignmentFilter/>
                  </div>

        {/* Background Beams */}
        <BackgroundBeams />
      </div>
      {/* <div className=" bg-gradient-to-b from-white to-gray-100 rounded-md shadow-md p-5">
        <section className="flex justify-evenly items-center font-semibold px-2">
          <p>Name</p>
          <p>Area</p>
          <p>Description</p>
        </section>
        {[...Array(6)].map((_, index) => (
          <Link key={index}>
            {" "}
            <section className="flex justify-evenly items-center border-t  px-5 py-3 hover:bg-gray-200 hover:border-x hover:cursor-pointer transition-colors duration-200">
              <p>Name</p>
              <p>Area</p>
              <p>Description</p>
            </section>
          </Link>
        ))}
      </div> */}
      <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>
      <CarouselComponent />
      <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>

      <div className="h-0.5 bg-gradient-to-t from-purple-800 to-violet-700"></div>
      <section className="w-full  mt-5 bg-gradient-to-t from-base_500 via-base_600 to-base_500 shadow-lg shadow-base_300 p-6">
        <ReportsPagination />
      </section>
      <section>
        <div className=" mt-10 p-5 dark:bg-black bg-white w-full">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
              Where we{" "}
              <span className="text-neutral-400">
                {"work".split("").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
              The environment where we work greatly influences productivity and
              creativity. Whether at home, in an office, or a co-working space,
              the setting shapes our success.
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>

        <ContinentSelector />
      </section>
      <div className="relative ">
        {/* Watermark */}
        <p className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold opacity-50 pointer-events-none z-10">
          Capacity Building Service Group
        </p>

        {/* Image Gallery */}
        <Gallery />
      </div>
    </div>
  );
};
export default Work;
