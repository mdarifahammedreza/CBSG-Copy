//Ook ok ok 

import PropTypes from 'prop-types';
import { cn } from "../../../lib/utils";
const Card = ({ title, description, photo, className }) => {
  console.log(title, photo)
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-white   border border-gray-300 justify-between flex flex-col space-y-4 h-[18rem] md:max-w-[20rem] min-w-[14rem]",

        className
      )}
    >
      <div className="flex items-center justify-center"><img src={photo} alt={title} className="rounded-md h-[10rem] w-fit" /></div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600  mb-2  border-b border-gray-300">
          {title}
        </div>

        <div
  dangerouslySetInnerHTML={{
    __html: description?.length > 70 ? description.substring(0, 70) + "..." : description,
  }}
  className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
/>
      </div>
    </div>
  );
};
export default Card;
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string,
  className: PropTypes.string,
};