import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = (props) => {
  console.log("Item props:", props); // Debug log
  console.log("Item ID:", props.id); // Debug log for ID
  console.log("Item Name:", props.name); // Debug log for name
  console.log("Item Image:", props.image); // Debug log for image

  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={(e) => {
        // Prevent default navigation if id is not valid
        if (!props.id) {
          e.preventDefault();
          console.error('Invalid product ID');
        } else {
          console.log('Navigating to product:', props.id);
        }
      }}>
        <img src={props.image} alt={props.name || 'Product image'} />
      </Link>
      <p>{props.name || 'Product Name'}</p>
      <div className='item-prices'>
        <div className="item-price-new">
          ${formatPrice(props.new_price)}
        </div>
        <div className="item-price-old">
          ${formatPrice(props.old_price)}
        </div>
      </div>
    </div>
  )
}

export default Item
