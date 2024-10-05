import React, { useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/services/productData.js';
import './Prod.css'; 
import { FaStar } from 'react-icons/fa'; 
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'; 
import { useCart } from '../../utils/services/cartItems.js';




function ProductComp() {
  const { productName } = useParams();
  const products = getProducts();
  const { addToCart } = useCart();
  const product = products.find((p) => p.name.toLowerCase() === productName.toLowerCase());
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-container">
      {/* Product Image */}
      <div className="product-image-section">
        <div className="discount-label">{product.discount}% Off</div>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      {/* Product Details */}
      <div className="product-details-section">
        <h1 style={{fontWeight:'400'}}>{product.name}</h1>

        {/* Rating */}
        <div className="product-rating">
          {[...Array(5)].map((star, index) => (
            <FaStar key={index} className="star-icon" />
          ))}
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="current-price">{product.newPrice} EGP</span>
          <span className="original-price">{product.price} EGP</span> 
        </div>

        {/* Product Description */}
        <p className="product-description">{product.description}</p>

        {/* Quantity Selector and Buy Button */}
        <div className="quantity-selector">
          <div className='quantity-selector-tog'>
            <button className='quantity-selectorb' onClick={decreaseQuantity}>−</button>
            <span>{quantity}</span>
            <button className='quantity-selectorb' onClick={increaseQuantity}>+</button>
          </div>
          
          {/* Buy Button */}
          <button className="buy-now-btn" onClick={handleAddToCart}>BUY NOW</button>
        </div>

        {/* Wishlist and Share */}
        <div className="wishlist-share">
          <div className="wishlist">
            <AiOutlineHeart /> Add to wishlist
          </div>
          <div className="share">
            <AiOutlineShareAlt /> Share
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ProductComp;