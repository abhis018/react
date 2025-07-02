
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);
 

 if(resInfo === null) return <Shimmer/>;

 const{name, cuisines, costForTwoMsg} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupmap?.REGULAR?.cards[1]?.card?.card;



  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}-{costForTwoMsg}</p>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs. "}
              {item.card.info.price/100 || item.card.info.defaultPrice/100}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default RestaurantMenu;