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

const Body = () => {
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


function App() {
  return (
    <Header/>
  );
}

export default App;
