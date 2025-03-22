import "aos/dist/aos.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppProvider";
import { ImagesSliderComponent } from "../Components/Banner/BannerNext";
import AboutSection from "../Components/Home/AboutSection";
import Blog from "../Components/Home/Blog";
import CarouselComponent from "../Components/Home/CarouselComponent";
import Count from "../Components/Home/Count";
import TestimonialComponent from "../Components/Home/TestomonialComponent";
import { RecentProject } from "../Components/RecentProject/RecentProject";
import CBSGCharLoader from "./CBSGCharLoader";


const Home = () => {
  const { uri } = useContext(AppContext);
  
  const [loading, setLoading] = useState(true);
  const [companyProfile, setCompanyProfile] = useState([{ data: [] }]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API using axios
        const response = await axios.get(`${uri}company-profile/`);
        setCompanyProfile(response.data[0]);
        // console.log(response.data[0]); // Set the fetched data to state
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
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <CBSGCharLoader />
        {/* <span className="loading loading-bars loading-lg"></span> */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const CountData = {
    contracts_international_agencies:
      companyProfile?.contracts_international_agencies,
    research_evaluation_assignments:
      companyProfile?.research_evaluation_assignments,
    organizational_capacity_assessment:
      companyProfile?.organizational_capacity_assessment,
    us_government_project: companyProfile?.us_government_project,
    years_of_experience: companyProfile?.years_of_experience,
  };
const AboutData ={
  about_text:companyProfile?.about_text,
  organization_development_image:companyProfile?.organization_development_image,
  organization_development_text:companyProfile?.organization_development_text,
  organization_development_title:companyProfile?.organization_development_title,
  research_evaluation_image:companyProfile?.research_evaluation_image,
  research_evaluation_text:companyProfile?.research_evaluation_text,
}
const practice_caption = companyProfile?.practice_caption;
  return (
    <div className=" mb-20">
      <ImagesSliderComponent />
      <div>
        <Count CountData={CountData}/>
      </div>
      <AboutSection AboutData={AboutData} />
      <Line />
     <div className="px-10">
     <CarouselComponent practice_caption={practice_caption}/>
     </div>
     <Line />
      <RecentProject />
      <Line />
      <TestimonialComponent />
     <section>
     <Blog />
     </section>
    </div>
  );
};
export default Home;
const Line = () => {
  return (
    <div className="w-full h-3 grid grid-cols-3 bg-black mt-10">
      <div className="bg-base_500"></div>
      <div className="bg-yellow-500"></div>
      <div className="bg-violet-950"></div>
    </div>
  );
};


