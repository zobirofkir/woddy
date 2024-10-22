import React from 'react'

const LastProduct = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between w-full px-5 py-8'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Our New Exclusive Collections</h1>
            <p className='text-gray-700 text-xl'>We provide the finest modern furniture to make your home look elegant and stylish.</p>
        </div>

        <div className='flex justify-center gap-10 w-full px-5 py-8'>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition duration-300 ease-in-out'>Dinning</button>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition duration-300 ease-in-out'>Chair</button>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition duration-300 ease-in-out'>Bed</button>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition duration-300 ease-in-out'>Kitchen</button>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full transition duration-300 ease-in-out'>Shelves</button>
        </div>

        <div className='container mx-auto hover:shadow-2xl hover:shadow-gray-300 flex justify-center gap-10 w-full px-5 py-8 transition duration-300 ease-in-out'>
            <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo='
                alt='Last Product'
                className='w-[30%] rounded-md shadow-lg'
            />

            <div className='flex flex-col justify-center gap-5'>
                <h4 className='text-xl font-bold text-gray-900 px-10 mt-2'>Buy Now Dinning Chair </h4>
                <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-10 rounded-full self-start mx-10 transition duration-300 ease-in-out'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default LastProduct