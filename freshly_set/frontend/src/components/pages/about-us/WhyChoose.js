import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function WhyChoose() { 
  const [clicked, setClicked] = useState({
    1: false,  // First description 1 is closed by default
    2: false, // Second description is closed by default and so on...(all set to false)
    c: false,
    4: false,
    5: false
  });
    
  const showWhy = (id) => {
    setClicked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }; 
      
  useEffect(() => {
      console.log("clicked", clicked)
  }, [clicked])
  
  return (
     
    <section id="functions" className="MainContentCard lg:w-full lg:flex  justify-center mt-[59px] lg:mt-[82px] lg:px-6 mx-3 lg:mx-auto max-w-[1094px] rounded-[23px] border-solid border-[1px] border-gray-400/[0.25] shadow-gray-700 shadow-lg ">

      {/* Left side  (Only Visible On Desktop version)*/}
      <div className="SidePicture hidden lg:flex ">
          <img className="lg:h-[634px] lg:w-[418px] lg:mt-[13px] lg:ml-[14px] lg:mb-[22px]  lg:rounded-[52px]" src="/static/media/WhyChoose_large.png" alt="WhyChoose"/>
      </div>

      {/* Right Side */}
      <div className="RightSide relative mx-2 lg:mx-auto lg:w-full block  lg:ml-[32px] ">
        <div className='TopHeading ml-[12px] lg:ml-0 flex justify-start mt-[29px] '>
            <img className=' w-[46px] h-[48px] lg:mb-[18px]' src='/static/media/WhyChoose_small.png' alt='garden'/>
            <p className=" text-start text-[20px] lg:text-[28px] my-0 font-[700] pl-[10px] font-inter  text-[#008000] h-[56px] lg:mb-[18px]">Why You Should Choose Freshly Farms</p>
        </div>

        {/*Question Cards And Button */}
        <div className="AllCards block relative mt-[10px]  mx-[8px] lg:mr-[40px]">
          <div className="Card1 rounded-[8px] lg:rounded-[14px] border-solid border-[1px] border-black/[0.25] shadow-gray-600 shadow-md">
            <div className=' flex justify-between mt-[10px] lg:mt-[16px] mb-[6px] lg:mb-[12px] mx-[10px] lg:ml-[23px] mr-0'> 
              <p className="CardTitle text-black text-start font-inter block text-[12px] lg:text-[20px] font-[700] my-0">We Implement Technology In Farming</p>
              <img onClick={() => showWhy(1)}  className="ToggleButton block h-[20px] lg:h-[35px] w-[25px] lg:w-[40px] mt-0 mr-[10px] lg:mr-[20px] lg:-mt-[7px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
            </div>
              {/* Toggle Hidden Desciptive Text */}  
            <div className="ToggleHidden ml-[10px] lg:ml-[23px] mr-[35px]">
              <p className={clicked[1]? "text-black/[0.62] w-full font-inter text-start text-[10px] lg:text-[20px] mt-0  mb-2 ": "hidden"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
              </p> 
            </div>
          </div> {/*Card1 Ends Here */}
          
          <div className="Card2 rounded-[8px] lg:rounded-[14px] mt-[20px] border-solid border-[1px] border-black/[0.25] shadow-gray-600 shadow-md">
            <div className=' flex justify-between mt-[10px] lg:mt-[16px] mb-[6px] lg:mb-[12px] mx-[10px] lg:ml-[23px] mr-0'> 
              <p className="CardTitle text-black text-start font-inter block text-[12px] lg:text-[20px] font-[700] my-0">We Implement Technology In Farming</p>
              <img onClick={() => showWhy(2)}  className="ToggleButton block h-[20px] lg:h-[35px] w-[25px] lg:w-[40px] mt-0 mr-[10px] lg:mr-[20px] lg:-mt-[7px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
            </div>
              {/* Toggle Hidden Desciptive Text */}  
            <div className="ToggleHidden ml-[10px] lg:ml-[23px] mr-[35px]">
              <p className={clicked[2]? "text-black/[0.62] w-full font-inter text-start text-[10px] lg:text-[20px] mt-0  mb-2 ": "hidden"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
              </p> 
            </div>
          </div> {/*Card2 Ends Here */}

          <div className="Card3 rounded-[8px] lg:rounded-[14px] mt-[20px] border-solid border-[1px] border-black/[0.25] shadow-gray-600 shadow-md">
            <div className=' flex justify-between mt-[10px] lg:mt-[16px] mb-[6px] lg:mb-[12px] mx-[10px] lg:ml-[23px] mr-0'> 
              <p className="CardTitle text-black text-start font-inter block text-[12px] lg:text-[20px] font-[700] my-0">We Implement Technology In Farming</p>
              <img onClick={() => showWhy(3)}  className="ToggleButton block h-[20px] lg:h-[35px] w-[25px] lg:w-[40px] mt-0 mr-[10px] lg:mr-[20px] lg:-mt-[7px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
            </div>
              {/* Toggle Hidden Desciptive Text */}  
            <div className="ToggleHidden ml-[10px] lg:ml-[23px] mr-[35px]">
              <p className={clicked[3]? "text-black/[0.62] w-full font-inter text-start text-[10px] lg:text-[20px] mt-0  mb-2 ": "hidden"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
              </p> 
            </div>
          </div> {/*Card3 Ends Here */}


          <div className="Card rounded-[8px] lg:rounded-[14px] mt-[20px] border-solid border-[1px] border-black/[0.25] shadow-gray-600 shadow-md">
            <div className=' flex justify-between mt-[10px] lg:mt-[16px] mb-[6px] lg:mb-[12px] mx-[10px] lg:ml-[23px] mr-0'> 
              <p className="CardTitle text-black text-start font-inter block text-[12px] lg:text-[20px] font-[700] my-0">We Implement Technology In Farming</p>
              <img onClick={() => showWhy(4)}  className="ToggleButton block h-[20px] lg:h-[35px] w-[25px] lg:w-[40px] mt-0 mr-[10px] lg:mr-[20px] lg:-mt-[7px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
            </div>
              {/* Toggle Hidden Desciptive Text */}  
            <div className="ToggleHidden ml-[10px] lg:ml-[23px] mr-[35px]">
              <p className={clicked[4]? "text-black/[0.62] w-full font-inter text-start text-[10px] lg:text-[20px] mt-0  mb-2 ": "hidden"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
              </p> 
            </div>
          </div> {/*Card4 Ends Here */}

          <div className="Card5 rounded-[8px] lg:rounded-[14px] mt-[20px] border-solid border-[1px] border-black/[0.25] shadow-gray-600 shadow-md">
            <div className=' flex justify-between mt-[10px] lg:mt-[16px] mb-[6px] lg:mb-[12px] mx-[10px] lg:ml-[23px] mr-0'> 
              <p className="CardTitle text-black text-start font-inter block text-[12px] lg:text-[20px] font-[700] my-0">We Implement Technology In Farming</p>
              <img onClick={() => showWhy(5)}  className="ToggleButton block h-[20px] lg:h-[35px] w-[25px] lg:w-[40px] mt-0 mr-[10px] lg:mr-[20px] lg:-mt-[7px]" src='/static/media/threeDots.png' alt='Navigation menu'/>
            </div>
              {/* Toggle Hidden Desciptive Text */}  
            <div className="ToggleHidden ml-[10px] lg:ml-[23px] mr-[35px]">
              <p className={clicked[5]? "text-black/[0.62] w-full font-inter text-start text-[10px] lg:text-[20px] mt-0  mb-2 ": "hidden"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
              </p> 
            </div>
          </div> {/*Card5 Ends Here */}

          {/*Eplore More Button */}
        <div className=" mt-[20px] lg:mt-[34px] mb-[30px] lg:mb-[65.68px]">
          <Link to="/whychoose-detail" className="block  mx-auto  h-[48px] lg:h-[54.3px] w-[231px]"> 
            <button className=" bg-[#008000] text-white cursor-pointer rounded-[15px] h-full w-full mx-auto text-[23px] font-inter font-[700] ">Explore More</button>
          </Link>
        </div> {/*Explore More Button Ends Here */}
        </div> {/*All Cards Ends Here */}
     
        

      </div> {/*Right Side Ends Here */}
    </section> //Main Content Card Ends Here

  )
}

export default WhyChoose