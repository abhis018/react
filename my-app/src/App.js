import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <div className="header">
        <div className='logo-container'>
          <img className="logo" src = "https://static.vecteezy.com/system/resources/previews/019/607/567/non_2x/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png"></img>
        </div>
        <div className='nav-container'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  )
};

const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <img className="res-card-logo" src="https://i0.wp.com/swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9526.jpg"></img>
      <h3>India Hotel</h3>
      <h5>3.6 star</h5>
      <h5>Flat ₹125 OFF above ₹649</h5>
      <div className='res-loc'>
        <h5>10 - 15 mins</h5>
        <h5>1.5 km</h5>
        <h5>Free</h5>
      </div> 
    </div>
  )
};

const Body = () => {
  return (
    <div className="body">
        <div className='search-bar'>Search</div>
        <div className='res-container'>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
        </div>
      </div>
  )
};


function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
