import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { ImMenu } from "react-icons/im";
import { Link, useLocation } from "react-router";
import { cn } from "../../../lib/utils";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";

const Header = () => {
  return (
    <header className="w-full pt-2">
      <Navbar className="hidden lg:block mb-10 shadow-md py-3 border border-gray-300 rounded" />
      <Phonenav className="lg:hidden px-3 " />
    </header>
  );
};

export default Header;

function Navbar({ className }) {
  const location = useLocation();
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const activeClass = "border-b-2 border-blue-500 text-blue-500 font-semibold";

  return (
    <div className={cn("relative inset-x-0 z-50 bg-white ", className)}>
      <Menu setActive={setActive}>
        <HoveredLink to="/" className={isActive("/") ? activeClass : ""}>
          Home
        </HoveredLink>
        <HoveredLink
          to="/About"
          className={isActive("/About") ? activeClass : ""}>
          About us
        </HoveredLink>

        {/* Services Menu */}
        <MenuItem setActive={setActive} to="Services" active={active} item="Our services">
          <div className="flex flex-col space-y-2 ">
            <HoveredLink
              to="/Services/Organization-Development"
              className={
                isActive("/Services/Organization-Development")
                  ? activeClass
                  : ""
              }>
              Organization Development
            </HoveredLink>
            <HoveredLink
              to="/Services/Research&Evaluation"
              className={
                isActive("/Services/Research&Evaluation") ? activeClass : ""
              }>
              Research and Evaluation
            </HoveredLink>
          </div>
        </MenuItem>

        <HoveredLink
          to="/practice-areas"
          className={isActive("/practice-areas") ? activeClass : ""}>
          Practice areas
        </HoveredLink>
        <HoveredLink
          to="/team"
          className={isActive("/team") ? activeClass : ""}>
          Our team
        </HoveredLink>
        <HoveredLink
          to="/work&reach"
          className={isActive("/work&reach") ? activeClass : ""}>
          Our work and reach
        </HoveredLink>
        <HoveredLink
          to="/contacts"
          className={isActive("/contacts") ? activeClass : ""}>
          Contacts
        </HoveredLink>
      </Menu>
    </div>
  );
}

const Phonenav = () => {
  return (
    <div className="block lg:hidden bg-white shadow-xl mb-10  border border-gray-300 rounded">
      <div className="navbar  z-50 w-full">
        <div className="flex justify-between items-center w-full  py-2">
          <div className="mr-2 inline-flex max-w-[19.1rem] md:max-w-[21.6rem]">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/pf3YyhR/logo.png"
                alt="CBSG LOGO"
                className=" w-16  px-1"
              />
            </Link>
            <div className="flex flex-col  justify-between text-base_600 hover:text-base_900">
              <h1 className="font-semibold text-base  md:text-lg ">
                Capacity Building Service Group
              </h1>
              <Marquee
                gradient={true}
                gradientWidth={15}
                gradientColor={"#ffffff"}>
                <p className="text-xs">Supporting Greater Performance</p>
              </Marquee>
            </div>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end z-[100]">
            <div
              tabIndex={0}
              role="button"
              className="text-base_600 font-extrabold text-xl md:text-2xl cursor-pointer px-3">
              <ImMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-56 p-3 shadow-lg rounded-lg overflow-y-auto h-auto whitespace-normal font-semibold text-base_600">
              <li>
                <Link to="/" className="w-full">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="w-full">
                  About us
                </Link>
              </li>
              <li>
                <p className="font-semibold">Our services</p>
                <ul className="pl-4">
                  <li>
                    <Link to="/Services/Organization-Development">
                      Organization Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/Services/Research&Evaluation">
                      Research and Evaluation
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/practice-areas">Practice areas</Link>
              </li>
              <li>
                <Link to="/team">Our team</Link>
              </li>
              <li>
                <Link to="/work&reach">Our work and reach</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
