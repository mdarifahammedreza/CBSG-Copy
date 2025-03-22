import React, { useContext, useState, useEffect } from "react"; 
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { AppContext } from "../../AppProvider";
import axios from "axios"; 
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const Time = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemHeight = 60; 
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const totalItems = 15;
  const { uri } = useContext(AppContext);

  useEffect(() => {
    axios.get(`${uri}year-ranges/`)
      .then((response) => {
        console.log(response.data);
        setContent(response.data); // Assuming response.data is the content
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if an error occurs
      });

    const handleScroll = (e) => {
      const scrollY = e.target.scrollTop;
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) return <CBSGCharLoader />; // Display loader while data is loading

  const getOpacity = (index) => {
    const middlePosition = scrollPosition + window.innerHeight / 2;
    const itemPosition = index * itemHeight + itemHeight / 2;

    const distanceFromMiddle = Math.abs(middlePosition - itemPosition);
    const maxDistance = window.innerHeight / 2;

    const opacity = Math.max(0, 1 - distanceFromMiddle / maxDistance);
    return opacity;
  };

  return (
    <div className="mt-5">
      <StickyScroll content={content} />
    </div>
  );
};

export default Time;
