// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../AppProvider";



// // export const filterAssignments = async(assignments, { practiceArea, subServiceArea, serviceType, clientId }) =>
// //     assignments.filter(assignment => {
// //       const matchPracticeArea = practiceArea ? assignment.practice_area.name === practiceArea : false;
// //       const matchSubServiceArea = subServiceArea ? assignment.sub_service_area.name === subServiceArea : false;
// //       const matchServiceType = serviceType ? assignment.service_type === serviceType : false;
// //       const matchClient = clientId ? assignment.select_client === clientId : false;
  
// //       return matchPracticeArea || matchSubServiceArea || matchServiceType || matchClient;
// //     });

// // const Assignment = () => {
//     const { assignments } = useContext(AppContext);
//     const { id } = useParams();
//     const assignment = assignments.find((assignment) => assignment.id === parseInt(id));

//     if (!assignment) {
//         return <div className="text-center text-red-500">Assignment not found.</div>;
//     }

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//             <h1 className="text-3xl font-bold text-center text-blue-600">{assignment.title}</h1>
//             <div className="flex justify-center my-4">
//                 {assignment.photo && <img src={assignment.photo} alt="Assignment" className="w-64 h-64 object-cover rounded-lg" />}
//             </div>
//             <div className="text-lg text-gray-700 mt-4" dangerouslySetInnerHTML={{ __html: assignment.description }} />
            
//             <div className="mt-6">
//                 <h2 className="text-2xl font-semibold">Details</h2>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{assignment.practice_area.name}</span>
//                     <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{assignment.sub_service_area.name}</span>
//                     <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{assignment.service_type}</span>
//                 </div>
//             </div>
            
//             {assignment.company_logo && (
//                 <div className="flex justify-center mt-6">
//                     <img src={assignment.company_logo} alt="Company Logo" className="w-24 h-24 object-contain" />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Assignment;
