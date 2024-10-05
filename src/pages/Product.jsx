import React from 'react'
import Prod from '../components/Prod/Prod.jsx'
import { getProducts } from '../utils/services/productData.js'; 
import Slider from '../components/Slider/Slider.jsx';
import { useParams } from 'react-router-dom';
import '../App.css';
function Product() {
  const { productName } = useParams();
  const products = getProducts();

  const product = products.find((p) => p.name.toLowerCase() === productName.toLowerCase());
  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <div>
        <Prod />
        <h2 className='titleP'>You May Also Like</h2>
        <Slider />

      
    </div>
  )
}

export default Product
