import React, { useContext } from 'react'
import { ProductsSideBarContext } from '../../context/PageContext';

function Banner() {
    const [productsSidebarOpen, setProductsSidebarOpen] = useContext(ProductsSideBarContext);

  return (
<div className={productsSidebarOpen ? 'mx-auto lg:mx-[0px]  h-[258.12px] w-[225.39px] lg:w-[250.09px] lg:h-[286.42px]  border border-solid bg-[#00AA5B] rounded-xl border-slate-200 text-white/80 shadow-sm flex flex-col justify-start items-center p-3 py-8':'mx-auto lg:mx-[0px] h-[258.12px] w-[225.39px] lg:w-[335.4px] lg:h-[384.12px]  border border-solid bg-[#00AA5B] rounded-xl border-slate-200 text-white/80 shadow-sm flex flex-col justify-start items-center p-3 py-8'}>
                    <p className='text-xl font-bold capitalize my-1'>Deal of the week</p>
                    <p className="flex gap-2">
                        <span className='flex flex-col justify-start items-start'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>{addZero(days)} :</span>
                            <span className="text-[12px]">Days</span>
                        </span>
                        <span className='flex flex-col justify-start items-start'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>{addZero(hours)} :</span>
                            <span className="text-[12px]">Hours</span>
                        </span>
                        <span className='flex flex-col justify-start items-start'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>{addZero(minutes)} :</span>
                            <span className="text-[12px]">Mins</span>
                        </span>
                        <span className='flex flex-col  justify-start items-start'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>{addZero(seconds)}</span>
                            <span className="text-[12px]">Secs</span>
                        </span>
                    </p>

                    <p className='uppercase font-bold text-center font-josefin text-base mt-0'>Orders above <span className='text-red-600'>ksh 2000</span> <span className='block'>get free delivery</span>
                    </p>
                    <div className='h-[180px] flex justify-center'>
                        <img
                            className='max-w-full h-full overflow-hidden px-1 py-2 object-cover'
                            src='/static/media/image117.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>  )
}

export default Banner