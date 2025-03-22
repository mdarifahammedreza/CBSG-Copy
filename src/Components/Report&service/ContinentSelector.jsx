import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MdAssignment } from 'react-icons/md';
import { AppContext } from '../../AppProvider';

export default function ContinentSelector() {
  const [countryData, setCountryData] = useState({});
  const { uri } = useContext(AppContext);
  
  useEffect(() => {
    axios.get(`${uri}work-locations/`)
      .then(response => {
        const apiData = response.data.reduce((acc, item) => {
          if (!acc[item.subcontinent]) acc[item.subcontinent] = {};
          if (!acc[item.subcontinent][item.country]) acc[item.subcontinent][item.country] = [];
          acc[item.subcontinent][item.country].push(item.work_description);
          return acc;
        }, {});
        
        setCountryData(apiData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [uri]);

  const continents = Object.keys(countryData);
  const [selectedContinent, setSelectedContinent] = useState(continents[0] || "");
  
  useEffect(() => {
    if (continents.length > 0 && !selectedContinent) {
      setSelectedContinent(continents[0]);
    }
  }, [continents, selectedContinent]);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  return (
    <div className="bg-base_900 bg-opacity-10 px-20 py-4">
      <div>
        <div className="gap-2">
          {continents.map((continent) => (
            <button
              key={continent}
              className={`py-2 px-4 rounded font-medium ${
                selectedContinent === continent
                  ? 'bg-blue-500 text-white'
                  : 'bg-white hover:bg-base_300 hover:text-white'
              }`}
              onClick={() => handleContinentClick(continent)}
            >
              {continent}
            </button>
          ))}
        </div>
      </div>
      <div>
        {selectedContinent && countryData[selectedContinent] && (
          <div>
            <h3 className="font-bold text-lg mt-4 border-b-2 border-black">Consultancy Work in {selectedContinent}:</h3>
            {Object.keys(countryData[selectedContinent]).map((country, index) => (
              <div key={index} className="mt-2">
                <h4 className="font-semibold text-md">{country}</h4>
                <ul>
                  {countryData[selectedContinent][country].map((item, idx) => (
                    <li key={idx} className="py-1 flex items-start gap-2 text-left text-xs">
                      <span className='px-2'><MdAssignment /></span>
                      <div dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
