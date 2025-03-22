import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AppContext } from "../AppProvider";
import Card from "./ui/Card";

const AssigmentFilter = () => {
  const { assignments } = useContext(AppContext);
  const [subServiceAreas, setSubServiceAreas] = useState([]);
  const [practiceAreas, setPracticeAreas] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [selectedPracticeArea, setSelectedPracticeArea] = useState("");
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract unique sub-service and practice areas
  useEffect(() => {
    if (assignments.length > 0) {
      setSubServiceAreas([
        ...new Set(
          assignments.map((item) => item.sub_service_area?.name).filter(Boolean)
        ),
      ]);
      setPracticeAreas([
        ...new Set(
          assignments.map((item) => item.practice_area?.name).filter(Boolean)
        ),
      ]);
    }
  }, [assignments]);

  // Filter assignments based on selected values
  useEffect(() => {
    if (assignments.length > 0) {
      const filtered = assignments.filter((item) => {
        return (
          (!selectedService || item?.service_type === selectedService) &&
          (!selectedSubService || item.sub_service_area?.name === selectedSubService) &&
          (!selectedPracticeArea || item.practice_area?.name === selectedPracticeArea)
        );
      });
      console.log(filtered);
      setFilteredAssignments(filtered);
      setLoading(false);
      console.log("x",filteredAssignments);
    }
  }, [assignments, selectedService, selectedSubService, selectedPracticeArea]);

  // Check if any filter is applied
  const isFiltered =
    selectedService || selectedSubService || selectedPracticeArea;
console.log("y",filteredAssignments);
  return (
    <div className="z-50">
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
        {/* Main Service Dropdown */}
        <div>
          <select
            className="border border-gray-300 p-2 rounded-md"
            onChange={(ev) => setSelectedService(ev.target.value)}
          >
            <option value="">Service</option>
            <option value="OD">Organization Development</option>
            <option value="RE">Research and Evaluation</option>
          </select>
        </div>

        {/* Sub-Service Dropdown */}
        <div>
          {subServiceAreas.length > 0 && (
            <select
              className="border border-gray-300 p-2 rounded-md"
              onChange={(ev) => setSelectedSubService(ev.target.value)}
            >
              <option value="">Sub-Service</option>
              {subServiceAreas.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Practice Area Dropdown */}
        <div>
          {practiceAreas.length > 0 && (
            <select
              className="border border-gray-300 p-2 rounded-md"
              onChange={(ev) => setSelectedPracticeArea(ev.target.value)}
            >
              <option value="">Practice Area</option>
              {practiceAreas.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p>Loading assignments...</p>}

      {/* Render Filtered Assignments */}
      {isFiltered && !loading && (
        <div className="mt-4">
          {filteredAssignments?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAssignments.map((assignment, index) => (
                <Link key={assignment.id || index} to={`/assignments/${assignment.id}`}>
                  <Card
                    title={assignment?.title}
                    description={assignment?.description}
                    id={assignment?.id}
                    photo={assignment?.photo}
                    logo={assignment?.company_logo}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p>No assignments found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AssigmentFilter;
