import React from 'react'

function Reviews2() {
  return (
    <div className="flex justify-center">
        <div className="block">
            <h4 className ="text-[#008000] text-[45px] text-center" >Our reviews</h4>
           <h5 className='text-black text-[22px] text-center w-[829px] font=[600]'>These are some of the reviews we got from our clients’ side on how Freshly Farms helped them grow both economically and knowledgewise in farming</h5>
           <div className="flex space-x-[20px]">
        <div className="block space-y-[12px]">
        <img className="h-[400px] w-[200px] object-cover" src="/static/media/image1.jpg" alt="image1" />
        <p className='text-black text-[24px]  font-[700]'>Stacey Gathoni</p>
        <p className='text-black text-[16px] font-[600] w-[199px]'>  "Freshly Farms has revolutionized my urban farming approach. Their support transformed my small garden into a thriving oasis."</p>
        </div>
        <div className="block space-y-[12px]">
        <img className="h-[400px] w-[200px] object-cover" src="/static/media/image2.jpg" alt="image2" />
        <p className='text-black text-[24px]  font-[700]'>Sheila Mueni</p>
        <p className='text-black text-[16px] font-[600] w-[199px]'> "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests."</p>
        </div>
        <div className="block space-y-[12px]">
        <img className="h-[400px] w-[200px] object-cover" src="/static/media/image3.jpg" alt="image3" />
        <p className='text-black text-[24px]  font-[700]'>Charles Kisika</p>
        <p className='text-black text-[16px] font-[600] w-[199px]'>  "Freshly Farm's high-quality resources and support have significantly improved my urban farming skills, leading to healthier crops and increased yields."</p>
        </div>
        <div className="block space-y-[12px]">
        <img className="h-[400px] w-[200px] object-cover" src="/static/media/image4.jpg" alt="image4" />
        <p className='text-black text-[24px]  font-[700]'>Brian Ouma</p>
        <p className='text-black text-[16px] font-[600] w-[199px]'>  "Freshly Farm's expertise has empowered our local farmers, improving the quality and quantity of our community garden's harvests."</p>
        </div>


           </div>
          
           <div className='flex justify-center '> <button className='w-[272px] h-[70px] bg-[#008000] rounded-[15px] mt-[62px] text-white text-[25px] '>Read More</button></div>
          
           <div className="flex justify-center mt-[38px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="145" height="32" viewBox="0 0 145 32" fill="none">
                    <ellipse cx="12.9464" cy="12" rx="12.9464" ry="12" fill="#D9D9D9"/>
                    <ellipse cx="68.1849" cy="12" rx="12.9464" ry="12" fill="#D9D9D9"/>
                    <ellipse cx="127.738" cy="16" rx="17.2619" ry="16" fill="#008000"/> 
                </svg>
                </div>
          
          
           </div> 
        
      
           
  </div>
  )
  }
  export default Reviews2
