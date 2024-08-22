import React, { useState } from 'react'
import NavAuthenticated from "../../Nav/NavAuthenticated";
import { Link } from "react-router-dom";

function Testimonials() {
    // State to manage color changes
    const [isHovered, setIsHovered] = useState({
        1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false,
        10: false, 11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false, 18: false,
        19: false, 20: false, 21: false, 22: false, 23: false, 24: false, 25: false,  26: false, 27: false
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
        <div className="DetailedTestimonials ">
            <NavAuthenticated />
            {/* Return Back Top Button */}
            <Link to= "/about-us" className='BackNav flex justify-start w-[40px] lg:w-[80px] mt-[50px] relative top-[100px] ml-[20px] lg:ml-[40px] '>
                <img src='/static/media/image10.png' alt='Back' className=' block w-[40px] lg:w-[80px] cursor-pointer p-auto active:scale-90 transition-all duration-100 ease-out'/>
            </Link>
           

            <div className="MainContent relative top-[100px] lg:top-0 lg:mx-[40px] ">
                
                <div className="MainTitle text-[20px] lg:mt-[60px] flex justify-center">
                    <h1 className="font-inter block font[700] text-[#008000] text-[32px] ">Our Testimonials</h1>
                </div>
                {/*Cards */}
                <div className="AllCards  mx-[6px] lg:mx-[80px] lg:mt-[50px]">
                    {/*First 18 Cards */}
                    <div className="FirstSixs grid grid-cols-2 sm:grid-cols-3 gap-0 mx-0 ">
                    
                        {/*Single Card 1*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[1]?  "bg-[#008000]" : "bg-white"}`}
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
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px]  lg:ml-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[2]?  "bg-[#008000]" : ""}`}
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
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto lg:ml-[90px] mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[3]?  "bg-[#008000]" : ""}`}
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
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px]  lg:mt-0 lg:mb-[120px]  mx-auto  pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[4]?  "bg-[#008000]" : ""}`}
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
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:mx-auto mb-[30px] lg:mb-0 lg:mt-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[5]?  "bg-[#008000]" : ""}`}
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
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0 lg:mb-[120px]  ml-[20px]  lg:mx-auto pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[6]?  "bg-[#008000]" : ""}`}
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

                         
                        {/*Single Card 7*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[7]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(7)}
                                onMouseLeave={() => returnColor(7)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[7] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[7] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[7] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        {/*Single Card 8*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px] lg:ml-0  lg:mr-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[8]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(8)}
                                onMouseLeave={() => returnColor(8)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[8] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[8] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[8] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    

                        {/*Single Card 9*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto lg:ml-[90px] mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[9]?  "bg-[#008000]" : ""}`}
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
                    
                        
                         {/*Single Card 10*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0 lg:mb-[120px]  mx-auto  lg:ml-0 pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[10]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(10)}
                                onMouseLeave={() => returnColor(10)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[10] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[10] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[10] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        {/*Single Card 11*/}
                      <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-[90px] mb-[30px] lg:mb-0 lg:mt-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[11]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(11)}
                                onMouseLeave={() => returnColor(11)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[11] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[11] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[11] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    

                        {/*Single Card 12*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0 lg:mb-[120px]  ml-[20px]  lg:ml-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[12]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(12)}
                                onMouseLeave={() => returnColor(12)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[12] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[12] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[12] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}


                        {/*Single Card 13*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:mx-auto mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[13]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(13)}
                                onMouseLeave={() => returnColor(13)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[13] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[13] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[13] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        {/*Single Card 14*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px]  lg:mx-auto pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[14]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(14)}
                                onMouseLeave={() => returnColor(14)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[14] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[14] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[14] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    

                        {/*Single Card 15*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto  mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[15]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(15)}
                                onMouseLeave={() => returnColor(15)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[15] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[15] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[15] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        
                         {/*Single Card 16*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0 lg:mb-[120px]  mx-auto lg:ml-0 pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[16]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(16)}
                                onMouseLeave={() => returnColor(16)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[16] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[16] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[16] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        {/*Single Card 17*/}
                      <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-0 lg:mt-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[17]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(17)}
                                onMouseLeave={() => returnColor(17)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[17] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[17] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[17] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    

                        {/*Single Card 18*/}
                        <div className="CardWrapper pb-[60px] lg:pb-0">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0  lg:mb-[120px]  ml-[20px]  lg:ml-[90px]  pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[18]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(18)}
                                onMouseLeave={() => returnColor(18)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[18] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[18] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[18] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}    

                    </div> {/*First 18 Cards ENds Here (First Third patterns, Mobile Version*/}

                    

                    {/* Only Show in the Desktop Version */}
                    {/* Only Show in the Desktop Version */}
                    <div className='LastNineCards  hidden sm:grid  sm:grid-cols-3 gap-0 mx-0 lg:mb-[200px]'> {/*Only show in desktop Version*/}
                        {/*Single Card 19*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[19]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(19)}
                                onMouseLeave={() => returnColor(19)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[19] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[19] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[19] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        {/*Single Card 20*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px]  lg:ml-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[20]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(20)}
                                onMouseLeave={() => returnColor(20)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[20] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[20] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[20] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    

                        {/*Single Card 21*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto lg:ml-[90px] mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[21]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(21)}
                                onMouseLeave={() => returnColor(21)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[21] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[21] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[21] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        
                         {/*Single Card 22*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px]  lg:mt-0 lg:mb-[120px]  mx-auto  pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[22]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(22)}
                                onMouseLeave={() => returnColor(22)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[22] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[22] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[22] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                        {/*Single Card 23*/}
                      <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:mx-auto mb-[30px] lg:mb-0 lg:mt-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[23]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(23)}
                                onMouseLeave={() => returnColor(23)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[23] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[23] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[23] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}

                        
                        {/*Single Card 24*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-0 lg:mb-[120px]  ml-[20px]  lg:mx-auto pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[24]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(24)}
                                onMouseLeave={() => returnColor(24)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[24] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[24] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 mb-0 text-start    ${isHovered[24] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}

                         
                        {/*Single Card 25*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid lg:ml-0 mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[25]?  "bg-[#008000]" : ""}`}
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
                    
                        {/*Single Card 26*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px]   border-[0.35px] border-solid mt-[30px] lg:mt-[120px]  ml-[20px] lg:ml-0  lg:mr-[90px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[26]?  "bg-[#008000]" : ""}`}
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
                    

                        {/*Single Card 27*/}
                        <div className="CardWrapper ">
                            <div className={ `SingleCard w-[80%] lg:w-[70%] h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid mx-auto lg:ml-[90px] mb-[30px] lg:mb-[120px] pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-black shadow-md  ${isHovered[27]?  "bg-[#008000]" : ""}`}
                                onMouseEnter={() => toggleColor(27)}
                                onMouseLeave={() => returnColor(27)}
                                >
                                {/*UserName and Image */}
                                <div className="InnerContent m-0">
                                    <div className="ImageAndName flex justify-start">
                                        <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                                            <img src="/static/media/image4.jpg" alt="User"  className="object-cover w-full h-full"/>
                                        </div>
                                        <div className="UserName block ml-0.5">
                                            <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[27] ? "text-white" : "text-black"}`} >Charles Kisika</p>
                                        </div> 
                                    </div>   {/*User Image and Name Ends Here */}

                                    {/*Card Title */}
                                    <div className="CardTitle block my-1">
                                            <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[27] ? "text-white":"text-[#008000]" }`}>Great Technology!</h3>
                                    </div> {/*card title Ends Here */}

                                    {/*Card Details */}
                                    <div className="">
                                            <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[27] ?"text-white":"text-black" }`}>To lead the global shift towards sustainable food production, where every meal nourishes both people and the planet, fostering a world of abundance, equality, and ecological harmony.</p>
                                    </div>
                                </div> {/*Inner Contents Ends Here */}
                            </div> {/*Single card Ends Here */}
                        </div>    {/*Card Wrapper Ends */}
                    
                    </div> {/*Last 9 cards for Desktop Version Only Ends Here*/}


               </div> {/*All Cards Ends Here */}

            </div> {/*Main content Ends Here */}

       </div> //Detailed Testimonials ends here
   ); 
}

export default Testimonials;
  