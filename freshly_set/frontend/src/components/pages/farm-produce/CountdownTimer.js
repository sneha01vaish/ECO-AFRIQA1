import React, { useContext, useEffect, useState } from 'react';
import { ProductsSideBarContext } from '../../context/PageContext';

const CountdownTimer = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [productsSidebarOpen, setProductsSidebarOpen] = useContext(ProductsSideBarContext);
  const formatTime = (value) => {
    return String(value).padStart(2, '0');
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const countdownDate = new Date(endTime).getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [endTime]);

  return (
    <div>
      <div className="flex items-center">
        <div className="flex-col ">
            <h2 className={productsSidebarOpen ? "mb-[0px] text-[24.45px]":"mb-[0px] text-[22.03px] lg:text-[32.79px]"}>{formatTime(timeRemaining.days)}</h2>
            <h3 className={productsSidebarOpen ? "mt-[0px]  text-[10px] text-center font-[400]": "mt-[0px]  text-[9.44px] lg:text-[14.05px] text-center font-[400]"}>DAYS</h3> 
        </div>

        <h3 className="text-[32px] my-[0px] mx-[5px]">:</h3>


        <div className="flex-col ">
            <h2 className={productsSidebarOpen ? "mb-[0px] text-[24.45px]":"mb-[0px] text-[22.03px] lg:text-[32.79px]"}>{formatTime(timeRemaining.hours)}</h2>
            <h3 className={productsSidebarOpen ? "mt-[0px]  text-[10px] text-center font-[400]": "mt-[0px]  text-[9.44px] lg:text-[14.05px] text-center font-[400]"}>HOURS</h3> 
        </div>

        <h3 className="text-[32px] my-[0px] mx-[5px]">:</h3>


        <div className="flex-col ">
            <h2 className={productsSidebarOpen ? "mb-[0px] text-[24.45px]":"mb-[0px] text-[22.03px] lg:text-[32.79px]"}>{formatTime(timeRemaining.minutes)}</h2>
            <h3 className={productsSidebarOpen ? "mt-[0px]  text-[10px] text-center font-[400]": "mt-[0px]  text-[9.44px] lg:text-[14.05px] text-center font-[400]"}>MINUTES</h3> 
        </div>

        <h3 className="text-[32px] my-[0px] mx-[5px]">:</h3>


        <div className="flex-col ">
            <h2 className={productsSidebarOpen ? "mb-[0px] text-[24.45px]":"mb-[0px] text-[22.03px] lg:text-[32.79px]"}>{formatTime(timeRemaining.seconds)}</h2>
            <h3 className={productsSidebarOpen ? "mt-[0px]  text-[10px] text-center font-[400]": "mt-[0px]  text-[9.44px] lg:text-[14.05px] text-center font-[400]"}>SECONDS</h3> 
        </div>


      {/* {formatTime(timeRemaining.hours)} Hours {formatTime(timeRemaining.minutes)} Minutes {formatTime(timeRemaining.seconds)} Seconds */}
      </div>
    </div>
  );
};

export default CountdownTimer;
