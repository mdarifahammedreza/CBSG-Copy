import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { ImagesSlider } from "../Components/ui/images-slider";
import { motion } from "framer-motion";
import axios from "axios";
import PropTypes from "prop-types";
import { AppContext } from "../AppProvider";
import StrategicPartner from "../Components/StrategicPartner/StrategicPartner";
import CBSGCharLoader from "./CBSGCharLoader";
import Time from "../Components/Timeline/Time";
const About = () => {
  const {uri, images} = useContext(AppContext);
 
const [loading1, setLoading1] = useState(true);
  const [About, setAbout] = useState([{ data: [] }]);
  const [error1, setError] = useState(null);
  const [core, Sercore] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API using axios
        const response = await axios.get(`${uri}about-us/`);
        setAbout(response.data[0]);
        console.log(response.data[0]); // Set the fetched data to state
      } catch (error) {
        // Handle errors
        if (error.response) {
          // The request was made and the server responded with a status code
          setError(`Error: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
          // The request was made but no response was received
          setError("Error: No response received from the server");
        } else {
          // Something happened in setting up the request
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading1(false); // Stop loading regardless of success or failure
      }
    };
  
    // Fetch data from about-us and core-competencies in parallel
    fetchData();
  setLoading1(true);
    // Fetch core-competencies data
    axios.get(`${uri}core-competencies/`)
      .then((response) => {
        console.log(response.data);
        Sercore(response.data);
      })
      .catch((error) => {
        setError("Error fetching core competencies");
        setLoading1(false);
      });
  
    // Initialize AOS animations
    AOS.init({
      duration: 2000, // Animation duration
      offset: 100, // Offset from viewport
      // once: true, // Animation occurs only once
    });
  
  }, []); // Empty dependency array to run once when the component mounts
  
  if (loading1) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <CBSGCharLoader/>
        {/* <span className="loading loading-bars loading-lg"></span> */}
      </div>
    );
  }

  if (error1) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <p className="text-red-500">Error: {error1}</p>
      </div>
    );
  }

  const categories = core?.map(item => item.title) || [];
  console.log(categories);


  return (
    <div className="text-base_900 mt-5 mb-10">
      <ImagesSlider className="h-[30rem] rounded-t border-t border-l border-r border-gray-300" images={images} overlay={true} data-aos="fade-up"> 
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4">
          Supporting Greater Performance
        </motion.p>
      </motion.div>
    </ImagesSlider>

      <div
        className="w-full h-3 grid grid-cols-3 bg-black"
        data-aos="fade-right">
        <div className="bg-base_500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-violet-950"></div>
      </div>

      <div className="xl:px-72 mt-10 p-10" data-aos="fade-left">
        <p className="card-title font-sans font-bold text-base_600 underline underline-offset-8">
          About CBSG
        </p>
        <div className="text-justify font-normal mt-2" dangerouslySetInnerHTML={{ __html: About?.about_text }} />
        
      </div>

      <div
        className="w-full grid  grid-cols-2 md:grid-cols-3 gap-5 xl:px-72 mt-10 justify-items-center p-10"
        data-aos="fade-up">
        <div data-aos="fade-right">
          <div className="card">
            <div className="card-body pl-0 pt-0">
              <h2 className="card-title font-sans font-bold text-base_600 underline underline-offset-8">
                <div className="flex items-center justify-center text-base_600">
                  <p>Our Mission</p>
                </div>
              </h2>
              
              <div className="font-normal text-justify" dangerouslySetInnerHTML={{ __html: About?.our_mission }} />
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="card">
            <div className="card-body pt-0">
              <h2 className="card-title font-sans font-bold text-base_600 underline underline-offset-8">
                <div className="flex items-center justify-center">
                  <p>Our Vision</p>
                </div>
              </h2>
              
              <div className="font-normal text-justify" dangerouslySetInnerHTML={{ __html: About?.vision_text }} />
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="hidden md:block">
          <img
            src={About?.logo}
            alt="Performance Studies"
            className="rounded-xl h-56"
            
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 xl:px-72 justify-items-center p-10">
        <div className="card col-span-2 w-full" data-aos="fade-left">
          <div className="card-body pl-0">
            <h2 className="card-title font-sans font-bold text-base_600 underline underline-offset-8">
              <div className="flex items-center justify-center">
                <p>Our Core Values</p>
              </div>
            </h2>
            <div className="font-normal text-justify" dangerouslySetInnerHTML={{ __html: About?.core_value_text }} />
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="card shadow-md shadow-Coral_800 bg-gradient-to-r col-span-2 md:col-span-1 from-Coral_800 to-Coral_900  rounded-none transition ease-in-out delay-150 hover:translate-y-1 hover:scale-90 duration-400">
          <div className="card-body text-white">
            <h2 className="card-title font-sans font-bold ">
              <div className="flex items-center justify-center ">
                <p>Integrity</p>
              </div>
            </h2>
            <div className="font-normal " dangerouslySetInnerHTML={{ __html: About?.integrity_text }} />
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="card shadow-md shadow-Teal_700 bg-gradient-to-r from-Teal_800 to-Teal_800 rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210  duration-400 col-span-2 md:col-span-1">
          <div className="card-body ">
            <h2 className="card-title font-sans font-bold text-white">
              <div className="flex items-center justify-center">
                <p>Commitment to Meaningful Change:</p>{" "}
              </div>
            </h2>
            <div className="font-normal text-white" dangerouslySetInnerHTML={{ __html: About?.commitment_text }} />
            
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="card shadow-md shadow-Golden_800 bg-gradient-to-r from-Golden_800 to-Golden_900 text-white rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210  duration-400 col-span-2 md:col-span-1">
          <div className="card-body ">
            <h2 className="card-title font-sans font-bold ">
              <div className="flex items-center justify-center">
                <p>Ethical Practice:</p>{" "}
              </div>
            </h2>
            <div className="font-normal " dangerouslySetInnerHTML={{ __html: About?.ethical_text }} />
            
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="card col-span-2 md:col-span-1 shadow-md shadow-Corcol_Gray_800 bg-gradient-to-r from-Corcol_Gray_800 to-Corcol_Gray_900 text-white rounded-none transition ease-in-out delay-150  hover:translate-y-1 hover:scale-210  duration-400">
          <div className="card-body ">
            <h2 className="card-title font-sans font-bold ">
              <div className="flex items-center justify-center">
                <p>Inclusivity and Adaptability:</p>{" "}
              </div>
            </h2>
            <div className="font-normal " dangerouslySetInnerHTML={{ __html: About?.inclusivity_text }} />
            
          </div>
        </div>
      </div>

      <div className="xl:px-72 p-10" data-aos="fade-right">
        <p className="card-title text-base_600 pb-5 w-full underline underline-offset-8">
          Our Core Competencies
        </p>

        <Core categories={categories}/>
      </div>
      <h1 className="text-3xl font-extrabold text-white mx-72 bg-base_600 px-8 py-1 shadow-md shadow-base_300">History & Timeline</h1>
      <Time data-aos="flip-up" />

      <div>
        <div
          className="w-full flex flex-col items-center justify-center mt-20 p-10"
          data-aos="fade-up">
          <p className="text-3xl font-bold text-base_600 max-w-1/3">
            Strategic Partners
          </p>
          <p className="text-center max-w-screen-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure
            veniam sit laboriosam ullam quidem nihil qui numquam at excepturi
            maiores quam blanditiis eum minus in, aliquid ea repudiandae
            pariatur.
          </p>
        </div>
        <StrategicPartner data-aos="fade-up" />
      </div>
    </div>
  );
};

const Core = ({categories}) => {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className="bg-white p-4 shadow-sm shadow-base_300 to-10% transition ease-in-out delay-150 hover:translate-y-1 hover:scale-x-90 duration-400"
          data-aos="fade-in">
          <h3 className="text-lg font-bold text-base_600">{category}</h3>
        </div>
      ))}
    </div>
  );
};

export default About;


Core.propTypes = {
  categories: PropTypes.array.isRequired,
};



