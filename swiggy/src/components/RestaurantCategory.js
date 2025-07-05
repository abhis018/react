import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {
    
    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div>
        <div className="accordiance" onClick={handleClick}>
            <span >
                {data.title} ({data.itemCards.length})
            </span>
            <span>
                ⏬
            </span>
        </div>
        <div>
            {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory;