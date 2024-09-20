import React from 'react';

function ProfileSidebar({ setSelectedSection }) {
  return (
    <div className="hidden lg:flex  h-[100%] pt-[13px] ">
      <ul className="fixed block space-y-[51.48px] bg-gradient-to-r from-[#008000]  to-[#001A00] via-[#008000] w-[235.64px] pt-[34px] pb-[42.7px]">
        <li 
          className="font-inter text-white text-[20px] font-[600] cursor-pointer"
          onClick={() => setSelectedSection('General')}
        >
          General
        </li>
        <li 
          className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
          onClick={() => setSelectedSection('Account Information')}
        >
          Account Information
        </li>
        <li 
          className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
          onClick={() => setSelectedSection('OrderHistory')}
        >
          Order History
        </li>


        <li 
          className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
          onClick={() => setSelectedSection('QuotationHistory')}
        >
          Quotation History
        </li>

        <li 
          className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
          onClick={() => setSelectedSection('VerifiedFarmers')}
        >
          Verified Farmers
        </li>

        <li 
          className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
          onClick={() => setSelectedSection('Transporters')}
        >
          Transporters
        </li>

        <li 
          className="font-inter text-white/[0.50] hover:text-white transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
          onClick={() => setSelectedSection('Transporters')}
        >
          Transporters
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
