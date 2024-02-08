import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
 <div className="border-gray-200 px-2  bg-black text-white">
  <div className="container pt-10 pr-10 pl-10 mx-auto flex flex-wrap items-center justify-between">
    <div>
      <Link to="/">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-1xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Tourism </span>India.
        </h2>
      </Link>
    </div>

    <div
      onClick={() => setOpen(!open)}
      className="md:hidden w-7 h-7 cursor-pointer"
    >
      {open ? <FaTimes /> : <FaBars />}
    </div>

    {open && (
      <ul className="md:hidden mt-4 md:text-sm md:font-medium">
        <li className="mb-2">
          <Link to="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Login" onClick={() => setOpen(!open)}>
            About
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/ContactUs" onClick={() => setOpen(!open)}>
          ContactUs
          </Link>
        </li>
        <li>
          <button className="btn bg-blue-600 text-white font-semibold px-3 py-1 rounded">
          <Link to="/Register" onClick={() => setOpen(!open)}>
          Register
          </Link>
          </button>
        </li>
      </ul>
    )}

    <ul className="hidden md:flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
      <li className="transform h-10 bg-black w-20 transition duration-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 hover:scale-125 hover:bg-600 flex justify-center items-center">
        <Link to="/">Home</Link>
      </li>
      <li className="transform h-10 bg-black w-20 transition duration-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 hover:scale-125 hover:bg-600 flex justify-center items-center">
        <Link to="/Login">Login</Link>
      </li>
      <li className="transform h-10 bg-black w-20 transition duration-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 hover:scale-125 hover:bg-600 flex justify-center items-center">
        <Link to="/ContactUs">ContactUs</Link>
      </li>
      <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
      <Link to="/Register">Register</Link>
      </button>
    </ul>
  </div>
</div>



    // <div className="shadow-md w-full fixed top-0 left-0 ">
    //   <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
    //     <div>
    //       <Link to="/">
    //         {" "}
    //         <h1 className="font-bold text-2xl cursor-pointer flex items-center gap-1 ">
    //           Shailesh Gaikwad
    //         </h1>{" "}
    //       </Link>
    //     </div>

    //     <div
    //       onClick={() => setOpen(!open)}
    //       className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
    //     >
    //       {open ? <FaTimes /> : <FaBars />}
    //     </div>




    //     <ul
    //       className={`md:flex z-40 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
    //         open ? "top-12" : "top-[-490px] "
    //       }`}
    //     >
    //       <li className="md:ml-8 md:my-0 my-7 font-semibold">
    //         <Link to="/" onClick={() => setOpen(!open)}>
    //           Home
    //         </Link>
    //       </li>
    //       <li className="md:ml-8 md:my-0 my-7 font-semibold">
    //         <Link to="/about" onClick={() => setOpen(!open)}>
    //           About
    //         </Link>
    //       </li>
    //       <li className="md:ml-8 md:my-0 my-7 font-semibold">
    //         <Link to="/profile" onClick={() => setOpen(!open)}>
    //           Profile
    //         </Link>
    //       </li>

    //       <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
    //         Sign In
    //       </button>
    //     </ul>
    //   </div>
    // </div>
    
  );
};

export default Navbar;
