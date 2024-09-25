import React from 'react';
import LineChart from './utils/LineChart';

function VerifiedFarmers() {
  //Name of the Account User
  const Username = "Jane";

  //Total Income and Total Sales
  const TotalIncome = "KSH 18,500";
  const TotalSales = "KSH 30,000";

  return (
    <div className='VerifiedFarmers pb-[80px] bg-blue-40'>
      <div className='VerifiedFarmersWrapper  mr-[140px] bg-red-40'>
        {/*Page Header */}
        <div className='PageHeader bg-yellow-30 '>
          <div className='Greetigs'>
              <p className='text-start font-[700] font-inter text-[#008000] text-[22px] my-0 '>Hello {Username}, Welcome To Your Dashboard</p>
          </div>
          <div className='Descriptions mt-[30px]'>
            <p className='text-start font-[800] font-inter text-[#00000080] text-[15px] my-0 '>View and manage your sales, products and income</p>
          </div>
        </div>{/*Page Header */}

        {/*Total Sales and Income */}
        <div className='SalesAndIncome mt-[40px] bg-slate-50'>
          <div className='CntentsWrapper grid grid-cols-2'>
            {/*Total Income */}
            <div className='TotalIncome block border-y-[1px] border-black border-0 border-solid'>
              <div className='IncomeWrapper my-[30px] flex justify-center'>
                <div className='IcomeContents block'>
                  <div className='TextWrapper flex justify-start'>
                    <p className='text-start font-[700] font-inter text-[#000000] text-[22px] my-0 mr-[20px] '>TOTAL INCOME:</p>
                    <p className='IncomeFigure text-start font-[700] font-inter text-[#FF0C1A] text-[22px] my-0 '>{TotalIncome}</p>
                  </div>
                </div>
              </div> {/*IncomeWrapper */}
            </div> {/*Total Income */}
          
            {/*Total Income */}
            <div className='TotalIncome block border-y-[1px] border-l-[1px] border-black border-0 border-solid '>
              <div className='IncomeWrapper my-[30px] flex justify-center'>
                <div className='IcomeContents block'>
                  <div className='TextWrapper flex justify-start'>
                    <p className='text-start font-[700] font-inter text-[#000000] text-[22px] my-0 mr-[20px] '>TOTAL SALES:</p>
                    <p className='IncomeFigure text-start font-[700] font-inter text-[#FF0C1A] text-[22px] my-0 '>{TotalSales}</p>
                  </div>
                </div>
              </div> {/*SalesWrapper */}
            </div> {/*Total Sales */}
          </div> {/*ContentsWrapper */}
        </div> {/*Total Sales and Income */}
          
        {/*Progress Graph */}
        <div className='ProgressGraph mt-[30px] bg-yellow-30'>
          <div className='GraphTitle'>
            <p className='text-start font-[700] font-inter text-[#000000] text-[20px] my-0 '>Your Performance</p>
          </div>

          {/*Graph Body */}
          <div className='GraphBody mt-[20px] '>
           <LineChart />
          </div>

        </div> {/*Progress Graph */}
          
          
       
      </div> {/*Verified Farmers Wrapper */}
    </div> //Verified Farmers
  )
}

export default VerifiedFarmers