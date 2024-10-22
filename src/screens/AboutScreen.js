import React from 'react'

const AboutScreen = () => {
  return (
    <div className='container mx-auto bg-gray-100 rounded'>
      <div className='flex md:flex-row flex-col justify-between items-center w-full md:h-screen h-full px-5 py-8 md:px-10 md:py-10 hover:rotate-6 ease-in-out duration-300 hover:scale-105'>
        <div className='w-full md:w-1/2 mb-5 md:mb-0 hover:-rotate-6 ease-in-out duration-300 hover:scale-105'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>About US</h1>
          <p className='text-black leading-relaxed whitespace-wrap'>
            We provide the finest modern furniture to make your home look elegant and stylish 
            with our collection of modern and stylish furniture, designed to bring elegance and comfort to your home 
            And also we provide the finest modern furniture to make your home look elegant and stylish with our collection of modern and stylish furniture
            With our collection of modern and stylish furniture.
          </p>
        </div>

        <div>
          <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=' alt='furniture' className='w-full h-auto rounded-lg object-cover hover:-rotate-6 ease-in-out duration-300 hover:scale-105'/>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen