import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {DialogActions,Slide, Typography, DialogContent, Dialog, TextField,Grid, Button,DialogContentText, DialogTitle} from '@material-ui/core'
import Header1 from './Header1';
import transfertImage from './images/imagebo.webp';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Home1() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return <div >
  <Header />
  <div id="hero" class="d-flex flex-column pt-4 px-4 lg-px-8 overflow-hidden">



<section class="home-section">
<div class="container">
<div class="row">
<br/>
      <br/>
    </div>
  </div>
</section>
       </div>

       <br/>
       <br/>
       <h1>Pour Consulter les transfers</h1>
       <br/>
      <div className="cards-container">
       
      <Card className="oho" component={Link} to="/transferListB">
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
          <Typography gutterBottom variant="h5" component="h2">
              Gestion des Transferts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
    <div class="w3-container w3-padding-32" id="about">
    <h1 class="w3-border-bottom w3-border-light-grey w3-padding-16">About </h1>
    <p>Carpooling (also car-sharing, ride-sharing and lift-sharing) is the sharing of car journeys so that more than one person travels in a car, and prevents the need for others to have to drive to a location themselves.
By having more people using one vehicle, carpooling reduces each person's travel costs such as: fuel costs, tolls, and the stress of driving. Carpooling is also a more environmentally friendly and sustainable way to travel as sharing journeys reduces air pollution, carbon emissions, traffic congestion on the roads, and the need for parking spaces. Authorities often encourage carpooling, especially during periods of high pollution or high fuel prices. Car sharing is a good way to use up the full seating capacity of a car, which would otherwise remain unused if it were just the driver using the car.
    </p>
  </div>
  <Footer />
  </div>;
   



  //  <div >
  //     <Header1 />
  //     <section className='hero'>
  //     <div className='headline animationUp'>Back Office</div>
  //     <div className='line headline'>_____________________________________</div>
  //     <div className='single-animation'>
      
  //     <div className='buttons' ><a href='/transferListB'  className="btn2 cta-btn">Gestion des Transferts</a></div>
  //         </div>
          
      
  //     </section>
  // </div>;
}

export default Home1;
