import React from "react";
import { Link } from "react-router-dom";
import NavAuthenticated from '../../Nav/NavAuthenticated';
import FreshlyFooter from "../../footer/FreshlyFooter";
import Consultants from "./Consultants.json";
import ConsultantCard from "./ConsultantCard";

function Consultation() {
    return (
        <div className="Consultations">
            <NavAuthenticated /> {/*The Navbar */}
            <div className="InnerContents mt-[100px] ">
                <div className="Top Contents block lg:flex justify-end relative">
                    <div className="PageHeroPicture block w-[40%]">
                        <div className="ConsultantHero absolute z-20 top-[130px]">
                            <img src="/static/media/consultant1.png" alt="Consultant" className="" />
                        </div>
                        <div className="BottomTriangle relative top-[40px] -left-[40px] z-10">
                            <img src="/static/media/consultantEllipse.png" alt="" className="" />
                        </div>

                    </div> {/*Page Hero Picture ands here  */}

                    <div className="PageHeroContents block w-[60%]">
                        <div className="Title mt-[100px] mr -[100px]">
                            <p className="text-start font-inter font-[700] px-[80px] text-[40px] text-[#008000]">Get Your Farm Problems Fixed By Our Great Consultants Across Kenya</p>
                        </div>

                        {/*Consultants Button */}
                        <div className=" flex justify-center  mt-[60px] ">
                            <Link to="/" className="ConsultantsButton bg-[#008000] rounded-[10px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                                <p className="text-center font-inter font-[700] my-0 px-[28px] py-[20px] text-[30px] text-white">See Consultants</p>
                            </Link>
                        </div>

                    </div> {/*Page Hero contents Ends Here */}

                </div> {/*Top Contents Ends Here */}
                {/*Bottom Part */}
                <div className="AllCards grid grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[60px] mt-[100px] bg-white mx-[20px]">
                    {Consultants.slice(0,9).map((Consultants) => (
                        <ConsultantCard img={Consultants.img} name={Consultants.name} field={Consultants.field} description={Consultants.description} rate={Consultants.rate} />
                        ))
                    }  
                </div> {/*All cards Ends Here */}
            </div> {/*InnerContents Ends Here */}

            {/*Main Footer */}
            <div className="PageFooter mt-[30px]">
                <FreshlyFooter />
            </div>
            
        </div> //Consultations Page ends here
  )  
};

export default Consultation