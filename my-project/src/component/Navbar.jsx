import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white text-white p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <a href="#" className="text-2xl font-bold text-black">Ticket System</a>
        <div className="hidden md:flex items-center space-x-6 ">
          <ul className="flex space-x-6">
            <li><a href="#" className=" font-semibold  hover:text-gray-500 text-gray-600">Home</a></li>
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600">FAQ</a></li>
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600">Changelog</a></li>
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600">Blog</a></li>
            <li><a href="#" className="font-semibold   hover:text-gray-500 text-gray-600">Download</a></li>
            <li><a href="#" className="font-semibold   hover:text-gray-500 text-gray-600">Contact</a></li>
          </ul>
          <button className=" text-white px-4 py-2 rounded-md   bg-linear-to-tl from-[#932EE3] to-[#632EE3]">
          +  New Ticket
          </button>
        </div>
        <div className="md:hidden text-black">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col space-y-4 items-center">
          
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600"> Home</a></li>
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600"> FAQ</a></li>
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600"> Changelog</a></li>
            <li><a href="#" className="font-semibold  hover:text-gray-500 text-gray-600"> Blog</a></li>
            <li><a href="#" className="font-semibold   hover:text-gray-500 text-gray-600"> Download</a></li>
            <li><a href="#" className="font-semibold   hover:text-gray-500 text-gray-600"> Contact</a></li>
            <li>
            <button className="bg-linear-to-tl from-[#932EE3] to-[#632EE3] text-white px-4 py-2 rounded-md w-full">
             + New Ticket
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;