import React from 'react';
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 grap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          at iusto voluptates quae.
        </p>
      </div>
      <div className="flex md:w-[75%] my-6 justify-between">
        <FaFacebookSquare size={30} />
        <FaDribbbleSquare size={30} />
        <FaGithubSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
      </div>
    </div>
  );
};

export default Footer;
