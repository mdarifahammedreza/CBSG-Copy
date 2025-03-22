import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import PracticeArea from "../Components/PracticeArea/PreacticeArea";
import { ImagesSlider } from "../Components/ui/images-slider";

const Practice = () => {
  const {  images } = useContext(AppContext);




  return (
    <div className="mt-8">
      <ImagesSlider className="h-[30rem] rounded-t border-t border-l border-r border-gray-300" images={images} overlay={true}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white py-4">
            Practice Area
          </motion.p>
        </motion.div>
      </ImagesSlider>
      <div className="flex flex-wrap  gap-6 px-6 my-10 lg:px-16">

      <PracticeArea />
      </div>
    </div>
  );
};

export default Practice;
