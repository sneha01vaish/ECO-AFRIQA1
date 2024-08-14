import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

function Contact() {
  return (

    <div className="Contacts-section items-center mt-[62px] lg:mx-[65px]">
      <div className="Contacts-Title flex justify-between lg:w-[948px] lg:mx-auto mx-6 mb-[30px] ">
        <p className="text-[#008000] font-inter text-[20px] lg:text-[45px] font-[700] mb-0 text-start">Want Your Articles Be Featured On Our Blog? Contact Us</p>
      </div>

      <div className="block lg:flex w-[100%] justify-between ">

      {/* Social Medias */}
      <div className=" ml-[40px] block space-y-[29px] ">

        {/*Socials upper segment */}
        <div className="flex justify-between lg:w-[478px]">

          {/* mail */}
          <div classsName="block">
            <img className="h-[49px] w-[45px] space-x-1" src="/static/media/mail.png" alt="email" />
              <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px] lg:-ml-[80px] ">Email</p>
              
              <a href="mailto:info.freshlyfarms5@gmail.com" className="font-normal no-underline" target="_blank">
                <p className="font-[400] text-[17px] lg:text-[22px] text-[#525560] font-josefin -mt-[10px]">info.freshlyfarms</p>
              </a>
          </div>

          {/* Call */}
          <div classsName="block -ml-[30px]">
            <img className="h-[49px] w-[49px]" src="/static/media/phone.png" alt="phone" />
            <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px]  mr-[90px]">Phone</p>
            <p className="font-[400] text-[17px] lg:text-[22px] text-[#525560] font-josefin -mt-[10px]">+254 701 234 567 </p>
          </div>
        </div>

        {/* Socials Lower Segment */}
        <div className="flex justify-between lg:w-[478px]">

          {/* Location */}
          <div classsName="block">
            <img className="h-[49px] w-[49px]" src="/static/media/location.png" alt="Office" />
            <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px] lg:-ml-[80px]">Office</p>
            <p className=" font-josefin text-[#525560] font-[400] text-[17px] lg:text-[22px] -mt-[10px]"> Nairobi, Kenya </p>
          </div>

          {/* Social Media Accounts */}
            <div classsName="block ">
              
              <img className="h-[49px] w-[49px] mr-[90px]" src="/static/media/globe.png" alt="Social Media" />
              <p className="font-[700] text-[22px] lg:text-[32px] -mt-[5px] font-inter mb-[10px] mr-[90px]">Socials</p>
              <div className=" space-x-[5px]  ">

              {/* Instagram */}
              <a href="#" title="Instagram" target="_blank">
                <img src="/static/media/instagram.png" className="h-[37px]  w-[32px]" />
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61561757183894" title="Facebook" target="_blank">
                <img src="/static/media/facebook.png" className="h-[37px]  w-[32px]" />
              </a>

              {/* Twitter */}
              <a href="https://x.com/FreshlyFarms5" title="Twitter" target="_blank" >
                <img
                  src="/static/media/twitter.png"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              {/* Tiktok */}
              <a href="https://www.tiktok.com/@infofkexnoo?_t=8o7P91f39aI&_r=1" title="Tiktok" target="_blank" >
                <img src="/static/media/tiktok.svg" className="h-[37px]  w-[32px]" />
              </a>
             </div>        {/* Accounts for Social media ends here */}
          </div>           {/* Socials Lower Segment ends here */}

      </div >    {/* Social Medias ends here */}
      </div>
      
      {/* Users' Mailing Section */}
      <div className="Mailing-Section block  mx-[10vw]   lg:mr-[84px] ">

        {/* User email address*/}
        <p className="text-[22px] text-black font-[700] font-inter">Email</p>
        <input placeholder="john@gmail.com" className="h-[46px] w-[80vw] lg:w-[474px] lg:h-[46px] py-[10px] px-[14px] rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none" />
        <p className="font-inter text-[16px] font-[500] text-[#333F51]"> Message </p>
        
        {/* User text input */}
        <textarea className="h-[220px] w-[80vw] lg:h-[220px] lg:w-[474px]  rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none text-[16px] lg:text-[24px] font-inter px-[14px] py-[10px]" placeholder="Your message..." />

        {/* User Send Button */}
        <div className="flex justify-center mx-[2vw] lg:mx-0">
          <button className="h-[56px] w-[80vw] lg:w-[474px] rounded-[14px] bg-[#008000] border-none font-inter text-[25px]  text-white font-[700] mt-[41px]">Send</button>
        </div>
      </div>

    </div>

   </div>
    
  );
}

export default Contact;
