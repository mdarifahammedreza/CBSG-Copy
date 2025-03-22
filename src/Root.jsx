import { Outlet } from 'react-router'; // Correct import for React Router
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Root = () => {
  const HeaderData = {
    firstName: import.meta.env.VITE_FIRST_NAME,
    lastName: import.meta.env.VITE_LAST_NAME,
    credential: import.meta.env.VITE_CREDENTIAL
  };
  


  return (
    <div className="font-sans bg-white ">
      <div className='px-4'><Header data={HeaderData} />
      
      <Outlet /></div>
      <Footer />
    </div>
  );
};

export default Root;
