import React from 'react'
import Deals from './Deals'
import Popular from './Popular'

const ProduceCenter = () => {
  return (
    <main className='bg-white/80 sm:max-w-[70%] w-full mx-auto py-16'>
        <Deals />
        <Popular />
    </main>
  )
}

export default ProduceCenter