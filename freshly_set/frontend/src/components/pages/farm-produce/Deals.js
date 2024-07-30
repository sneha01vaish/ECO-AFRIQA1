
import { GoArrowRight } from "react-icons/go";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export default function Deals() {
    return (
        <main className="w-full">
            <h1 className="text-3xl sm:text-5xl text-green-700 text-center">Farm Produce Center</h1>
            <div className="w-full flex flex-wrap justify-center gap-8 py-8">

                <div className='w-[320.00px] h-[340.00px] border border-solid bg-emerald-600 rounded-xl border-slate-200 text-white/80 shadow-sm flex flex-col justify-start items-center p-3 py-8'>
                    <p className='text-xl font-bold capitalize my-1'>Deal of the week</p>
                    <p className="flex gap-2">
                        <span className='flex flex-col'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>00 :</span>
                            <span className="text-[12px]">Days</span>
                        </span>
                        <span className='flex flex-col justify-start items-start'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>05 :</span>
                            <span className="text-[12px]">Hours</span>
                        </span>
                        <span className='flex flex-col'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>08 :</span>
                            <span className="text-[12px]">Mins</span>
                        </span>
                        <span className='flex flex-col'>
                            <span className='text-3xl font-bold tracking-wide text-nowrap'>45 </span>
                            <span className="text-[12px]">Secs</span>
                        </span>
                    </p>

                    <p className='uppercase font-bold text-center font-josefin text-base mt-0'>Orders above <span className='text-red-600'>ksh 2000</span> <span className='block'>get free delivery</span>
                    </p>
                    <div className='h-[180px] flex justify-center'>
                        <img
                            className='max-w-full h-full overflow-hidden px-1 py-2'
                            src='/static/media/image117.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>

                <div className='w-[320.00px] h-[340.00px] border border-solid bg-zinc-900 rounded-xl border-slate-200 text-white shadow-sm flex flex-col justify-start items-center p-3 py-8'>

                    <p className='text-xl font-bold capitalize my-1 text-green-600'>Fruits sale !!!</p>
                    <p className="font-thin my-2">
                        Buy 3 get 2 free !!
                    </p>

                    <button className='text-green-600 text-sm px-6 py-2 my-3 rounded-xl font-bold border-none flex bg-white justify-center items-center cursor-pointer'>Shop Now <GoArrowRight className='px-1 text-xl' /> </button>

                    <div className='flex justify-center'>
                        <img
                            className='w-full scale-125 overflow-hidden px-1 py-2'
                            src='/static/media/image120.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>
            
                <div className='w-[320.00px] h-[340.00px] border border-solid bg-red-600 rounded-xl border-slate-200 text-white shadow-sm flex flex-col justify-start items-center p-3 py-8'>

                    <p className='text-xl font-bold capitalize my-1 text-white'>Fresh Vegetables</p>
                    <p className="font-thin my-1">
                        Upto <span className='bg-black/40 text-lg font-bold rounded-md p-1'>10% off</span>
                    </p>

                    <button className='text-green-600 text-sm px-6 py-2 my-3 rounded-xl font-bold border-none flex bg-white justify-center items-center cursor-pointer'>Shop Now <GoArrowRight className='px-1 text-xl' /> </button>

                    <div className='h-[180px]'>
                        <img 
                            className='w-full m-0 h-full overflow-hidden px-1 py-2'
                            src='/static/media/image-126.png'
                            alt='farm produce sales'
                        />
                    </div>
                </div>
            </div>


            <div className='flex justify-between items-center py-4 px-0'>
                <p className='text-green-600 text-xl font-bold'>Categories</p>
                <div className='text-green-600 text-xl font-bold flex'>
                    <button className='border-none text-green-600 text-[48.00px] font-bold bg-transparent cursor-pointer p-0'><RiArrowLeftSLine /></button>
                    <button className='border-none text-green-600 text-[48.00px] font-josefin bg-transparent cursor-pointer p-0'><RiArrowRightSLine /></button>
                </div>
            </div>
        </main>
    )
} 
