import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

import { AppContext } from "../../AppProvider";
import Card from "../ui/Card";

const PracticeArea = () => {
  const [loading, setLoading] = useState(true);
  const { uri } = useContext(AppContext);
  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${uri}practice-areas/`)
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
   
      <>
        {cardData.map((card) => {
          

        

          return <Link key={card.id} to={`/practice-areas/${card.id}`}>
          <Card
            title={card.name}
            description={card.introduction}
            id={card.id}
            
            photo={card.image}
            logo= {card.logo}
            
          />
          </Link>; // Explicit return
        })}
   
   </>
  );
};

export default PracticeArea;
