import React from 'react'
import { CDN_URL } from '../utils/constant';

const ItemList = ({items, dummy}) => {
    console.log(dummy);
  return (
    <div>
        {items.map((item) => (
            <div className='child' key={item.card.info.id}>
                <div>
                    <div>
                        <span>{item.card.info.name}</span>
                        <span>-₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p>{item.card.info.description}</p>
                </div>
                <div>
                    <img className="food-img" src={CDN_URL + item.card.info.imageId}></img>
                    <button className='add-btn'>ADD +</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList;