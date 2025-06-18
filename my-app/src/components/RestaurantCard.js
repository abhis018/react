import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality
  } = resData?.info;


  return (
    <div className='res-card'>
      <img className="res-logo"  alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{avgRating} stars</h5>
      <h5>{cuisines.join(", ")}</h5>
      <div className='res-loc'>
        <h5>{costForTwo}</h5>
        <h5>{locality}</h5>
      </div> 
    </div>
  )
};


export default RestaurantCard;


