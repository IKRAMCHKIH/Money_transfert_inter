import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Paper,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: 'white', // Updated background color to white
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#2e0e58',
    margin: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0px 5px 15px rgba(46, 14, 88, 0.1)',
  },
  checkbox: {
    color: "#5fe0a2",
    "& .Mui-checked": {
      color: "#5fe0a2",
    },
  },
}));

function Check({ donneurData, beneficiaires, montantTransaction }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  localStorage.setItem('notify_transfer', JSON.stringify(checked));

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" gutterBottom style={{ color: '#2e0e58' }}>
        Finalisation
      </Typography>
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h3" style={{ color: '#2e0e58' }}>
          Données du donneur
        </Typography>
        <p>Nom et Prénom: {donneurData.sender_fname} {donneurData.sender_lname}</p>
        <p>Numero de Telephone: {donneurData.sender_phnumber}</p>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h3" style={{ color: '#2e0e58' }}>
          Données de Bénéficiaires
        </Typography>
        {beneficiaires.map((beneficiaire, index) => (
          <div key={index}>
            <p>Nom et Prénom : {beneficiaire.receiver_fname} {beneficiaire.receiver_lname}</p>
            <p>Numero de Telephone: {beneficiaire.receiver_phnumber}</p>
          </div>
        ))}
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h3" style={{ color: '#2e0e58' }}>
          Montants
        </Typography>
        {beneficiaires.map((beneficiaire, index) => (
          <div key={index}>
            <p>Montant : {beneficiaire.transfer_amount} DHS </p>
            <p>Frais: 10 DHS</p>
          </div>
        ))}vs
      </Paper>
      <div>
        <Checkbox
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          defaultChecked
          color="default"
          className={classes.checkbox}
        />
        <label style={{ color: '#2e0e58' }}>Notification du transfert</label>
      </div>
    </div>
  );
}

export default Check;
