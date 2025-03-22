import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppProvider";
import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { ImagesSlider } from "../../Components/ui/images-slider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const Research_Evaluation = () => {
  const [SideBar, IsSideBar] = useState(false);
  const { images, uri , loading} = useContext(AppContext);
  const [SubServiceAreas, setSubServiceAreas] = useState([]);
  const [loading1, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${uri}sub-service-areas/`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setSubServiceAreas(res.data.filter(item => item.category === "RE"));
        } else {
          console.error("Invalid response data format:", res.data);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
 
  return (
    <div>
     {loading ? <CBSGCharLoader/> : <ImagesSlider className="h-[30rem] rounded-t border-t border-l border-r border-gray-300" images={images} overlay={true}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4">
          Organization Development
        </motion.p>
      </motion.div>
    </ImagesSlider>}
      {loading1 ? <CBSGCharLoader/> : error ? <p>Error loading data</p> : <HoverEffect items={SubServiceAreas} />}
    </div>
  );
};

export default Research_Evaluation;