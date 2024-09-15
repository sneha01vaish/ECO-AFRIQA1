import React from "react";

function Contact() {
  return (
    <div className="ContactsCard mx-[60px] mt-[80px]">
      <div className="ContactCardWrapper block lg:flex justify-between">
        {/*Left -- Social Media Icons Section */}
        <section className="SocialMediaIcons block w-[50%]">
          {/*Social Media Icons grid */}
          <div className="IconsGrid grid grid-cols-2 mt-[36px]">
              {/*Email */}
              <div className="EmailWrapper block">
                <div className="EmailImage h-[49px] w-[45px]">
                  <img src="/static/media/mail.png" alt="email" className="h-full w-full"/>
                </div>
                <div className="mt-[10px]">
                  <p className="text-start font-[700] text-[22px] lg:text-[32px] my-0 font-inter ">Email</p>
                </div>
                <div className="EmailLink mt-[6px]">
                  <a href="mailto:info.freshlyfarms5@gmail.com" target="_blank" className="" >
                  <p className="text-start font-[400] text-[17px] lg:text-[22px] my-0 text-[#525560] font-josefin">info.freshlyfarms</p>
                </a>
                </div>
              </div> {/*Email wrapper ends */}

              {/*Phone */}
              <div className="PhoneWrapper block">
                <div className="PhoneImage h-[49px] w-[49px]">
                  <img src="/static/media/phone.png" alt="phone" className="w-full h-full"/>
                </div>
                <div className="mt-[10px]">
                  <p className="text-start font-[700] text-[22px] lg:text-[32px] my-0 font-inter">Phone</p>
                </div>
                <div className="mt-[6px]">
                  <p className="text-start font-[400] text-[17px] lg:text-[22px] my-0 text-[#525560] font-josefin"> +254 701 234 567 </p>
                </div>
              </div> {/*Phone Wrapper Ends Here */} 
           
              {/*Office */}
              <div className="OfficeWraper block mt-[28px]">
                <div className="OfficeImage h-[49px] w-[49px]"> 
                  <img src="/static/media/location.png" alt="Office" className="h-full w-full" />
                </div>
                <div className="mt-[10px]">
                  <p className="text-start font-[700] text-[22px] lg:text-[32px] my-0 font-inter">Office</p>
                </div>
                <div className="mt-[6px]">
                  <p className="text-start font-josefin text-[#525560] font-[400] my-0 text-[17px] lg:text-[22px]"> Nairobi, Kenya </p>
                </div>
              </div> {/*Office Wrapper Ends Here */}
           
              {/*Socials */}
              <div className="SocialsWrapper block mt-[28px]">
                <div className="SocialsImage h-[49px] w-[49px]">
                    <img src="/static/media/globe.png" alt="Social Media" className="h-full w-full"/>
                </div>
                <div className="mt-[10px]">
                  <p className="text-start font-[700] text-[22px] lg:text-[32px] my-0 font-inter">Socials</p>
                </div>
                {/*Social Accounts */}
                <div className="SocialAccountsWrapper flex justify-start mt-[6px]">
                  {/*Instagram */}
                  <div className="Instagram block mr-[6px]">
                    <a href="" title="Instagram" target="_blank">
                      <div className="InstagramImage h-[37px]  w-[32px]">
                        <img src="/static/media/instagram.png" className="w-full h-full" />
                      </div>
                    </a>
                  </div>
                  {/*Facebook */}
                  <div className="Facebook block mr-[6px]">
                    <a href="https://www.facebook.com/profile.php?id=61561757183894" title="Facebook" target="_blank" >
                      <img src="/static/media/facebook.png" className="h-[37px]  w-[32px]" />
                    </a>
                  </div>
                  {/*Twitter(X) */}
                  <div className="Twitter(X) mr-[6px]">
                    <a href="https://x.com/FreshlyFarms5" title="Twitter" target="_blank" >
                      <img src="/static/media/twitter.png" className="h-[37px]  w-[32px]" />
                    </a>
                  </div>
                  {/*Tiktok */}
                  <div className="Tiktok mr-[6px]">
                    <a href="https://www.tiktok.com/@infofkexnoo?_t=8o7P91f39aI&_r=1" title="Tiktok" target="_blank" >
                      <img src="/static/media/tiktok.svg" className="h-[37px]  w-[32px]" />
                    </a>
                  </div>
                </div> {/*Social Accounts Wrapper Ends Here */}
          </div> {/*Social Medias Wrapper Ends Here */}
          </div>
        </section> {/*Contacts Icons Ends Here */}
      
        {/*Right -- Email Input Section */}
        <section className="EmailInput block w-[50%]">
          <div className="EmailInputWrapper mx-[20px]">
          {/*User Email Address */}
          <div className="EmailTitle">
            <p className="text-start text-[22px] text-black font-[700] my-0 font-inter">Email</p>
          </div>
          <div className="UserEmailInput mt-[10px] flex justify-between overflow-hidden w-full rounded-[8px] border-solid border-[1px] border-[#D5DAE1] shadow-sm shadow-[#0000000D]">
            <input placeholder="john@gmail.com" className="w-full text-[22px] font-josefin my-0 py-[10px] px-[14px] border-none outline-none " />
          </div>
          
          {/*Message Input Tittle */}
          <div className="MessageInputTitle mt-[30px]">
            <p className="text-start font-inter text-[22px] my-0 font-[500] text-[#333F51]"> Message </p>
          </div>
          {/*Message Input Box */}
          <div className="MessageInputBox mt-[10px] py-[10px] flex justify-between w-full h-[220px] rounded-[8px] object-fill overflow-hidden border-solid border-[1px] border-[#D5DAE1] shadow-sm shadow-[#0000000D]">
              <textarea  placeholder="Your message..." className="w-full h-full outline-none border-none overflow-hidden text-[16px] lg:text-[24px] font-inter px-[14px] py-[10px]"/>
          </div>

          {/*Send Message Button */}
          <div className="SendButton mt-[40px]">
            <button className="w-full rounded-[14px] bg-[#008000] border-none text-center font-inter text-[28px] my-0 py-[16px]  text-white font-[700] cursor-pointer active:scale-90 transition-all duration-100 ease-out">Send</button>
          </div>
          </div>
        </section> {/*Email Input Section */}
      </div> {/*Contact Card Wrapper Ends Here*/}
      
    </div> // Contacts Section Ends here
  );
}

export default Contact;
