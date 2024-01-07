import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from "react-intl-tel-input"
import "react-intl-tel-input/dist/main.css"
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,DialogActions, DialogContent, Dialog, DialogContentText, DialogTitle
} from "@material-ui/core"
import AddBeni from './AddBeni';




const Donnees1 = () => {
  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return( <div>
      
      <Typography variant='h5' style={{color: "#999", textAlign:"center", marginTop:"1rem"}}>
      Les Données du Client Donneur
      </Typography>
      <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{  margin:"5rem 7.5rem 1rem"}}>
  
  <Grid item xs={6}>
    <div className="donnees">ID Agent  : </div>
  </Grid>
  <Grid item xs={6}>
    <div className="donnees">435346456</div>
  </Grid>
  <Grid item xs={6}>
    <div className="donnees">Prénom : </div>
  </Grid>
  <Grid item xs={6}>
    <div className="donnees">jalila</div>
  </Grid>
  <Grid item xs={6}>
    <div className="donnees">Nom :</div>
  </Grid>
  <Grid item xs={6}>
    <div className="donnees"> Beriane Badi</div>
  </Grid>
  
  
  
  
  <Grid item xs={6}>
    <div className="donnees">Date d’émission :</div>
  </Grid>
  <Grid item xs={6}>
    <div className="donnees"> 11/01/2022</div>
  </Grid>
  
  
  
  
  <Grid item xs={12} style={{ textAlign:"start", margin:"1rem 0 1rem", color:"#8a8a8a"}}>
    <AddBeni />
  </Grid>
  
    
  
</Grid>
      </div>
  )}

export default Donnees1;
