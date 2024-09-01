import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Navbar';

function Mpesa() {
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav /> {/* The Upper NavBar */}
      
      {/* Back Button */}
      <div className="flex justify-start mt-[200px] ml-12">
        <Link to="/checkout">
          <img src="/static/media/image10.png" alt="Back" className="lg:my-[6px] h-full" />
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-center mt-6 text-[35px] font-bold">Checkout</h1> {/* Adjust text size and font weight as needed */}

      {/* Main Content */}
      <div className="flex justify-start ml-28 mt-8 space-x-8"> {/* Flex container with space between sections */}
        
        {/* First Section */}
        <div className="flex flex-col justify-between rounded-[24px] border-[4px] w-[695px] h-[463px] bg-white p-8">
          
          {/* Credit/Debit Section */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center border-[2px] border-gray-700 shadow-md p-6 rounded-[25px] w-[600px] h-[40px] bg-[#F5FAF9]">
              <p className="text-[18px] font-bold text-black">M-pesa-Pesapal-Payment</p>
              <div className="flex space-x-2">
                <img src="/static/media/tag.png" alt="Mpesa" className="h-[30px]" />
                <img src="/static/media/pesapal.png" alt="Pesapal" className="h-[30px]" />
              </div>
            </div>
          </div>

          {/* Paragraph below the small container */}
          <p className="mt-4 text-start text-[25px] text-black">
            An Mpesa prompt has been sent to +25478878887. Put your Mpesa pin to complete payment.
          </p>

          {/* Haven't received prompt? with Resend button */}
          <div className="flex items-center mt-4">
            <p className="text-start text-[25px] text-black mr-4">
              Haven't received prompt?
            </p>
            <button className="text-[18px] font-bold text-white bg-green-700 px-8 py-5 rounded-[12px]">
              Resend prompt
            </button>
          </div>

          {/* Tick Box with Text */}
          <div className="flex items-center mt-4">
            <img src="/static/media/tick.png" alt="Tick" className="w-[24px] h-[24px] mr-2" />
            <p className="text-[25px] text-black">Always use Mpesa for your payments</p>
          </div>
        </div>
        
     {/* New Section: Order Summary */}
<div className="flex flex-col rounded-[24px] border-[4px] w-[495px] h-[500px] bg-white p-8">
    <h2 className="text-[30px] font-bold text-green-800 text-center mb-0">ORDER SUMMARY</h2> {/* No margin-bottom */}

    {/* Container for Input Boxes */}
    <div className="flex flex-col space-y-0 mt-2">
        <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
            <input 
                className="border-none outline-none font-inter font-[700] text-[16px] w-full" 
                placeholder="First Name" 
                value={'Owner:           Maria Lisa'} 
            />
            <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]"/>
        </div>

        <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
            <input 
                className="border-none outline-none font-inter font-[700] text-[16px] w-full" 
                placeholder="Last Name" 
                value={'Location:     Wesatlands'} 
            />
            <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]"/>
        </div>

        <div className="InputBox flex items-center border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mb-0">
            <input 
                className="border-none outline-none font-inter font-[700] text-[16px] w-full" 
                placeholder="Phone" 
                value={'Phone:      +254899098678'} 
            />
            <img src="/static/media/edit.png" alt="Edit" className="ml-[4px]"/>
        </div>
    </div>
    {/* Order Summary Details */}
    <div className="mt-8">
              <div className="flex justify-between text-[18px] font-bold mb-2">
                <p className="text-black">Subtotal:</p>
                <p className="text-black">122,333</p>
              </div>
              <div className="flex justify-between text-[18px] font-bold mb-2">
                <p className="text-black">Delivery:</p>
                <p className="text-black">200</p>
              </div>
              <div className="flex justify-between text-[18px] font-bold">
                <p className="text-black">Total:</p>
                <p className="text-black">7,788</p>
              </div>
            </div>

             {/* Terms and Complete Payment Button */}
            <div className="mt-0">
              <p className="text-[16px] text-gray-600 mb-4">
                By completing purchase, you have accepted our Terms and Conditions.
              </p>
              <button className="w-full text-[18px] font-bold text-white bg-green-700 py-3 rounded-[12px]">
                Complete Payment
              </button>
            </div>
           </div>

      </div>
    </div>
  );
}

export default Mpesa;
