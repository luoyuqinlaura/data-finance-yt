import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashborad</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Manually
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            libero tenetur maxime ducimus unde fugit recusandae quos sunt
            corporis dolorum natus ipsa, impedit exercitationem sint quibusdam
            et sequi consequuntur provident.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium mx-auto md:ml-0 my-6 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
