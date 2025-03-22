import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import the carousel styles

const Banner = () => {
  // Image URLs
  const banner1 = "https://i.ibb.co/5MZPdhp/banner-1.jpg";
  const banner2 = "https://i.ibb.co/thDf1NW/banner-2.jpg";
  const banner3 = "https://i.ibb.co/SyXjRsH/banner-3.jpg";
  
  // Event Handl

  return (
    <div className=" relative z-10">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showIndicators={false}
      >
        <div className="w-full h-[70vh] ">
          <img
            src={banner1} // Local image import
            alt="banner-1"
            
          />
          <div className="legend absolute bottom-5 left-5 text-white bg-transparent text-xl font-bold text-shadow-lg">
  <p className="text-3xl">
    Lorem ipsum dolor, sit amet consectetur adipisicing eli
  </p>
  <p className="py-4">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem suscipit
    doloremque accusantium maxime voluptatibus soluta voluptates nostrum vero
    cumque nesciunt mollitia corporis ea nam illo nihil aspernatur, quas impedit
    doloribus.
  </p>
  <button className="btn btn-ghost">Click for Details</button>
</div>

        </div>
        <div>
          <img
            src={banner2} // Local image import
            alt="banner-2"
            className="w-full h-[70vh]"
          />
          <div className=' legend absolute bottom-5 left-5 text-white bg-transparent text-xl font-bold text-shadow-lg '>
            <p className='text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing eli</p>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem suscipit doloremque accusantium maxime voluptatibus soluta voluptates nostrum vero cumque nesciunt mollitia corporis ea nam illo nihil aspernatur, quas impedit doloribus.</p>
            <button className='btn btn-ghost'>Click for Details</button>
          </div>
        </div>
        <div>
          <img
            src={banner3} // Local image import
            alt="banner-3"
            className="w-full h-[70vh]"
          />
          <div className=' legend absolute bottom-5 left-5 text-white bg-transparent text-xl font-bold text-shadow-lg '>
            <p className='text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing eli</p>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem suscipit doloremque accusantium maxime voluptatibus soluta voluptates nostrum vero cumque nesciunt mollitia corporis ea nam illo nihil aspernatur, quas impedit doloribus.</p>
            <button className='btn btn-ghost'>Click for Details</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;




// https://i.ibb.co.com/5MZPdhp/banner-1.jpg
// https://i.ibb.co.com/thDf1NW/banner-2.jpg
// https://i.ibb.co.com/SyXjRsH/banner-3.jpg
// https://i.ibb.co.com/vXDmnxy/banner-4.jpg
// https://i.ibb.co.com/9hnWbDK/banner-5.jpg
// https://i.ibb.co.com/3yqJkQm/banner-6.jpg
// https://i.ibb.co.com/vcHzGcx/banner-7.jpg