

import React, { useState, useEffect } from "react";
import data from './data.json';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";



export const HomePage = () => {
 



  const [startIndex, setStartIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(3);

  const totalImages = data.length;

  const nextImages = () => {
    if (startIndex + imagesPerPage < totalImages) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const prevImages = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImagesPerPage(3);
      } else {
        setImagesPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      let nextIndex = startIndex + imagesPerPage;
      if (nextIndex >= totalImages) {
        nextIndex = 0;
      }
      setStartIndex(nextIndex);
    }, 50000);

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [startIndex, totalImages, imagesPerPage]);

  const visibleImages = data.slice(startIndex, startIndex + imagesPerPage);
  const isMobileScreen = window.innerWidth <= 768;

  return (
    <>
     
    <div className="bg-red-200 h-200%"> 
    <div className="w-3/4 m-auto -z-30 ">
      <div className="pt-20 pb-20">
        <div className="flex items-center pt-10"> {/* Wrap images in a flex container */}
          <button
            onClick={prevImages}
            disabled={startIndex === 0}
            style={{ top: isMobileScreen ? '100px' : 0 }}
          >
            <GrCaretPrevious className="mr-10" />
          </button>

          {visibleImages.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center"> {/* Center-align title and image */}
             
              <Link to={`ImageDetail/${item.id}`}>
              <h3 className="mt-2 mb-2 text-xl font-semibold">{item.title}</h3>
                <img
                  src={process.env.PUBLIC_URL + item.imagePath}
                  alt={item.title}
                  className={`h-44 w-300 gap-9 rounded-lg ${
                    index < imagesPerPage  ? "mt-10 ml-10 mr-10" : ""
                  }`}
                  style={{ cursor: "pointer" }} 
                />
                <p className="text-sm" style={{ textAlign: 'center', margin: '5px 0', padding: '8px', border: '1px solid #ddd', maxHeight: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.description.length > 20
                    ? `${item.description.substring(0, 30)}...`
                    : item.description}
                </p>
              </Link>
              <a class="inline-block transition duration-500 hover:scale-125 hover:bg-600 flex justify-center items-center rounded-full m-6 p-4 bg-teal-400 text-white">
              <Link to={`ImageDetail/${item.id}`} >get more detail about {item.title}</Link>
              </a>
            </div>
          ))}
          

          <button 
            onClick={nextImages}
            disabled={startIndex + imagesPerPage >= totalImages}
            style={{ top: isMobileScreen ? '100px' : 0 }}
          >
            <GrCaretNext className="ml-10"/>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
export default HomePage;




