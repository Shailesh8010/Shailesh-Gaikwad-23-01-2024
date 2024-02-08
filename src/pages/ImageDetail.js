import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import {Routes,Route} from "react-router-dom"
import Navbar from "../components/Navbar";


const ImageDetail = () => {

  
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const image = data.find((item) => item.id === id); // Find the image data by its ID

  if (!image) {
    // Handle cases where the image is not found
    return <div>Image not found</div>;
  }

  return (
    <>
    <Routes>
        <Route path="/" element={<Navbar/>}/>
  </Routes>
  <div className="bg-red-200 "> 
  <div className="pt-[200px] items-center justify-center">
      <div className="lg:ml-[300px] sm:ml-[300px]  mb-10 flex flex-col items-center justify-center sm:flex-row">
        <div className="w-1/3 p-4  ml-[60px] flex justify-center sm:w-auto">
          <img
            className=" h-48 min-w-fit object-cover rounded"
            src={process.env.PUBLIC_URL + image.imagePath}
            alt={image.title}
          />
        </div>
        <div className="w-2/3 p-4 text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{image.name}</span>
          </h1>
         
          
        </div>
      </div>

      <div className="w-full p-4">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Recommended </h3>
          <br />
          <h4 className="text-2xl font-bold">Description :</h4>
          <p className="col-12 paragraph text-center read-more-hide show">
  {image.description}
</p>
        
        </div>

      </div>
    </div>
  </div>
  </>
  );
};

export default ImageDetail;
