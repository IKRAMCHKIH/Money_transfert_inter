import React, { Component, useState, useEffect,useCallback } from 'react'


import logo from './images/logo.webp'; // Import the logo


import { useHistory } from "react-router-dom"

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import {NavLink} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// import { withRouter } from "react-router-dom";

const Header = () => {
  
  
  
  //use  effect for page changes, it uses history to know if the pages changes to close the about page
  
  

    


    return (
      <AppBar position="relative">
      <CssBaseline />
      <Toolbar>
      <Link to="/" className="link">
      <img src={logo} alt="EasyMT" style={{ height: '50px' }} /> 
          </Link>
          <Link to="/" >
            EasyMT
          </Link>
        <div className="navlinks" style={{font:'aria'}}>
          <Link to="/home" className="link">
          <HomeRoundedIcon style={{ marginRight: '5px' }} /> Home 
          </Link>
          <Link to="/blacklist" className="link">
          <InfoRoundedIcon style={{ marginRight: '5px' }}/> Liste Noire 
          </Link>

          <Link to="/transferList" className="link">
            <HistoryRoundedIcon style={{ marginRight: '5px' }}/> Historique
          </Link>
        </div>
      </Toolbar>
    </AppBar>

    //   <div >
    // <div className="header">
    //   <div className="container">
    //     <nav className="nav">
    //       <div className="menu-toggle" >
    //         <i className="fa fa-bars"></i>
    //         <i className="fa fa-times"></i>
    //       </div>
    //       <ul className="nav-list">
          
          
              
    //         <li className="logo "><NavLink to="/"  ><img  className="logo"src={logo}/></NavLink>
              
    //         </li>

            
            
            
            
                 
    //       </ul>
          
    //       <ul className="nav-list no-border">
          
          
              
            
    //         <li className="nav-item colorB" ><NavLink to="/transferList"  className="nav-item colorB">Historique des Transactions</NavLink>
              
    //         </li>

            
            
            
            
                 
    //       </ul>
    //       </nav>
          
    //   </div>
    //   </div>
      
    //   </div>
    )
  }


export default Header;