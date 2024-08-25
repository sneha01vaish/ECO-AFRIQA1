import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Testimonials() {
    // State to manage color changes
    const [isHovered, setIsHovered] = useState({
        1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false
    });

    // Function to toggle the color on mouse enter
    const toggleColor = (id) => {
        setIsHovered((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };

    // Function to toggle the color on mouse leave
    const returnColor = (id) => {
        setIsHovered((!isHovered));
      }; 

    return (   
      <div className="Testimonials relative  lg:mx-[40px] lg:mt-[100px]">
          
          <div className="MainTitle text-[20px]  flex justify-center">
              <h1 className="font-inter block font[700] text-[#008000] text-[28px] lg:text-[45px] ">Our Testimonials</h1>
          </div>
          
          {/* View All Button */}
          <Link to= "/testimonials-detailed" className='flex justify-end mt-[20px] lg:mt-[30px]'>
              <button className=' block  mr-[20px] lg:mr-[100px] cursor-pointer rounded-[10px] border-none active:scale-90 transition-all duration-100 ease-out font-inter text-white bg-[#008000] text-[12px] lg:text-[20px] font-[700] py-[10px] px-[28px] lg:px-[35px] '> View All </button>
          </Link>


          {/*Cards */}
          <div className="AllCards mx-[6px] lg:mx-[80px] mt-[10px] lg:mt-[50px]">
              {/*First 6 Cards (Visible On Mobile Version*/}
              <div className="FirstSixs grid grid-cols-2 sm:grid-cols-3 gap-0 mx-0 ">
              
                  {/*Single Card 1*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700 ${isHovered[1]?  "bg-[#008000]" : "bg-white"}`}
                          onMouseEnter={() => toggleColor(1)}
                          onMouseLeave={() => returnColor(1)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[1] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[1] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[1] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              
                  {/*Single Card 2*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px]  lg:ml-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[2]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(2)}
                          onMouseLeave={() => returnColor(2)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[2] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[2] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[2] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              

                  {/*Single Card 3*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto lg:ml-[90px] mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[3]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(3)}
                          onMouseLeave={() => returnColor(3)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[3] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[3] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[3] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              
                  
                    {/*Single Card 4*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px]  lg:mt-0 lg:mb-[120px]  mx-auto  pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[4]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(4)}
                          onMouseLeave={() => returnColor(4)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[4] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[4] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[4] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              
                  {/*Single Card 5*/}
                <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:mx-auto mb-[30px] lg:mb-0 lg:mt-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[5]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(5)}
                          onMouseLeave={() => returnColor(5)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[5] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[5] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[5] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              

                  {/*Single Card 6*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0 lg:mb-[120px]  ml-[20px]  lg:mx-auto pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[6]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(6)}
                          onMouseLeave={() => returnColor(6)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[6] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[6] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[6] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}    
                  
              </div> {/*First 6 Cards ENds Here (Only Show in Mobile Version*/}

              {/* Only Show in the Desktop Version */}
              <div className='LastThreeCards  hidden sm:grid  sm:grid-cols-3 gap-0 mx-0 '> {/*Only show in desktop Version*/}
           
                  {/*Single Card 7*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[25]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(25)}
                          onMouseLeave={() => returnColor(25)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[25] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[25] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[25] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              
                  {/*Single Card 8*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px] lg:ml-0  lg:mr-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700 ${isHovered[26]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(26)}
                          onMouseLeave={() => returnColor(26)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[26] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[26] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[26] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              

                  {/*Single Card 9*/}
                  <div className="CardWrapper ">
                      <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto lg:ml-[90px] mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700  ${isHovered[9]?  "bg-[#008000]" : ""}`}
                          onMouseEnter={() => toggleColor(9)}
                          onMouseLeave={() => returnColor(9)}
                          >
                          {/*UserName and Image */}
                          <div className="InnerContent m-0">
                              <div className="ImageAndName flex justify-start">
                                  <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                      <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                  </div>
                                  <div className="UserName block ml-0.5">
                                      <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[9] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                  </div> 
                              </div>   {/*User Image and Name Ends Here */}

                              {/*Card Title */}
                              <div className="CardTitle block my-1">
                                      <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[9] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                              </div> {/*card title Ends Here */}

                              {/*Card Details */}
                              <div className="">
                                      <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[9] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                              </div>
                          </div> {/*Inner Contents Ends Here */}
                      </div> {/*Single card Ends Here */}
                  </div>    {/*Card Wrapper Ends */}
              
              </div> {/*Last 3 cards for Desktop Version Only Ends Here*/}


          </div> {/*All Cards Ends Here */}

      

  </div> //Detailed ends here
   ); 
}

export default Testimonials;
  