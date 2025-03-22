"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";
import { Card, Carousel } from "../ui/apple-cards-carousel";

export function RecentProject() {
  const { uri } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchurl = async (uri) => {
    await axios
      .get(uri)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    AOS.init({
      duration: 1000,
    });
    fetchurl(`${uri}recent-projects/`);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <CBSGCharLoader />
      </div>
    );
  }

  const cards = data.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <h2
        className="pl-8 mx-auto text-xl md:text-5xl font-bold font-sans flex justify-center items-center pt-5"
        data-aos="ease-in"
      >
        Some Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}