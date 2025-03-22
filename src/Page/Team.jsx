import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { AppContext } from '../AppProvider';
import { BackgroundBeams } from "../Components/ui/background-beams";
import UITeam from "../Components/ui/UiTeam";
import CBSGCharLoader from './CBSGCharLoader';

const Team = () => {
  const [display, SetDisplay] = useState("Core Team");
  const [bgColor, SetBgColor] = useState("bg-white text-base_600 shadow-md shadow-base_300  border-t-8 border-gray-300 mb-5 rounded-t-lg");
  const { uri } = useContext(AppContext);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const bgColors = {
    "Core Team": "bg-base_300",
    "Technical Team": "bg-teal-300", 
    "International Consultant": "bg-violet-300", 
  };

 useEffect(() => {
    axios.get(`${uri}team-members/`)
    .then((res) => {
      // console.log(res.data);
      setEmployees(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
      setError(error)
    });



    AOS.init({
      duration: 1000, // Animation duration
      offset: 100,    // Offset from viewport
      once: false,     // Animation occurs only once
    });
  }, []);
  if(loading) 
    return <CBSGCharLoader/>
  if(error)
    return <p className="text-red-500">Error: {error}</p>

  const technicalExperts = employees?.filter(member => member?.category === "Technical Expert");
  const Core_Team = employees?.filter(member => member?.category === "Core Team");
  const International_Consultant = employees?.filter(member => member?.category === "International Consultant");
  return (
   <>
   <div className="relative mt-5 mb-5">
   <section className="absolute  left-24  justify-start items-center pl-5 mt-10 my-10 hidden md:flex">
      <button data-aos="ease-in-out"
        onClick={() => SetDisplay("Core Team")}
        className={`p-3  rounded-tl-md font-semibold  ${display === "Core Team" ? bgColor : "bg-gray-300"}`}
      >
        Core Team
      </button>
      <button data-aos="ease-in-out"
        onClick={() => SetDisplay("Technical Team")}
        className={`p-3 font-semibold   ${display === "Technical Team" ? bgColor : "bg-gray-300"}  border-black`}
      >
        Technical Team
      </button>
      <button data-aos="ease-in-out"
        onClick={() => SetDisplay("International Consultant")}
        className={`p-3 rounded-tr-md font-semibold  ${display === "International Consultant" ? bgColor : "bg-gray-300"}`}
      >
        International Consultant
      </button>
    </section>
    <div className={`hidden md:block mx-5 rounded pt-10 `}>
      {display === "Core Team" && <div  className="max-w-[90%] flex flex-col justify-center items-center"><p data-aos="zoom-out" className="bg-white p-2 mt-16 shadow-md shadow-base_300 font-semibold text-blue-800 ">Core team</p> <UITeam cards={Core_Team} /></div>}
      {display === "Technical Team" && < div className="max-w-[90%] flex flex-col justify-center items-center"><p  data-aos="zoom-out" className="bg-white p-2 mt-16 shadow-md shadow-base_300 font-semibold text-blue-800">Technical Team</p> <UITeam cards={technicalExperts} /></div>}
      {display === "International Consultant" && <div className="max-w-[90%] flex flex-col justify-center items-center"><p data-aos="zoom-out"  className="bg-white p-2 mt-16 shadow-md shadow-base_300 font-semibold text-blue-800">International Consultant</p> <UITeam cards={International_Consultant} /></div>}
    </div>
   </div>
    <div className="mt-8 block md:hidden" >
    <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
        <p className="text-white mt-10 px-10 py-1 pl-5 rounded text-xl  max-w-5xl w-full border bg-teal-700 text-left">Core Team</p>
        <BackgroundBeams/>
        <div className="max-w-[90%] z-[30] ">
        <UITeam cards={Core_Team} />
        </div>
    </div>
    <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
        <p className="text-white mt-10 px-10 py-1 pl-5 rounded text-xl  max-w-5xl w-full shadow-md shadow-Coral_800 bg-gradient-to-r  from-Coral_800 to-Coral_900   transition ease-in-out delay-150 ">Technical Expert</p>
      
      <div className="max-w-[90%] z-[30] ">
        <UITeam cards={technicalExperts} />
      </div>
    </div>
    <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-full w-full">
        <p className="text-white mt-10 px-10 py-1 pl-5 rounded text-xl  max-w-5xl w-full shadow-md shadow-Golden_800 bg-gradient-to-r  from-Golden_800 to-Golden_900  transition ease-in-out delay-150 ">International Consultant</p>
        
      <div className="max-w-[90%] z-[30] ">
        <UITeam cards={International_Consultant} />
      </div>
    </div>
    </div>
   </>
  );
}
export default Team;










