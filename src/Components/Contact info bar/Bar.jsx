import { TbPhoneCall } from "react-icons/tb";
import { TbMailFilled } from "react-icons/tb";
import { GrFormLocation } from "react-icons/gr";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Bar=()=>{
    return(
        <div className="bar bg-violet-950 text-white p-1 px-10 grid-cols-4 gap-4 hidden md:grid text-sm">
           <div className="flex justify-center items-center"> 
           <TbPhoneCall /> <p>+880172931XXX</p>
           </div>
           <div className="flex justify-center items-center gap-1"> 
           <TbMailFilled /> <p>example@gmail.com</p>
           </div>
           <div className="flex justify-center items-center grid-span-2"> 
           <GrFormLocation /> <p>123 Maple Lane,Springfield, IL 62704,United States</p>
           </div>
           <div className="flex justify-center items-center space-x-4"> 
           <FaSquareFacebook /> <IoLogoLinkedin /> <FaSquareWhatsapp />
           </div>

        </div>
    )
}
export default Bar;
