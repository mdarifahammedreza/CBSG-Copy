import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../AppProvider";
import CBSGCharLoader from "../Page/CBSGCharLoader";

const AssignmentPage = () => {
  const { uri } = useContext(AppContext);
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${uri}assignments/${id}/`)
      .then((response) => {
        setAssignment(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching assignment:", error);
        setError("Failed to load assignment.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <CBSGCharLoader />;
  }

  if (error || !assignment) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold text-lg">
        {error || "Assignment not found."}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-xl p-8 sm:p-12 lg:p-14 transition-all duration-300 hover:shadow-2xl">
        {assignment.photo ? (
          <img
            src={assignment.photo}
            alt={assignment.title}
            className="w-full h-80 sm:h-96 object-cover rounded-lg mb-6 shadow-md"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        {assignment.company_logo && (
          <div className="w-24 h-24 mb-6 mx-auto">
            <img
              src={assignment.company_logo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          {assignment.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm sm:text-base">
          <span className="bg-gray-200 px-4 py-2 rounded-md">
            <strong>Service Area:</strong> {assignment.sub_service_area?.name}
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-md">
            <strong>Practice Area:</strong> {assignment.practice_area?.name}
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-md">
            <strong>Service Type:</strong> {assignment.service_type}
          </span>
        </div>

        <div className="mt-6 text-center text-gray-700 font-medium">
          <span className="bg-gray-50 px-4 py-2 rounded-md shadow-sm">Client: {assignment.select_client}</span>
        </div>

        <div
          className="mt-6 text-gray-700 leading-relaxed text-justify dynamic-content"
          dangerouslySetInnerHTML={{ __html: assignment.description }}
        />
      </div>
    </div>
  );
};

export default AssignmentPage;