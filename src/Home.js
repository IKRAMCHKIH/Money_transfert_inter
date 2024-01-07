import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import './App.css'; 
import transfertImage from './images/59ab7d81-5bcb-4711-87ea-0d464e97d593.webp';
import trans2 from './images/b624efbf-4ec3-4a3c-b84f-a9508c350e7d.webp';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home() {

  const bull = <span className="bullet">•</span>;
  
  return    <div >
       <Header />
       <div id="hero" class="d-flex flex-column pt-4 px-4 lg-px-8 overflow-hidden">
     


<section class="home-section">
  <div class="container">
    <div class="row">
{/*     
      <div class="col-md-10">
        <h2>EasyMT</h2>
        <p>
          Vivre une experience unique avec la plus facile platforme 
        </p>
        <p>de transfert d'argent international</p>
     
      </div> */}
      <br/>
      <br/>
    </div>
  </div>
</section>
       </div>
      {/* <section className='hero'>
      <div className='headline animationUp'>Bienvenue au transfert national bank.</div>
      <div className='headline1'>Comment vous voulez effectuer votre transaction ?</div>
      <div className='single-animation'>
      <div className='buttons'><a href="/form1" className="btn1 cta-btn">Par Espèce</a><a href="/form2"  className="btn2 cta-btn">Par Débit de Compte</a></div>
          </div>
      </section> */}
       <br/>
       <br/>
       <h1>Comment vous voulez effectuer votre transaction ?</h1>
       <br/>
      <div className="cards-container">
       
      <Card className="oho" component={Link} to="/form1">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={transfertImage}
          title="Contemplative Reptile"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            Par espece 
          </Typography>
         
        </CardContent>
      </CardActionArea>
     
    </Card>
   
    <Card className="oho" component={Link} to="/form2" style={{color:"rgb(46, 14, 88)"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={trans2}
          title="Contemplative Reptile"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"rgb(46, 14, 88)"}}>
            Par debit de compte 
          </Typography>
       
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
    <div class="w3-container w3-padding-32" id="about">
    <h1 class="w3-border-bottom w3-border-light-grey w3-padding-16">About </h1>
    <p>mooodifiiiier (also car-sharing, ride-sharing and lift-sharing) is the sharing of car journeys so that more than one person travels in a car, and prevents the need for others to have to drive to a location themselves.
By having more people using one vehicle, carpooling reduces each person's travel costs such as: fuel costs, tolls, and the stress of driving. Carpooling is also a more environmentally friendly and sustainable way to travel as sharing journeys reduces air pollution, carbon emissions, traffic congestion on the roads, and the need for parking spaces. Authorities often encourage carpooling, especially during periods of high pollution or high fuel prices. Car sharing is a good way to use up the full seating capacity of a car, which would otherwise remain unused if it were just the driver using the car.
    </p>
  </div>
  <br/>
  <br/>
  <br/>

  <Footer/>
  </div>;
  
}

export default Home;
