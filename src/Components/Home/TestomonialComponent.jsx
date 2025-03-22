"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";
import { AnimatedTestimonials } from "../ui/animated-testimonials"; // Ensure this import is correct

// Function to fetch testimonials from the API
const fetchTestimonials = async (uri) => {
  try {
    const response = await axios.get(uri);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};

const TestimonialComponent = () => {
  const [testimonials, setTestimonials] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to handle errors
  const { uri } = useContext(AppContext);

  // Fetch data once the component mounts
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTestimonials(`${uri}testimonials/`); // Fetch data using the URI
        setTestimonials(data); // Set the fetched data
      } catch (error) {
        setError("Failed to fetch testimonials. Please try again later."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if there's an error
      }
    };

    getData();
  }, [uri]); // Re-fetch if the URI changes

  // Show loader while the testimonials are being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CBSGCharLoader />
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  // Show a message if no testimonials are available
  if (testimonials.length === 0 && !loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No testimonials available.</p>
      </div>
    );
  }

  // Once data is fetched, show the testimonials
  return (
    <div className="w-full h-full pt-20">
      <h2 className="pl-8 mx-auto text-xl md:text-5xl font-bold font-sans flex justify-center items-center">
        Testimonials
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default TestimonialComponent;