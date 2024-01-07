import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Grid,
  FormControl,
  FormHelperText,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import { ottp } from './Service';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: '1rem', // Adjusted padding for a smaller card
    backgroundColor: 'rgb(255, 255, 255)',
    
    border: '1px solid rgb(46, 14, 88)',

  },
  heading: {
    color: 'rgb(46, 14, 88)',
    textAlign: 'left',
    margin: '1rem', // Adjusted margin for a smaller card
    fontWeight: 'bold',
  },
  radioGroup: {
    fontSize: '1rem',
    margin: '0 0 0 1rem',
  },
  button: {
    borderRadius: '1rem',
    margin: '1rem -1rem',
    backgroundColor: 'rgb(46, 14, 88)',
    color: 'white',
  },
  formHelperText: {
    textAlign: 'center',
    color: 'red',
  },
  formHelperTextGreen: {
    textAlign: 'center',
    color: 'green',
  },
  totalText: {
    marginTop: '1rem',
    fontSize: '1.2rem',
  },
}));

const Transfert1 = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('');

  const [total, setTotal] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [num, setNum] = React.useState('');

  const [helperText, setHelperText] = React.useState('Veulliez selectionner un type de frais');
  const [helperText1, setHelperText1] = React.useState('');
  let tot = JSON.parse(localStorage.getItem('montant_total'));

  useEffect(() => {
    makeOTP();
    let don = JSON.parse(localStorage.getItem('don-data'));
    localStorage.setItem('sms', JSON.stringify(don.sender_phnumber));
  }, []);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setTotal(tot);
    setHelperText('Appuyez sur + pour voir le montant total');
    setHelperText1(' ');
  };

  function sendOtp() {
    console.log('workinnnng');
    let number = JSON.parse(localStorage.getItem('sms'));
    let otpp = JSON.parse(localStorage.getItem('otp'));
    ottp(otpp, number)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  const makeOTP = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    localStorage.setItem('otp', JSON.stringify(result));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendOtp();

    if (value === 'a') {
      setTotal(parseInt(tot) + (3 * parseInt(tot)) / 100);
      setHelperText('Montant total d’op = Montant saisie + Frais du transfert  ');
      setHelperText1('Montant du transfert = Montant de l’opération saisie');
      localStorage.setItem('montant_total_frais', JSON.stringify(parseInt(tot) + (3 * parseInt(tot)) / 100));
    } else if (value === 'b') {
      setTotal(parseInt(tot));
      setHelperText('Montant total d’op = Montant saisie');
      setHelperText1('Montant du transfert = Montant d’op - frais du transfert ');
      localStorage.setItem('montant_total_frais', JSON.stringify(parseInt(tot)));
    } else {
      setHelperText('Veulliez selectionner un type de frais ');
    }

    console.log(total);
  };

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" className={classes.heading}>
        Calcule des Frais
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container style={{ textAlign: 'center' }}>
          <Grid item xs={4}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                preferedvalue="a"
                name="radio-buttons-group"
                onChange={handleRadioChange}
                className={classes.radioGroup}
              >
                <FormControlLabel value="a" control={<Radio color="default" size="small" />} label="la charge du client d’donneur " />
                <FormControlLabel value="b" control={<Radio color="default" size="small" />} label="la charge du client bénéficiaire " />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" variant="contained" className={classes.button}>
              Calculer
            </Button>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <div>____________________________________________</div>
            <FormHelperText style={{ textAlign: 'center' }}>{helperText}</FormHelperText>
            <FormHelperText style={{ textAlign: 'center' }}>{helperText1}</FormHelperText>
            <div className={classes.totalText}>Total = {total}</div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Transfert1;
