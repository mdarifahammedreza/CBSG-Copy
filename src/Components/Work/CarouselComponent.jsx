import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";
import { Carousel } from "../ui/carousel";

const CarouselComponent = () => {
  const { uri } = useContext(AppContext);
  const [slideData, setSlideData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${uri}milestone-works`);
        if (response.data && Array.isArray(response.data)) {
          
          setSlideData(response.data);
        } 
      } catch (error) {
        console.error("Failed to fetch slideData:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [uri]);

  if (loading) {
    return (
      <div className="text-center">
        <CBSGCharLoader />
      </div>
    );
  }
console.log(slideData);
  return (
    <div className="relative overflow-hidden w-full h-full my-5">
      {slideData?.length > 0 ? (
       <Carousel slides={slideData} />
    
      ) : (
        <p>No slides available</p>
      )}
    </div>
  );
};

export default CarouselComponent;