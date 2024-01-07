import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const footerStyle = {
  padding: '16px',
  marginTop: 'auto',
  backgroundColor: '#f9f9f9', // Change the background color as needed
};

const footerHeight = 100;
const footerEltMarginTop = 15;

const div1Style = {
  width: '100%',
  height: `${footerHeight + footerEltMarginTop}px`,
  backgroundColor: '#f9f9f9',
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between', // Added to position children on opposite sides
  alignItems: 'center',
  padding: '1rem',
};

const div1Style1 = {
  textAlign: 'left', // Align to the left
  color: 'black',
  backgroundColor: '#f9f9f9',
};

const Footer = () => {
  return (   <div style={footerStyle}>
     
      <div style={div1Style}>
        <div style={div1Style1}>
        <Typography variant="h4" color="rgb(46, 14, 88)">
           EasyMT 
          </Typography>
          <Typography variant="body2" color="textSecondary">
            We are XYZ company, dedicated to providing the best service to our customers.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </div>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="rgb(46, 14, 88)" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="textSecondary">
            123 Main Street, Anytown, USA
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: info@example.com
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Phone: +1 234 567 8901
          </Typography>
        </Grid>
      </div>
    </div>

  );
};

export default Footer;
