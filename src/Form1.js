import React, { useState } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Typography, Button, TextField } from '@material-ui/core';
import Transaction from './Transaction1';
import Header from './Header';
import Donnees from './Donnees';
import Transfert from './Transfert';
import Transfert1 from './Transfert1';
import OTP from './OTP';
import Check from './Check';
import logo from './images/err.png';

const theme = createTheme({
  typography: {
    fontFamily: 'reg',
  },
  palette: {
    primary: {
      main: '#8e44ad', // Violet color
    },
    secondary: {
      main: '#9b59b6', // Another shade of violet
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '2rem auto',
    border: '1px solid #8a8a8a',
    fontFamily: 'reg',
    textAlign: 'center',
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: 'rgb(46, 14, 88)',
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color:  'rgb(46, 14, 88)',
    },
  },
  button: {
    fontFamily: 'reg',
    border: '0.5px solid black',
    borderRadius: '0px',
    margin: '1rem',
    padding: '6px 3rem',
    letterSpacing: '1px',
    fontWeight: '900',
    backgroundColor: 'rgb(226, 215, 240)', // Background color
    color: 'rgb(46, 14, 88)', // Text color
    '&:hover': {
      backgroundColor: '#6c3483', // Darker shade of violet on hover
      color: '#fff', // Text color on hover
    },
  },
}));

const Form1 = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function getSteps() {
    return ['Accès à la transaction', 'Montant du transfert', 'Gestion des frais', 'Finalisation'];
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Transaction />;
        case 1:
        return <Transfert />;
      case 2:
        return <Transfert1 />;
        case 4:
          return <Check />;
          default:
          return ' ';
      }
  }

  const classes = useStyles();

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? '' : (
              <>
                {getStepsContent(activeStep)}
                <Button onClick={handleNext} className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Valider le Transfert' : 'Suivant'}
                </Button>
              </>
            )}
          </>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Form1;