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
  } = resData?.data;


  return (
    <div className='res-card'>
      <img className="res-logo"  alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{resData.data.name}</h3>
      <h5>{resData.data.avgRating} stars</h5>
      <h5>{resData.data.cuisines.join(", ")}</h5>
      <div className='res-loc'>
        <h5>{resData.data.costForTwo}</h5>
        <h5>{resData.data.locality}</h5>
      </div> 
    </div>
  )
};


export default RestaurantCard;