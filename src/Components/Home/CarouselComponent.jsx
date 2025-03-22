//Done
import axios from "axios";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";
import PracticeArea from "../PracticeArea/PreacticeArea";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};



const CarouselComponent = ({ practice_caption }) => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const { uri } = useContext(AppContext);
  useEffect(() => {
    let isMounted = true;

    axios
      .get(`${uri}assignments/`)
      .then((res) => {
        if (isMounted) {
          setAssignments(res.data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Failed to load data");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="py-5">
      <div className="w-full flex flex-col items-center justify-center mb-5">
        <p className="text-xl md:text-5xl font-bold">Practice Areas</p>
        <div
          dangerouslySetInnerHTML={{ __html: practice_caption }}
          className="text-sm text-center max-w-lg mt-5 px-10"
        />
      </div>

      <div>
        {loading ? (
          <CBSGCharLoader />
        ) : error ? (
          <p className="text-red-500 mt-3">{error}</p>
        ) : (
          <Carousel swipeable draggable responsive={responsive} infinite autoPlay>
            <PracticeArea/>
          </Carousel>
        )}
      </div>
    </div>
  );
};

CarouselComponent.propTypes = {
  practice_caption: PropTypes.string.isRequired,
};

export default CarouselComponent;
