import React from 'react'
import bigGreenCheck from '../assets/images/big-green-check.png';

const Home = () => {
  return (
    <div className='h-screen w-full flex gap-5 flex-col justify-center items-center'>
      <figure className=''>
        <img src={bigGreenCheck} alt="" className='w-40' />
      </figure>
      <p className='text-5xl font-bold'>Application Submitted</p>

      <span className='text-center space-y-2 text-xl'>
        <p className='text-gray-500'>Thanks for your interest!</p>
        <p className='text-gray-500'>Our review team will review your application and call you for interview</p>
      </span>

    </div>
  )
}

export default Home