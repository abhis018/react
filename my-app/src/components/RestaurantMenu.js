import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from '../utils/constant';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
   const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  },[])

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data)
  };
  if( resInfo === null ) return <Shimmer/>;

  const {name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

  console.log(categories);
  return(
    <div className="text-center">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
      
    </div>
  )
};

export default RestaurantMenu


