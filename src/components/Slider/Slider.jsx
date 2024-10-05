import React from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/services/productData.js'; 
import './Slider.css'; 
import { FaStar } from 'react-icons/fa'; 
import { AiOutlineHeart} from 'react-icons/ai'; 
import { useCart } from '../../utils/services/cartItems.js';

function Slider() {
  const { productName } = useParams();
  const products = getProducts();
  const { addToCart } = useCart(); // Get the addToCart function from context
  const otherProducts = products.filter((product) => product.name.toLowerCase() !== productName.toLowerCase());

  return (
    <div className="slider">
      {otherProducts.map((product) => (
        <div key={product.id} className="slider-item">
          <img src={product.image} alt={product.name} className="slider-image" />
          <p className='prodNameS'>{product.name}</p>
          <p className='prodDescS'>{product.description}</p>
          
          {/* Rating */}
          <div className="product-ratingS">
            {[...Array(5)].map((star, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
          </div>
          
          <p className='priceS'>{product.price} EGP</p>
          <div className='sliderbuttons'>
            <button className="cartbtn" onClick={() => addToCart(product, 1)}>ADD TO CART</button>
            <AiOutlineHeart className='wishlistS' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;