import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Nav/Navbar";
import OrderItemCard from "./OrderItemCard";
import OrderItems from "./OrderItems.json";

function OrderProgress() {
    //Number of Notifications to pull from the json file
    const OrderItemsNumber = 4;

    //Date and Time For Order Delivery
    const Date = "30TH SEPTEMBER 2024";
    const Time = "10:30 AM";

    //Percentage Values for OrderProcessing
    const OrderConfirmation = 100;               //Order Confirmation Percentage
    const OrderPayment = 72;                    //Order  Payment Percentage
    const OrderProcessing = 38;                 //Order Processing Percentage
    const OrderDelivery = 0;                   //Order Delivery Percentage

    //Function for Color for Each Range of Processing Value
    function ProcessingColor(PercentProgress) {
        if (PercentProgress >= 0 && PercentProgress < 50) return "bg-[#FF0C1A]"  // Red for between 0% to 50%
        if (PercentProgress >= 50 && PercentProgress < 80) return "bg-[#ffce0c]"  // Yellowish for between 50% to 80%
        if (PercentProgress >= 80 && PercentProgress <= 100) return "bg-[#000000]" // Black for Over 80% to 100%
    }

    return (
        <div className="OrderProgress mb-[200px] mt-[200px]">
            {/*Navbar */}
            <div className="The Navbar">
                <Nav />
            </div>

            {/*Back Button */}
            <div className="mx-[40px] w-fit" >
                <Link to="/notification" >
                    <div className="ButtonWrapper w-[61px] h-[47px] cursor-pointer">
                        <img src="/static/media/image10.png"  alt="BackButton" className="w-full h-full"/>
                    </div>
                </Link>
            </div>

            {/*Order Status */}
            <div className="OrderStatusBanner bg-gradient-to-r from-[#007000] to-[#000A00] shadow-md shadow-[#00000040] mx-[14px] mt-[20px] pb-[50px] lg:pb-[20px] rounded-[29px]">
                <div className="OrderStatusBannerWrapper px-[30px] py-[30px]">
                    
                    {/*Progress Title */}
                    <div className="TitleWrapper block">
                        <h3 className="text-start font-[700] font-inter text-[10px] lg:text-[35px] text-[#FFFFFF] my-0">Your Order Progress</h3>
                    </div>
                        
                    {/*ProgressBars */}
                    <div className="ProgressBars block mt-[16px] lg:mt-[28px]">
                        <div className="ProgressBarsWrapper flex justify-between">
                            {/*OrderConfirmation */}
                            <div className="block">
                                <div className="OrderConfirmation bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[247px] ">
                                    <div className={`Progress h-full ${ProcessingColor(OrderConfirmation)}`} style={{ width: `${OrderConfirmation}%` }}></div>                                  {/*Dynamic Progress bar length and color*/}
                                </div>
                                <div className="OrderTag">
                                    <p className="text-start text-[20px] font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#ffffff] to-[#999999]">Order Confirmation</p>
                                </div>
                            </div>

                            {/*OrderPayment */}
                            <div className="block">
                                <div className="OrderPayment bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[247px] ">
                                    <div className={`Progress h-full ${ProcessingColor(OrderPayment)}`} style={{ width: `${OrderPayment}%` }}></div>                                  {/*Dynamic Progress bar length and color*/}
                                </div>
                                <div className="OrderTag">
                                    <p className="text-start text-[20px] font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#ffffff] to-[#999999]">Payment</p>
                                </div>
                            </div>

                            {/*OrderProcessing */}
                            <div className="block">
                                <div className="OrderProcessing bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[247px] ">
                                    <div className={`Progress h-full ${ProcessingColor(OrderProcessing)}`} style={{ width: `${OrderProcessing}%` }}></div>                                  {/*Dynamic Progress bar length and color*/}
                                </div>
                                <div className="OrderTag">
                                    <p className="text-start text-[20px] font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#ffffff] to-[#999999]">Processing</p>
                                </div>
                            </div>
                            
                            {/*OrderDelivery */}
                                <div className="block">
                                <div className="OrderDelivery bg-[#D9D9D9] h-[9px] lg:h-[10px] w-[50px] lg:w-[247px] ">
                                    <div className={`Progress h-full ${ProcessingColor(OrderDelivery)}`} style={{ width: `${OrderDelivery}%` }}></div>                                  {/*Dynamic Progress bar length and color*/}
                                </div>
                                <div className="OrderTag">
                                    <p className="text-start text-[20px] font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#ffffff] to-[#999999]">Delivery</p>
                                </div>
                            </div>
                        </div> {/*Progress Bars Wrapper Ends Here */}
                    </div> {/*Progress Bars Ends Here */}

                    {/*Order Delivery DAte And Time */}
                    <div className="DeliveryDateAndTime mt-[40px] py-[16px] px-[14px] bg-[#FFFFFF] rounded-[16px] w-fit border-solid border-[3px] border-[#008000] ">
                        <p className="text-start font-[700] font-inter text-[10px] lg:text-[20px] text-[#000000] my-0"> Estimated Delivery Date And Time: {Date}, {Time} </p>
                    </div>
                   
                   
                </div> {/*OrderSatusBanner Wrapper ends Here */}
            </div> {/*Orders Status Banner Ends Here */}

            {/*Order Items progress Cards */}
            <div className="OrderProgressWrapper mt-[30px] mx-[12px] lg:mx-[200px] px-[14px] lg:px-[28px] py-[10px] lg:py-[24px] rounded-[8px] lg:rounded-[18px] border-solid border-[0.6px] border-[#A6B1AD] shadow-md shadow-[#00000040]">
                {/*Tittle of Order Progress */}
                <div className="OrderProgressTitle">
                    <p className="text-start font-inter font-[700] text-[28px] text-[#008000] my-0 ">Your Items</p>
                </div>
                {/*Titles of Sections */}
                <div className="OrderItemWrapper grid grid-cols-2 mt-[20px]">
                {/*Item Picture, Category and Name */}
                <div className="ItemPictureAndName block">
                    <p className="text-start font-inter font-[700] text-[16px] text-[#00000] my-0 ">Item</p>
                </div> {/*Item Picture and Name Ends Here */}

                {/*Item Quantity And Order Status */}
                <div className="ItemQttyAndStatus block ">
                    <div className="ItemQttyAndStatusWrapper grid grid-cols-2">
                        {/*Items Quantity */}
                        <div className="ItemQtty">
                            <p className="text-center font-inter font-[700] text-[16px] text-[#000000] my-0">Quantity</p>
                        </div>
                        {/*Items Order Status*/}
                        <div className="ItemStatus">
                            <p className="text-center font-inter font-[700] text-[16px] text-[#000000] my-0"> Status</p>
                        </div>
                    </div> {/*Items Quantity and Status Wrapper Ends Here */}
                </div> {/*Items Quantity And Status Ends Here */}

                </div> {/*Order ItemsWrapper Ends Here */}

                {/*Order Items Cards */}
                <div className="OrderItemsCards">
                    {OrderItems.slice(0,OrderItemsNumber).map((OrderItems) => (
                        <OrderItemCard name={OrderItems.name} img={OrderItems.img} category={OrderItems.category} quantity={OrderItems.quantity} status={OrderItems.status} />
                        ))
                    }  
                </div>
                    
            </div> {/*Order Progress Wrapper */}
        </div> // Order Progess Ends Here
    )
}

export default OrderProgress