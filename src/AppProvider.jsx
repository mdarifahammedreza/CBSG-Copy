"use client";
import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const uri = "https://cbsg-bd.org/api/";
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bannerRes, assignmentRes] = await Promise.all([
          axios.get(`${uri}home-banners/`),
          axios.get(`${uri}assignments/`),
        ]);

        setImages(bannerRes.data.map((item) => item.image));
        setAssignments(assignmentRes.data);

        console.log("Fetched Assignments:", assignmentRes.data); // ✅ Better logging placement
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ uri, images, loading, assignments }}>
      {children}
    </AppContext.Provider>
  );
};

// PropTypes Validation
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
