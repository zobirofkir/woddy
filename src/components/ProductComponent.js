import React from 'react'

const ProductComponent = () => {
  return (
    <>
        <div className='flex justify-center mt-10 mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Products</h1>
        </div>    
        <div className='flex flex-wrap justify-center gap-8 w-full px-5 py-8 md:px-12 md:py-10'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=' 
                alt='Product 1' 
                className='w-full h-48 object-cover rounded-t-lg mb-4' 
            />
            <h3 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Product 1</h3>
            <p className='text-gray-700 leading-relaxed text-center mb-4'>Discover the beauty of this modern piece with its sleek design and stylish appearance.</p>
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded-md transition-all duration-200'>Add to cart</button>
        </div>


        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=' 
                alt='Product 2' 
                className='w-full h-48 object-cover rounded-t-lg mb-4' 
            />
            <h3 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Product 2</h3>
            <p className='text-gray-700 leading-relaxed text-center mb-4'>A stunning addition to any room, perfect for minimalist lovers.</p>
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded-md transition-all duration-200'>Add to cart</button>
        </div>


            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=' 
                    alt='Product 2' 
                    className='w-full h-48 object-cover rounded-t-lg mb-4' 
                />
                <h3 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Product 2</h3>
                <p className='text-gray-700 leading-relaxed text-center mb-4'>A stunning addition to any room, perfect for minimalist lovers.</p>
                <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded-md transition-all duration-200'>Add to cart</button>
            </div>


        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=' 
                alt='Product 2' 
                className='w-full h-48 object-cover rounded-t-lg mb-4' 
            />
            <h3 className='text-2xl font-bold text-gray-900 mb-3 text-center'>Product 2</h3>
            <p className='text-gray-700 leading-relaxed text-center mb-4'>A stunning addition to any room, perfect for minimalist lovers.</p>
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded-md transition-all duration-200'>Add to cart</button>
        </div>

        </div>
    </>
  )
}

export default ProductComponent
