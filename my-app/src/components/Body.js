import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    if(onlineStatus === false) 
        return(
            <h1>
                Looks like you're offline !! Please check your internet connection;
            </h1>
        )

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
                    (res) => res.data.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className='res-container'>
          {filteredRestaurant?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />))} 
        </div>
    </div>
  )
};

export default Body;