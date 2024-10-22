import React, { useEffect, useMemo, useState } from 'react'

const ProductComponent = () => {
    const [products, setProducts] = useState([]);

    const productsData = useMemo(() => [
            {
                id: 1,
                name: 'Product 1',
                image: 'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
                description: 'Product 1 description',
            },
            {
                id: 2,
                name: 'Product 2',
                image: 'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
                description: 'Product 2 description',
            },
            {
                id: 3,
                name: 'Product 3',
                image: 'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
                description: 'Product 3 description',
            },
    
            {
                id: 4,
                name: 'Product 4',  
                image: 'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
                description: 'Product 4 description',
            },
    
            {
                id: 5,
                name: 'Product 5',
                image: 'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
                description: 'Product 5 description',
            },
    
            {
                id: 6,
                name: 'Product 6',
                image: 'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
                description: 'Product 6 description',
            }
    ], []);


    useEffect(() => {
        setProducts(productsData)
    }, [productsData]);

  return (
    <>
        <div className='flex justify-center mt-10 mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Products</h1>
        </div>    
        <div className='flex flex-wrap justify-center gap-8 w-full px-5 py-8 md:px-12 md:py-10'>

            {
                products.map((product, index) => {
                    return (
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300' key={index}>
                            <img src={product.image} 
                                alt={product.name}
                                className='w-full h-48 object-cover rounded-t-lg mb-4 hover:scale-105 transition-transform duration-300 rounded-full hover:rounded object-cover hover:-rotate-6' 
                            />
                            <h3 className='text-2xl font-bold text-gray-900 mb-3 text-center'>{product.name}</h3>
                            <p className='text-gray-700 leading-relaxed text-center mb-4'>{product.description.substring(0, 100)}.</p>
                            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded-md transition-all duration-200'>Add to cart</button>
                        </div>
                    )
                })
            }

        </div>
    </>
  )
}

export default ProductComponent
