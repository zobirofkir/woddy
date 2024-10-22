import React from 'react'
import SliderComponent from '../components/SliderComponent'
import ProductComponent from '../components/ProductComponent'
import LastProductComponent from '../components/LastProductComponent'

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent/>
      
      <LastProductComponent/>
      
      <ProductComponent/>
    </div>
  )
}

export default HomeScreen