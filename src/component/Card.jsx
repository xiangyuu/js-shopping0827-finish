import React from 'react';
import shopping from '../static/pictures/shopping.png'
import './Card.scss'
function Card(props) {

  return (
      <div className='card'>
        <img src={props.cloth.image} alt=''/>
        <div className='shopping'>
          <img onClick={props.addProduct} src={shopping} alt=''/>
        </div>
        <div>
            <span>
              {props.cloth.title}
              <br/>
              ${props.cloth.cost}
            </span>
        </div>
      </div>
  );
}

export default Card;