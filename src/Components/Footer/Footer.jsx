import { Link } from "react-router";
import Marquee from "react-fast-marquee";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Line from "../Line/Line";
import { div } from "framer-motion/client";
const Footer = () => {
  return (
  <div className="">
    <Line/>
  <footer className="footer footer-center bg-gradient-to-tr from-base_600 to-indigo-900 p-10 text-white">
    <Line/>
  <aside>
  <Link href="/">
  <img
    src="https://i.ibb.co.com/pf3YyhR/logo.png"
    alt="CBSG LOGO"
    className="px-1"
  />
</Link>
<h1 className="font-semibold text-2xl">Capacity Building Service Group</h1>
<Marquee  ><p className="text-xs">Supporting Greater Performance</p></Marquee>
 <a href="CBSG-profile.pdf" download="CBSG-profile.pdf">
  <button className="text-white bg-[#115096] px-5 py-3 opacity-50 hover:opacity-100 rounded-b-lg">
    Download Profile
  </button>
</a>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 text-white text-2xl">
      <a>
      <FaFacebookSquare />
      </a>
      <a>
      <AiFillYoutube />
      </a>
      <a>
      <FaLinkedin/>
      </a>
    </div>
  </nav>
</footer>
  </div>
   
  );
};  
export default Footer;