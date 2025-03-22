import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AppContext } from "../../../AppProvider";
import Card from "../../../Components/ui/Card";

const ChildOrganizationDevelopment = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { uri, assignments } = useContext(AppContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (!id || !uri) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${uri}sub-service-areas/${id}/`);
        setData(response.data);
      } catch (err) {
        setError("Failed to load data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // FIXED

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div
      className="flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out transform border border-gray-300 mb-6"
      data-aos="fade-up"
    >
      {data?.images && (
        <img src={data.images} alt={data.name} data-aos="fade-left" className="max-w-xl h-96" />
      )}
      <h1 className="text-4xl font-bold text-center text-base_600" data-aos="fade-right">
        {data?.name}
      </h1>

      <div className="dynamic-content mt-5" data-aos="fade-left" dangerouslySetInnerHTML={{ __html: data?.description }} />

      <LoadAssignment assignments={assignments} type={data?.name} />
    </div>
  );
};

export default ChildOrganizationDevelopment;

export const LoadAssignment = ({ assignments, type }) => {
  if (!assignments || !type) return null;

  const filteredAssignments = assignments?.filter(
    (assignment) => assignment?.sub_service_area?.name === type
  );

  return (
    <div className="w-screen p-16 ">
      <h2 className="text-2xl font-semibold mt-6">Related assignments..</h2>
      <section className="flex flex-col md:flex-row md:flex-wrap  gap-5 justify-start items-start">
        {filteredAssignments.length === 0 && (<p className="pl-6">No Assignment Available</p>)}
        {filteredAssignments.map((assignment) => (
        <Link key={assignment.id} to={`/assignments/${assignment.id}`}>
          <Card
            title={assignment?.title || "No title"}
            description={assignment?.description}
            photo={assignment?.photo}
            logo={assignment?.company_logo}
            practiceArea={assignment?.practice_area?.name}
            subServiceArea={assignment?.sub_service_area?.name}
            serviceType={assignment?.service_type}
          />
        </Link>
      ))}</section>
      
    </div>
  );
};
