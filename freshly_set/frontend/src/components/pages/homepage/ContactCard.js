import React from "react";

function ContactCard() {
  return (
    <div className="ContactsCard mx-[24px] lg:mx-[60px] mt-[80px]">
      <div className="ContactCardWrapper block lg:flex justify-between">
        {/*Left -- Social Media Icons Section */}
        <section className="SocialMediaIcons block w-[90%] lg:w-[54%] ">
          {/*Social Media Icons grid */}
          <div className="IconsGrid grid grid-cols-2 lg:mt-[50px]">
            {/*Email */}
            <div className="EmailWrapper block">
              <div className="EmailImage h-[38px] lg:h-[45px] w-[34px] lg:w-[42px]">
                <img src="/static/media/mail.png" alt="email" className="h-full w-full"/>
              </div>
              <div className="mt-[4px] lg:mt-[11px]">
                <p className="text-start font-[700] text-[18px] lg:text-[32px] my-0 font-inter ">Email</p>
              </div>
              <div className="EmailLink mt-[2px] lg:mt-[6px]">
                <a href="mailto:info.freshlyfarms5@gmail.com" target="_blank" className="" >
                <p className="text-start font-[400] text-[14px] lg:text-[22px] my-0 text-[#525560] font-josefin">info.freshlyfarms</p>
              </a>
              </div>
            </div> {/*Email wrapper ends */}

            {/*Phone */}
            <div className="PhoneWrapper block">
              <div className="PhoneImage h-[34px] lg:h-[46px]  w-[34px] lg:w-[45px]">
                <img src="/static/media/phone.png" alt="phone" className="w-full h-full"/>
              </div>
              <div className="mt-[10px] lg:mt-[10px]">
                <p className="text-start font-[700] text-[18px] lg:text-[32px] my-0 font-inter">Phone</p>
              </div>
              <div className="mt-[2px] lg:mt-[6px]">
                <p className="text-start font-[400] text-[14px] lg:text-[22px] my-0 text-[#525560] font-josefin"> +254 701 234 567 </p>
              </div>
            </div> {/*Phone Wrapper Ends Here */} 
          
            {/*Office */}
            <div className="OfficeWraper block mt-[20px] lg:mt-[28px]">
              <div className="OfficeImage h-[38px] lg:h-[46px]  w-[37px] lg:w-[45px]"> 
                <img src="/static/media/location.png" alt="Office" className="h-full w-full" />
              </div>
              <div className="mt-[4px] lg:mt-[10px]">
                <p className="text-start font-[700] text-[18px] lg:text-[32px] my-0 font-inter">Office</p>
              </div>
              <div className="mt-[2px] lg:mt-[6px]">
                <p className="text-start font-josefin text-[#525560] font-[400] my-0 text-[14px] lg:text-[22px]"> Nairobi, Kenya </p>
              </div>
            </div> {/*Office Wrapper Ends Here */}
          
            {/*Socials */}
            <div className="SocialsWrapper block mt-[20px] lg:mt-[28px]">
              <div className="SocialsImage h-[33px] lg:h-[46px]  w-[32px] lg:w-[45px]">
                  <img src="/static/media/globe.png" alt="Social Media" className="h-full w-full"/>
              </div>
              <div className="mt-[9px] lg:mt-[10px]">
                <p className="text-start font-[700] text-[18px] lg:text-[32px] my-0 font-inter">Socials</p>
              </div>
              {/*Social Accounts */}
              <div className="SocialAccountsWrapper flex justify-start mt-[2px] lg:mt-[6px]">
                {/*Instagram */}
                <div className="Instagram block mr-[4px] lg:mr-[6px]">
                  <a href="" title="Instagram" target="_blank">
                    <div className="InstagramImage h-[25px] lg:h-[37px] w-[22px] lg:w-[32px]">
                      <img src="/static/media/instagram.png" className="w-full h-full" />
                    </div>
                  </a>
                </div>
                {/*Facebook */}
                <div className="Facebook block mr-[4px] lg:mr-[6px]">
                  <a href="https://www.facebook.com/profile.php?id=61561757183894" title="Facebook" target="_blank" >
                    <div className="FacebookImage h-[25px] lg:h-[37px] w-[23px] lg:w-[32px]">
                        <img src="/static/media/facebook.png" className="w-full h-full" />
                    </div>
                  </a>
                </div>
                {/*Twitter(X) */}
                <div className="Twitter(X) mr-[4px] lg:mr-[6px]">
                  <a href="https://x.com/FreshlyFarms5" title="Twitter" target="_blank" >
                    <div className="Twitter(X)Image h-[25px] lg:h-[37px] w-[22px] lg:w-[32px]">
                        <img src="/static/media/twitter.png" className="h-full w0full" />
                    </div>
                  </a>
                </div>
                {/*Tiktok */}
                <div className="Tiktok mr-[4px] lg:mr-[6px]">
                  <a href="https://www.tiktok.com/@infofkexnoo?_t=8o7P91f39aI&_r=1" title="Tiktok" target="_blank" >
                    <div className="TiktokImage h-[25px] lg:h-[37px] w-[22px] lg:w-[32px]">
                      <img src="/static/media/tiktok.svg" className="h-full w-full" />
                    </div>
                  </a>
                </div>
              </div> {/*Social Accounts Wrapper Ends Here */}
            </div> {/*Social Wrapper Ends Here */}
          </div> {/*Icons Grid Ends Here */}
        </section> {/*Contacts Icons Ends Here */}
      
        {/*Right -- Email Input Section */}
        <section className="EmailInput block mt-[40px] lg:mt-0 lg:w-[46%]">
          <div className="EmailInputWrapper mx-[20px] lg:mx-[20px]">
            {/*User Email Address */}
            <div className="EmailTitle">
              <p className="text-start text-[22px] text-black font-[700] my-0 font-inter">Email</p>
            </div>
            <div className="UserEmailInput mt-[6px] lg:mt-[10px] flex justify-between overflow-hidden w-full rounded-[6px] lg:rounded-[8px] border-solid border-[1px] border-[#D5DAE1] shadow-sm shadow-[#0000000D]">
              <input placeholder="john@gmail.com" className="w-full text-[18px] lg:text-[22px] font-josefin my-0 py-[10px] px-[14px] border-none outline-none " />
            </div>
            {/*Message Input Tittle */}
            <div className="MessageInputTitle mt-[20px] lg:mt-[30px]">
              <p className="text-start font-inter text-[22px] my-0 font-[500] text-[#333F51]"> Message </p>
            </div>
            {/*Message Input Box */}
            <div className="MessageInputBox mt-[6px] lg:mt-[10px] py-[10px] flex justify-between w-full h-[220px] rounded-[6px] lg:rounded-[8px] object-fill overflow-hidden border-solid border-[1px] border-[#D5DAE1] shadow-sm shadow-[#0000000D]">
                <textarea  placeholder="Your message..." className="w-full h-full resize-none outline-none border-none overflow-hidden rounded-[6px] lg:rounded-[8px] text-[16px] lg:text-[24px] font-inter mx-[8px] px-[14px] lg:py-[10px]"/>
            </div>

            {/*Send Message Button */}
            <div className="SendButton mt-[20px] lg:mt-[40px]">
              <button className="w-full rounded-[10px] lg:rounded-[14px] bg-[#008000] border-none text-center font-inter text-[24px] lg:text-[28px] my-0 py-[8px] lg:py-[16px]  text-white font-[700] cursor-pointer active:scale-90 transition-all duration-100 ease-out">Send</button>
            </div>
          </div> {/*Email Input Wrapper Ends Here */}
        </section> {/*Email Input Section */}
      </div> {/*Contact Card Wrapper Ends Here*/}
      
    </div> // Contacts Section Ends here
  );
}

export default ContactCard;
