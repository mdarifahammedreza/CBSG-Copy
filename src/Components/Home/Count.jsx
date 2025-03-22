//Done
//Props Validation Done
import React from 'react';

import PropTypes from 'prop-types';
import { FaBriefcase, FaFlag, FaRegNewspaper } from 'react-icons/fa'; // Replaced GiAmericanFlag with FaFlag
import { MdBusinessCenter } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
const Count = ({CountData}) => {



  return (
    <div className="flex flex-wrap gap-6 md:gap-0 justify-evenly items-center bg-gradient-to-tr from-base_600 to-indigo-900 p-6 text-white text-center relative rounded-b border-b border-l border-r border-gray-300">
      <CountItem icon={<MdBusinessCenter />} number={CountData?.contracts_international_agencies} label="Contracts for International Agencies" />
      <CountItem icon={<FaFlag />} number={CountData?.us_government_project} label="US Government Projects" />
      <CountItem icon={<RiTeamLine />} number={CountData?.organizational_capacity_assessment} label="Organizational Capacity Assessment" />
      <CountItem icon={<FaRegNewspaper />} number={CountData?.research_evaluation_assignments} label="Research and Evaluation Assignments" />
      <CountItem icon={<FaBriefcase />} number={CountData?.years_of_experience
} label="Years of Experience" />

      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 ">
      <a href="CBSG-profile.pdf" download="CBSG-profile.pdf">
  <button className="text-white bg-[#115096] px-5 py-3 opacity-50 hover:opacity-100 rounded-b-lg">
    Download Profile
  </button>
</a>

</div>
    </div>
  );
};

const CountItem = ({ icon, number, label }) => (
  <div className="flex flex-col justify-center items-center text-lg space-y-1">
    <div className="text-3xl opacity-80">{icon}</div>
    <p className="text-2xl font-medium">{number}+</p>
    <p className="text-sm opacity-90 text-center">{label}</p>
  </div>
);

export default Count;

Count.propTypes = {
  CountData: PropTypes.object,
};

CountItem.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  number: PropTypes.number,
};