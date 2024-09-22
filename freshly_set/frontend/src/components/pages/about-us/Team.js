import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Team() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    { name: 'Malaika Muchiri', role: 'Chief Executive Officer', testimonial: "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests." },
    { name: 'Malaika Muchiri', role: 'Chief Executive Officer', testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: 'Malaika Muchiri', role: 'Chief Executive Officer', testimonial: "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests." },
    { name: 'Malaika Muchiri', role: 'Finance Team Member', testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: 'Malaika Muchiri', role: 'Finance Team Member', testimonial: "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests." },
    { name: 'Malaika Muchiri', role: 'Tech Team Member', testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: 'Malaika Muchiri', role: 'Tech Team Member', testimonial: "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests." },
    { name: 'Malaika Muchiri', role: 'Tech Team Member', testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: 'Malaika Muchiri', role: 'Tech Team Member', testimonial: "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests." },
    { name: 'Malaika Muchiri', role: 'Tech Team Member', testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: 'Malaika Muchiri', role: 'Tech Team Member', testimonial: "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests." },
    { name: 'Malaika Muchiri', role: 'Sales Team Member', testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  // Group members by role
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {});

  const renderMembers = (members) => (
    members.map((member, index) => (
      <div
        key={index}
        className="block mx-auto w-[204px] space-y-[12px] relative group"
        onMouseEnter={() => setHoveredMember(index)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        {/* Testimonial */}
        <p className='text-black text-[16px] font-[300] w-[199px] font-josefin leading-[20.8px] text-start mb-[10px]'>
          {member.testimonial}
        </p>
        {/* Image */}
        <div
          className={`w-[286px] h-[380px] gap-[10px] border-radius-[12px] flex-shrink-0 border-[#008000] transition-all duration-500 ${hoveredMember === index ? 'filter-none' : 'filter grayscale'}`}
          style={{ backgroundImage: "url('/static/media/teamMember2.png')" }}
        ></div>
        {/* Name */}
        <p className='text-black text-[24px] font-[700] font-inter'>{member.name}</p>
        {/* Role */}
        <p className='text-[#008000] text-[20px] font-[700] font-inter'>{member.role}</p>
        {/* Link Button */}
        {hoveredMember === index && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="w-[120px] h-[40px] bg-[#008000] rounded-[8px] text-white text-[14px] border-none flex items-center justify-center">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="w-[20px] h-[20px] mr-[5px]" />
              View Profile
            </button>
          </div>
        )}
      </div>
    ))
  );

  const renderGroupSection = (title, role, count, reverse = false) => (
    <div className={`mt-[71px] ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col lg:flex-row lg:space-x-10`}>
      <div className="lg:w-1/2">
        <h6 className="text-[#008000] text-[35px] text-center font-inter mb-[20px]">{title}</h6>
        <div className={`flex flex-col lg:flex-row lg:space-x-6 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {renderMembers(groupedMembers[role]?.slice(0, count) || [])}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="block mt-[60px] lg:mt-[100px]">
      <h5 className="text-[#008000] text-[45px] text-center font-inter my-0">
        Meet Our Team
      </h5>

      {/* Display first 3 CEOs without testimonials initially */}
      {!showAll && (
        <div className="block space-y-[100px] mt-[40px] lg:mt-[60px]">
              <div className="block lg:flex flex-wrap justify-between w-[100%] space-y-[20px] lg:space-y-[0px]">
          {groupedMembers['Chief Executive Officer']?.slice(0, 3).map((member, index) => (
            <Link to="/Details" key={index} className="block cursor-pointer mx-auto w-[204px] space-y-[12px] relative">
              <div
                className=" bg-center w-[286px] h-[380px] gap-[10px] border-radius-[12px] flex-shrink-0 border-[#008000] filter grayscale"
                style={{ backgroundImage: "url('/static/media/teamMember2.png')" }}
              ></div>
              <p className='text-black text-[24px] font-[700] font-inter'>{member.name}</p>
              <p className='text-[#008000] text-[20px] font-[700] font-inter'>{member.role}</p>
            </Link>
          ))}
        </div>

          <div className={showAll ? "block lg:flex flex-wrap justify-between w-[100%] space-y-[20px] lg:space-y-[0px]":"hidden"}>
            {groupedMembers['Chief Executive Officer']?.slice(0, 3).map((member, index) => (
              <div key={index} className="block mx-auto w-[204px] space-y-[12px] relative">
                <div
                  className=" bg-center w-[286px] h-[380px] gap-[10px] border-radius-[12px] flex-shrink-0 border-[#008000] filter grayscale"
                  style={{ backgroundImage: "url('/static/media/teamMember2.png')" }}
                ></div>
                <p className='text-black text-[24px] font-[700] font-inter'>{member.name}</p>
                <p className='text-[#008000] text-[20px] font-[700] font-inter'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display "View All" button only if not showing all */}
      {!showAll && (
       
        <div className='flex justify-center mt-[120px]'>
           <Link to="/Details " className='absolute block  mx-[80px] -mt-[60px] lg:-mt-[180px]'>
          
          <button
            onClick={() => setShowAll(true)}
            className='w-[272px] cursor-pointer h-[70px] bg-[#008000] rounded-[15px] mt-[40px] text-white text-[25px] border-none'
          >


            View All
           
          </button>
          </Link>
        </div>
      )}

      {/* Display all team members in sections with testimonials */}
      {showAll && (
        <div
          className={`transition-transform transform ${showAll ? 'translate-x-0' : 'translate-x-full'} duration-500 ease-in-out`}
          style={{ opacity: showAll ? 1 : 0 }}
        >
          {renderGroupSection('Executive Team', 'Chief Executive Officer', 3)}

          {renderGroupSection('Finance Team', 'Finance Team Member', 2, true)}

          <div className="mt-[71px]">
            <h6 className="text-[#008000] text-[35px] text-center font-inter mb-[20px] lg:space-y-[0px]">Tech Team</h6>
            <div className="grid grid-cols-3 gap-6">
              {renderMembers(groupedMembers['Tech Team Member']?.slice(0, 6) || [])}
            </div>
          </div>

          {renderGroupSection('Sales Team', 'Sales Team Member', 1)}
        </div>
      )}
    </section>
  );
}

export default Team;
