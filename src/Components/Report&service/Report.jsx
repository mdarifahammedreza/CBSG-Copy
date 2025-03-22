import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const ReportsPagination = () => {
  const [reports, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description : "",
    phone : "6",
  });

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const { uri } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${uri}reports/`)
      .then((res) => {
        setReports(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reports:", error);
        setError(error);
        setLoading(false);
      });
  }, [uri]);

  if (loading) {
    return (
      <div className="text-center">
        <CBSGCharLoader />
      </div>
    );
  }
  if (error) {
    return <p>Error fetching reports: {error.message}</p>;
  }

  const openModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", purpose: "" });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { ...formData, phone: "00", report: selectedReport.id };
    console.log(Data);
  
    toast.promise(
      axios.post(`${uri}request-forms/`, Data),
      {
        pending: "Submitting request...",
        success: "Your request has been submitted for approval! 🎉",
        error: "Failed to submit request. ❌",
      }
    ).then(() => closeModal())
    .catch((error) => console.error("Error:", error));
  };
  

  return (
    <div className="p-6 bg-sky-50 shadow-lg rounded-lg max-w-7xl mx-auto min-h-[80vh]">
      <h2 className="text-xl font-bold mb-4 text-center">Reports</h2>
      <ul>
        {currentReports.map((report, index) => (
          <li
            key={index}
            className="border-b py-2 gap-5 flex  sm:flex-row justify-between items-center hover:bg-slate-200 px-2"
          >
            <span className="text-3xl">
              <FaFilePdf />
            </span>
            <div className="flex  sm:flex-row justify-between items-center w-full">
              <div className="text-center ">
                <p className="font-semibold text-sm ">{report.title}</p>
                <div
                  className="text-xs sm:text-xs text-gray-600"
                  dangerouslySetInnerHTML={{ __html: report.description }}
                />
              </div>
              <Toaster/>
              <button
                onClick={() => openModal(report)}
                className="bg-blue-500 text-white px-4 py-2 mt-2 sm:mt-0 rounded-lg hover:bg-blue-600"
              >
                Read
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4 flex-wrap gap-2">
        {[...Array(Math.ceil(reports.length / reportsPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === number + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {number + 1}
            </button>
          )
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-3 text-center">
              Request Access to Read
            </h2>
            <p className="mb-2 text-gray-600 text-center">
              Submit your details to request access for{" "}
              <strong>{selectedReport?.title}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded outline-none focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded outline-none focus:ring focus:ring-blue-300"
                required
              />
              <textarea
                name="description"
                placeholder="Purpose of reading this report"
                value={formData.description }
                onChange={handleInputChange}
                className="w-full border p-2 rounded outline-none focus:ring focus:ring-blue-300"
                required
              />
              <div className="flex  sm:flex-row justify-between gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPagination;
