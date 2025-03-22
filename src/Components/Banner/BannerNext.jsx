//Done
import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderComponent() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
const {uri}=useContext(AppContext)
  useEffect(() => {
    axios
    axios.get(`${uri}home-banners/`)
      .then((res) => {
        setImages(res.data.map((item) => item.image));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <CBSGCharLoader />
      </div>
    );
  }

  return (
    <ImagesSlider className="h-[30rem] rounded-t border-t border-l border-r border-gray-300" images={images} overlay={true}>
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
  );
}
