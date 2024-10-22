import React from 'react'
import SliderComponent from '../components/SliderComponent'
import ProductComponent from '../components/ProductComponent'
import LastProduct from '../components/LastProduct'

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent/>
      
      <LastProduct/>
      
      <ProductComponent/>
    </div>
  )
}

export default HomeScreen