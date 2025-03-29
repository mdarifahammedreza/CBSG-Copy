import PropTypes from 'prop-types';
import { useState } from "react";
import { TbSettingsSearch } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const AboutSection = ({ AboutData }) => {
  const [loading, setLoading] = useState(true);

  const {
    about_text,
    organization_development_image,
    organization_development_text,
    research_evaluation_image,
    research_evaluation_text,
  } = AboutData;

  if (AboutData === undefined) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <CBSGCharLoader />
      </div>
    );
  }

  return (
    <div
      className="mx-auto px-4 border-2 my-20 p-10 border-base_500 md:mx-11 lg:mx-24 mb-4 text-base_600 bg-white rounded font-medium"
      data-aos="zoom-in"
    >
      <p
        className="font-extrabold pb-2 rounded-md w-full text-base_600"
        data-aos="fade-right"
      >
        WHAT WE DO
      </p>

      <div
        dangerouslySetInnerHTML={{ __html: about_text }}
        className="text-base font-normal text-blue-950"
        data-aos="fade-right"
      />

      <div className="grid grid-cols-1 gap-2 mt-5">
        <div className="p-2 flex flex-col-reverse md:flex-row items-center md:justify-around">
          <div className="md:w-1/2">
            <p
              className="text-sm font-semibold min-h-10 text-right bg-gradient-to-tr from-base_500 to-base_900 text-white flex items-center justify-end px-2 mb-2 gap-3"
              data-aos="fade-left"
            >
              <span className="text-xl">
                {" "}
                <VscOrganization />
              </span>
              ORGANIZATIONAL AND INSTITUTIONAL DEVELOPMENT (OD/ID)
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: organization_development_text,
              }}
              className="text-base font-sans font-normal text-blue-950 text-justify"
              data-aos="fade-left"
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              src={organization_development_image}
              alt="Organizational Development"
              className="w-1/2 relative left-32"
            />
          </div>
        </div>
        <div className="p-2 flex flex-col md:flex-row items-center md:justify-around">
          <div className="md:w-1/2" data-aos="fade-right">
            <img
              src={research_evaluation_image}
              alt="Organizational Development"
              className="w-1/2 relative -right-32"
            />
          </div>
          <div className="md:w-1/2">
            <p
              className="text-base font-semibold min-h-10 bg-gradient-to-tr from-base_900 to-base_500 text-white flex items-center justify-start px-2 mb-2 gap-3"
              data-aos="fade-right"
            >
              <span className="text-xl">
                <TbSettingsSearch />
              </span>
              RESEARCH AND EVALUATION
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: research_evaluation_text,
              }}
              className="text-base font-sans font-normal text-blue-950 text-justify"
              data-aos="fade-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
AboutSection.propTypes = {
  AboutData: PropTypes.shape({
    about_text: PropTypes.string,
    organization_development_image: PropTypes.string,
    organization_development_text: PropTypes.string,
    organization_development_title: PropTypes.string,
    research_evaluation_image: PropTypes.string,
    research_evaluation_text: PropTypes.string,
  }).isRequired,
};