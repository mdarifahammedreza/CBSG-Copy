import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TbSettingsSearch } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import { AppContext } from "../AppProvider";

const Services = () => {
  const { images, uri } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  // Fetch Services

  useEffect(() => {
    axios
      .get(`${uri}service-intros/`)
      .then((res) => {
        // console.log(res.data);
        setServices(res.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        return [error, { error: true }];
      });
  }, []);

  // console.log(services);

  return (
    <div className="mt-5 px-5 md:px-16">
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: services.intro_text }}
          className="text-base font-normal text-blue-950  dynamic-content"
        />

        <div className="flex flex-col  md:flex-row  justify-between mt-5 gap-5 ">
          <div className="w-full">
            <p
              className="text-md w-full font-semibold min-h-10 text-right bg-gradient-to-tr from-base_500 to-base_900 text-white flex  items-center  px-2 mb-2 gap-3"
              
            >
              <span className="text-xl">
                {" "}
                <VscOrganization />
              </span>
              ORGANIZATIONAL AND INSTITUTIONAL DEVELOPMENT (OD/ID)
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: services.organization_development,
              }}
              className="text-base font-normal text-blue-950 dynamic-content"
            />
          </div>
          <div>
            <img className=" max-w-md md:max-w-xl lg:max-w-2xl h-fit" src={services.organization_development_image} alt={services.intro_text} />
          </div>
        </div>
        <div className="flex flex-col  md:flex-row-reverse  justify-between mt-5 gap-5 ">
          <div className="w-full ">
            <p
              className="text-md    font-semibold min-h-10 bg-gradient-to-tr from-base_900 to-base_500 text-white flex items-center justify-start px-2 mb-2 gap-3"
              
            >
              <span className="text-xl">
                {" "}
                 <TbSettingsSearch />
              </span>
              RESEARCH AND EVALUATION (RE)
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: services.research_evaluation,
              }}
              className="text-base font-normal text-blue-950 dynamic-content"
            />
          </div>
          <div>
            <img className="max-w-md md:max-w-xl lg:max-w-2xl h-fit" src={services.research_evaluation_image} alt={services.intro_text} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
