import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import dumbell from '../Assets/dumbell.png'
import { UserContext } from './UserContext';
import aboutpage from '../Assets/abtpagecontent - Copy.png'
const Home = () => {
  const[user,setUser]=React.useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
        <div className="home">
          <h1 class="homehead1">SAY HELLO TO THE #1 <br></br>FITNESS & WELLNESS<br></br> PLATFORM</h1>
          <p>Unlimited access to the world’s best workouts, meditation,<br></br> nutrition and more.</p>
        </div>
        <div classname="tv">
          <h3 class="tvhead1">BEST IN FITNESS AND WELLNESS</h3><br></br>
          <h2 class="tvhead2">A full gym & wellness coach. Always On.
          </h2>
          <p class="tvhead3">FitOn is a leading digital wellness platform that offers the most premium content, the <br></br>widest variety, and unique social experiences. No equipment needed— unlimited<br></br> access on any screen.</p>
          <div class="tvimage">
            <img src=''></img>
          </div>
        <div class="gympeop">
          <h1 class="gympeoph1"> 
             UNLIMITED VARIETY
          </h1>
          <p>Get access to world’s best workouts from cardio, yoga, strength,<br></br> pilates, toning and more.</p>
        </div>
       
        <div class="gymworkout">
        <div class="wholecard">
          <h3 class="wholecardh1">Our Features</h3>
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
                 <Link to="CalorieCalculator">   
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
           <div class="about">
            <img src={aboutpage}></img>
            <img src={dumbell}></img>
           </div>
          </div>
          </div>
        </div>
  )
}

export default Home;