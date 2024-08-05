import React from 'react'
import Navbar from './Navbar'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

import './Home2.css';
import { UserContext } from './UserContext';

const Home2 = () => {
  const [user,setUser]=React.useContext(UserContext);
  return (
    <div>
        <Navbar/>
            <div class="wholecard">
            <h1 class="wholecardh1">{!user?"Welcome, Guest":`Welcome ${user}`}</h1>
            <h1 class="wholecardh2">Dive into Reviving Features</h1>
                <div class="cardrow1">
                <div class="subcards">
                    
             <Link to="/dietfoods" ><Card sx={{ width:350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://www.healthifyme.com/blog/wp-content/uploads/2022/05/Shutterstock_1505303738-1.jpg"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h1 class="workouth2">Start tracking <br></br>your calories daily</h1>
                   <Link to='/workouts'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            <div class="subcards">
                <Link to="/workouts">
             <Card sx={{ width: 350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="http://m.gettywallpapers.com/wp-content/uploads/2022/06/Wallpaper-Chris-Bumstead-1024x576.jpg"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h1 class="workouth2">Start your workout session<br></br>and Get fit</h1>
                   <Link to='/dietfoods'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            </div>
                <div class="cardrow1">
                <div class="subcards">
               <Link to="/CalorieCalculator">
             <Card sx={{ width:350 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://media.istockphoto.com/id/941867510/photo/reduce-calories-nutrition-and-balanced-diet-concept.jpg?s=612x612&w=0&k=20&c=KOzNr6vojHQ_PQIW_b2dsBvKUkASPRyKPQkD3gSMglg="
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">Calorie Calculator:Find your calories</h1>
                   <Link to='/CalorieCalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>  
            </div>
            <div class="subcards">
            <Link to="/BMICalculator">
             <Card sx={{ width:350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://cdn.policybazaar.ae/pbuae/images/bmi-calculator.jpg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">BMI Calculator:<br></br>Calculate your BMI</h1>
                   <Link to='/BMICalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Home2