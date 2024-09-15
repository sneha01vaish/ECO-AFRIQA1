import React from "react";
import ContactCard from "../homepage/ContactCard";

function Contact() {
  return (
    <div className="Contacts-section  mt-[62px] ">
      <div className="ContactsWrapper items-center lg:mx-[65px]">
          <div className="Contacts-Title flex justify-between lg:w-[948px] lg:mx-auto mx-6 ">
            <p className="text-[#008000] font-inter text-[20px] lg:text-[45px] font-[700] mb-0 text-start">Want Your Articles Be Featured On Our Blog? Contact Us</p>
          </div>
      </div>
      {/*Contact Card From The Homepaage */}
      <div className="ContactCard -mt-[50px]">
        <ContactCard />
      </div>
      

   </div> //Blogs Contacts Ends Here   
  );
}

export default Contact;
