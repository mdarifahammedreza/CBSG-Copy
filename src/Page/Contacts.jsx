import { MdEmail, MdLocationPin, MdPhone, MdWeb } from "react-icons/md";

const Contacts = () => {
  const openGoogleMaps = (location) => {
    const urls = {
      bangladesh: "https://www.google.com/maps/place/Lalmatia,+Dhaka+1207,+Bangladesh/",
      canada: "https://www.google.com/maps/place/104+Crockford+Blvd,+Scarborough,+ON+M1R+3C3,+Canada/",
    };
    window.open(urls[location], "_blank");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 ">
      <section className="w-full max-w-6xl bg-slate-100 rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif font-semibold text-3xl border-b-2 border-gray-300 text-gray-700 pb-2">
            Contact Person
          </p>
          <img
            className="w-40 h-40 lg:w-48 lg:h-48 rounded-full shadow-md mt-4 object-cover"
            src="https://cbsg-bd.org/media/image1.jpg"
            alt="Photo chairman-CBSG"
          />
          <div className="mt-4">
            <p className="font-serif font-bold text-2xl text-gray-700">Joyanta Roy</p>
            <p className="font-serif font-medium text-lg text-gray-600">
              Chairman / President & CEO
            </p>
            <p className="font-serif font-medium text-md text-gray-500">
              Capacity Building Service Group (CBSG)
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-5 bg-slate-200 rounded-lg shadow cursor-pointer hover:bg-slate-300"
            onClick={() => openGoogleMaps("bangladesh")}
          >
            <p className="text-lg font-medium text-gray-700 flex items-center gap-2 justify-center">
              <MdLocationPin /> Bangladesh Location:
            </p>
            <p className="text-center text-gray-600">
              4/2 Block - B, Lalmatia, Dhaka<br /> Dhaka 1207, Bangladesh
            </p>
          </div>
          <div
            className="p-5 bg-slate-200 rounded-lg shadow cursor-pointer hover:bg-slate-300"
            onClick={() => openGoogleMaps("canada")}
          >
            <p className="text-lg font-medium text-gray-700 flex items-center gap-2 justify-center">
              <MdLocationPin /> Canada Location:
            </p>
            <p className="text-center text-gray-600">
              104 Crockford Blvd, Scarborough,<br /> Ontario M1R 3C3, Canada
            </p>
          </div>
        </div>

        <div className="text-center mt-6 space-y-3  text-sm md:text-base">
          <p className=" font-medium text-gray-700 flex items-center justify-center gap-2 ">
            <MdEmail /> Email:
            <a
              href="mailto:joyanta.roy@cbsg-canada.ca"
              className="text-gray-600 hover:underline text-sm md:text-base"
            >
              joyanta.roy@cbsg-canada.ca
            </a>,
            <a href="mailto:joyanta@cbsg-bd.org" className="text-gray-600 hover:underline  text-sm md:text-base">
              joyanta@cbsg-bd.org
            </a>
          </p>
          <p className=" font-medium text-gray-700 flex items-center justify-center gap-2">
            <MdPhone /> Cell:
            <span className="text-gray-600  text-sm md:text-base">+1 (416)-206-5672</span>,
            <span className="text-gray-600  text-sm md:text-base">+880 1737-345361</span>
          </p>
          <p className=" font-medium text-gray-700 flex items-center justify-center gap-2">
            <MdWeb /> Website:
            <a
              href="http://www.cbsg-bd.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              www.cbsg-bd.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contacts;