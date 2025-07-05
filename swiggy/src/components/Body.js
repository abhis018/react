import RestaurantCard,{withPromotedLabel} from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4907077&lng=77.0937926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();
     const {loggedInUser,setUserName} = useContext(UserContext)

    if(onlineStatus === false) 
        return(
            <h1>
                Looks like you're offline !! Please check your internet connection;
            </h1>
        );

       

  return listOfRestaurants.length === 0 ? (<Shimmer/> ): (
    <div className="body">
        <div className='filter'>
            {/* <div className='search'>
                <input type='text' placeholder='Search.....' className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value)}>{console.log(searchText)}</input>
                <button className="search-btn" onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) => res?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant);
                }}>
                    Search
                </button>
            </div> */}

            <button 
                className='filter-btn'
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}
            >
                Top Rated Restaurant
            </button>
            <div>
                <label>UserName:</label>
                <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
            </div>
        </div>
        <div className='res-container'>
          {filteredRestaurant?.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
               {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />} 
            </Link>))} 
        </div>
    </div>
  )
};

export default Body;