import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import './App.css'; 
import transfertImage from './images/agnt.webp';
import trans2 from './images/admin.webp';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {DialogActions,Slide, Typography, DialogContent, Dialog, TextField,Grid, Button,DialogContentText, DialogTitle} from '@material-ui/core'
import logo from './images/logo.webp'

// nodejs library that concatenates classes
import classNames from "classnames";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Login(props) {

    const cardStyle = {
      background: 'rgb(226, 215, 240)', // Set the background color to violet
     
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const {
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        handleChange,
        type
      } = props;
    
      const labelClasses = classNames({
        "labelRootError": error,
        "labelRootSuccess": success && !error
      });
    
      const underlineClasses = classNames({
        "underlineError": error,
        "underlineSuccess": success && !error,
        "underline": true,
        "whiteUnderline": white
      });
    
      const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
      });
    
      const inputClasses = classNames({
        "input": true,
        "whiteInput": white
      });
    
      let formControlClasses = "formControl";
      if (props.formControlProps) {
        formControlClasses = classNames(
          props.formControlProps.className,
          formControlClasses
        );
      };
      



     
  return  <div>

    <br/>
    <br/>
    <div className='headline animationUp'><img  className="logoH"src={logo}/> <h1>Welcome to EasyMT</h1></div>
   <div className="cards-container">
       
  <Card className="oho" component={Link} to="/loginn" style={cardStyle}>
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
      <Typography gutterBottom variant="h5" component="h1" color="rgb(226, 215, 240)">
        Agent
      </Typography>
     
    </CardContent>
  </CardActionArea>
 
</Card>

<Card className="oho" component={Link} to="/loginb" style={cardStyle}>
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
      <Typography gutterBottom variant="h5" component="h1">
       Admin
      </Typography>
    
    </CardContent>
  </CardActionArea>
 
</Card>
</div>
  
</div>
  // <div >
     
  //     <section className='heroL'>
  //     <div className='headline animationUp'><img  className="logoH"src={logo}/></div>
  //     <div className='line headline'>__________________________________</div>
      
  //     <div className='single-animation'>
      
  //     <div className='buttons'><a href="/loginn" target="_blank" className=" btn3">Console Agent</a></div>
  //         </div>
  //     <div className='single-animation'>
      
  //     <div className='buttons'><a href="/loginb" target="_blank" className="btn4 ">Console BackOffice</a></div>
  //         </div>
  //     </section>
  // </div>;
}

export default Login;
