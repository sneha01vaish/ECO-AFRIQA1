import React from 'react'

export default function Popular() {
  return (
    <section>
      <div className='flex flex-wrap justify-between items-center px-2 gap-2'>
        <div className='bg-green-200 w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg'>
          <img
            className='w-[112px]'
            src='/static/media/c-1.png'
            alt='Fresh fruits'
          />
          <p className='font-bold text-black/80'>Fresh Fruits</p>
        </div>
        <div className='bg-green-200 w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg'>
          <img
            className='w-[136px] max-h-[140px] overflow-hidden'
            src='/static/media/c-2.png'
            alt='Fresh fruits'
          />
          <p className='font-bold text-black/80'>Fresh Fruits</p>
        </div>
        <div className='bg-green-200 w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg'>
          <img
            className='w-[156px] max-h-[140px] overflow-hidden'
            src='/static/media/c-3.png'
            alt='Fresh fruits'
          />
          <p className='font-bold text-black/80 mt-1'>Fresh Fruits</p>
        </div>
        <div className='bg-green-200 w-[160.00px] h-[160.00px] flex flex-col justify-center items-center rounded-lg'>
          <img
            className='w-[152px] max-h-[140px] overflow-hidden scale-105'
            src='/static/media/c-4.png'
            alt='Fresh fruits'
          />
          <p className='font-bold text-black/80'>Fresh Fruits</p>
        </div>
      </div>
    </section>
  )
}
