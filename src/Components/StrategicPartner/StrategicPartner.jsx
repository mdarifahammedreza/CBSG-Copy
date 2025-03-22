import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const StrategicPartner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { uri } = useContext(AppContext);

  useEffect(() => {

    const fetchData = async () => {
      try {
        // Fetch data from the API using axios
        const response = await axios.get(`${uri}strategic-partners/`);
        setPartners(response.data);
        // console.log(response.data); // Set the fetched data to state
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
        setLoading(false); // Stop loading regardless of success or failure
      }
    };
    fetchData();



    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      // once: true, // Whether animation should happen only once
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <CBSGCharLoader />
      
      </div>
    );
  }
  if(error){
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <h1 className="text-2xl text-red-500">{error}</h1>
      </div>
    );
  }


  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-16 justify-items-center mx-auto"
      data-aos="fade-up" // Adding animation to the entire grid
    >
      {partners.map((partner, idx) => (
        <Partner
          key={partner.id}
          title={partner.company_name}
          img={partner.logo}
          link={partner.company_website_link}
          animation="zoom-in" // Custom animation for each card
        />
      ))}
    </div>
  );
};

const Partner = ({ title, img, link, animation }) => {
  return (
    <Link to={link}>
      <div
        className="relative min-w-32 min-h-32 sm:min-w-44 sm:min-h-44 max-w-56 max-h-56 bg-gradient-to-t border border-gray-300 shadow-xl flex items-center justify-center group transition-all ease-in-out duration-500 hover:translate-y-2 hover:scale-110 hover:bg-gradient-to-b hover:from-base_600 hover:to-base_900"
        data-aos={animation} // Individual animation for each card
      >
        <h1 className="absolute opacity-0 group-hover:opacity-100 font-bold text-white text-sm sm:text-base transition-all duration-500">
          {title}
        </h1>
        <img
          src={img}
          alt={title}
          className="p-2 h-16 sm:h-24 group-hover:opacity-0 transition-all duration-500"
        />
      </div>
    </Link>
  );
};

export default StrategicPartner;
