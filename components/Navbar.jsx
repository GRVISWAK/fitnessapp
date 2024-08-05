import * as React from 'react';
import './Navbar.css'
import cbumlogo from '../Assets/cbumlogo.jpg'
import { Link } from 'react-router-dom';
import Home2 from './Home2';
import logo2 from '../Assets/logo2.jpg'
import { UserContext } from './UserContext';
function ResponsiveAppBar() {
  const [user,setUser]=React.useContext(UserContext);
  return (
    <div className="navbar">
        <div className="nav-logo">
          <a href="/">
            <Link to='/'><img src={logo2} alt="Logo" /></Link>
          </a>
        </div>
        <div className="nav-center">
          <ul className="nav-menu">
            <li>
              <a href="#solutions">
                Guides<span className="arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li> <a href="#ai-doctor">Fitness & Wellness</a></li>
                <li><a href="#supplements">Healthy Eating</a></li>
                <li><a href="#lab-test-interpretation">Home Fitness</a></li>
                <li><a href="#second-opinion">Second Opinion</a></li>
                <li><a href="#second-opinion">Hydration </a></li>
              </ul>
            </li>
          
            <li>
              <a href="#resources">
                Advice<span className="arrow">▼</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#blog">Fitness</a></li>
                <li><a href="#symptoms-guide">Nutrition</a></li>
                <li><a href="#knowledge-base">Self Care</a></li>
                <li><a href="#glossary">Wellness</a></li>
              </ul>
            </li>
            <li>
             <Link to="/workouts"><a href="Workouts">Workouts</a></Link> 
            </li>
            <li>
              <Link to="/dietfoods"><a href="#dietfoods">TrackCalories</a></Link>
            </li>
            <li>
              <Link to="/Home2"><a href="#dietfoo">Our features</a></Link>
            </li>
          </ul>
        </div>
        <div className="login">
        </div>
        <h2>{!user?"Welcome, Guest":`Welcome ${user}`}</h2>
        <Link to='Register'>{!user?<button class="loginbtn"size='large' sx={{color:'white'}}>Get started for free</button>: null}</Link>
        <Link to="/Login">{!user?<button  class="loginbtn" sx={{color:'white'}}>Login</button> : null}</Link> 
      </div>
  );
}
export default ResponsiveAppBar;