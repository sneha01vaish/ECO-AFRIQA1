import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Navbar';

function Checkout() {
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}

      {/* Container for payment mode */}
      <div className="flex items-center justify-center mt-[200px] px-6">
        {/* Image and Content Container with Border */}
        <div className="flex flex-row items-start space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[822px] h-[262px] flex-shrink-0">
          
          {/* Success Header */}
          <div className="SuccessHeader flex flex-col items-start mt-10">
            <div className="SuccessImage w-[45px] lg:w-[104px]">
              <img src="/static/media/productPay.png" alt="" className="w-full -mt-[60px]" />
            </div>

            {/* Back Button */}
            <div className="BackButton flex justify-start mt-[20px] ml-12">
              <Link to="/transporters">
                <img src="/static/media/image10.png" alt="Back" className="lg:m-[6px] h-full" />
              </Link>
            </div>
          </div>

          {/* Success Message */}
          <div className="flex flex-col justify-center items-center ml-10">
            <div className="SuccessMessage pb-[120px]">
              <p className="font-inter font-[600] text-center text-[16px] lg:text-[30px]">
                Please Choose Your Preferred payment method
              </p>
            </div>

            {/* Mpesa Button */}
            <div className="MpesaButton mt-[-100px]">
              <Link to='/Mpesa'>
              <img src="/static/media/tag.png" alt="Mpesa" className="w-[80px] mb-4" />
              </Link>
            </div>
             {/* Mpesa Button */}
             <div className="MpesaButton mt-[10px]">
              <img src="/static/media/debit.png" alt="Mpesa" className="w-[80px] mb-4" />
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Checkout;
