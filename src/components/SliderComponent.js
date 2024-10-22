import React from 'react'

const SliderComponent = () => {
  return (
    <div className='mx-auto bg-white t-10  rounded-lg shadow-md overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full px-5 py-8 md:px-12 md:py-10'>
            <div className='w-full md:w-1/2 mb-5 md:mb-0'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Modern Furniture for Minimalist Lovers</h1>
                <p className='text-gray-700 leading-relaxed'>Experience the ultimate relaxation with our collection of modern and stylish furniture, designed to bring elegance and comfort to your home.</p>
            </div>

            <div className='w-full md:w-1/2'>
               <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=' className='w-full h-auto rounded-lg object-cover' alt='test image furniture'/>
            </div>
        </div>
    </div>
  )
}

export default SliderComponent
