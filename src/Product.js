import React from 'react'
import "./Product.css"

//Declaring the images to be managed by the system of React
//import dress_1 from './dress_1.jpeg'


function Product({title, image, price, rating}) {
  return (
    <div className='product'>

      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array (rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))
          }
        </div>
      </div>

      <img src={image} alt="" />
      
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Product;
