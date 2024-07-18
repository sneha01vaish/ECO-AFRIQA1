import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className="hidden lg:flex w-[100%] justify-between">
      <div className="mt-[132px] ml-[40px] block space-y-[29px]">
        <div className="flex space-x-[256px]">
          
          <div classsName="block">
            <img
              className="h-[49px] w-[45px]"
              src="/static/media/mail.svg"
              alt="email"
            />
            <p className="font-[720] text-[72] -mt-[5px] font-inter">Email</p>
            <a href="mailto:info@freshlyfarms" className="font-normal no-underline" target="_blank">
              <p className="font-[22] text-[400] text-[#525560] font-josefin -mt-[10px]">info@freshlyfarms</p>
            </a>
          </div>

          <div classsName="block">
            <img
              className="h-[49px] w-[45px]"
              src="/static/media/call.svg"
              alt="phone"
            />
            <p className="font-[720] text-[72] -mt-[5px] font-inter">Phone</p>
            <p className="font-[22] text-[400] text-[#525560] font-josefin -mt-[10px]">
              {" "}
              +254 701 234 567{" "}
            </p>
          </div>
        </div>

        <div className="flex space-x-[256px]">
          <div classsName="block">
            <img
              className="h-[49px] w-[45px]"
              src="/static/media/location.svg"
              alt="Office"
            />
            <p className="font-[720] text-[72] -mt-[5px] font-inter">Office</p>
            <p className=" font-josefin text-[#525560] font-[22] text-[400] -mt-[10px]">
              {" "}
              Nairobi, Kenya{" "}
            </p>
          </div>

          <div classsName="block">
            <img
              className="h-[49px] w-[45px]"
              src="/static/media/globe.svg"
              alt="Social Media"
            />
            <p className="font-[720] text-[72] -mt-[5px] font-inter">Socials</p>

            <div className="flex items-center space-x-[5px] ">
              <a href="" title="Instagram" target="_blank">
                <img
                  src="/static/media/instagram.svg"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61561757183894"
                title="Facebook"
                target="_blank"
              >
                <img
                  src="/static/media/facebook.svg"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              <a
                href="https://x.com/FreshlyFarms5"
                title="Twitter"
                target="_blank"
              >
                <img
                  src="/static/media/twitter.svg"
                  className="h-[37px]  w-[32px]"
                />
              </a>

              <a
                href="https://www.tiktok.com/@infofkexnoo?_t=8o7P91f39aI&_r=1"
                title="Tiktok"
                target="_blank"
              >
                <img
                  src="/static/media/tiktok.svg"
                  className="h-[37px]  w-[32px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block mt-[94px] mr-[84px] ">
        <p className="text-[22px] text-black font-[700] box-border font-inter">
          {" "}
          Email{" "}
        </p>
        <input
          placeholder="john@gmail.com"
          className="w-[474px] h-[46px] py-[10px] px-[14px] rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none"
        />

        <p className="font-inter text-[16] font-[500] text-[#333F51]">
          {" "}
          Message{" "}
        </p>
        <textarea
          className="h-[220px] w-[474px]  rounded-[8px] border-solid border-[1px] border-[#D5DAE1] focus:outline-none font-inter py-[10px] px-[14px]"
          placeholder="Your message..."
        />

        <div className="flex h-[56px] w-[474px] bg-[#008000] rounded-[14px] py-[16px] px-[28px] mt-[24px] justify-center box-border items-center flex-shrink-0 ">
          <p className="font-inter text-[25px] font-[700] text-[#FFF] ">Send</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
