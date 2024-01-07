import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from "react-intl-tel-input"
import "react-intl-tel-input/dist/main.css"
import SearchBar from "material-ui-search-bar";
import {getTransfer,extourner,serve,block, unlock} from './Service';
import { useParams,useNavigate} from 'react-router-dom';





import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,DialogActions, DialogContent, Dialog, DialogContentText, DialogTitle,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper
} from "@material-ui/core"
import AddBeni from './AddBeni';
import Header from './Header1';

const useStyles = makeStyles({
  root : {
       
       "& .MuiFormLabel-root.Mui-focused": {
           color : "#5fe0a2"
       },
       "& .MuiInput-underline.Mui-focused:after": {
          borderBottom : "2px solid #5fe0a2",
          color : "#5fe0a2"
      },
      "& .MuiInput-underline.Mui-focused:before": {
          borderBottom : "2px solid #5fe0a2",
          color : "#5fe0a2"
      },
      color : "#5fe0a2",
      fontSize:"11px",
      fontFamily:"reg"
       
      
      


  },
  roo1 : {
       
      
      color : "#ff6961",
      
      fontWeight:"900"
       
      
      


  }
})



const Block = () => {
  
  function getStepsContent(stepIndex){
    switch(stepIndex){
        
        case 1:
            return "à Servir";
        case 2:
            return "Servit";
        case 3:
            return "Extourné";
        case 5:
            return "Bloqué";
        case 6:
            return "Débloqué";
        
        default : return "uncknown Step";
    }
}
  
  const clients = [
    { id_client: '2',
     expense_id: '2',
      sender_fname: 'meriem',
      sender_lname:'beriane',
      sender_phnumber:'0611022644',
      total_amount:'700',
      
      

     },]
     let item = clients[0]
     let {reference} =useParams()
     const [list,setList] = useState([])
     const [statut,setStatut] = useState('')
     const [statutt,setStatutt] = useState('')
     const [annuler,setAnnuler] = useState('annuler')
     function extournerR() {
      console.log("hna")
      console.log(reference)
      console.log(annuler)
      unlock(reference).then(function (response){
        
        window.location.reload()
        // setList(response.data)
        // if(list.transfers!==undefined){
        // response.data.transfers.map(tr=>
        //   setStatut(tr.transfer_status))}
        
  
        console.log(response)
       
        
        
  
  
        
  })
  .catch(function (response) {
  console.log(response)
  });
  
    }
     function serveR() {
     
      block(reference).then(function (response){
        
              
        // setList(response.data)
        // if(list.transfers!==undefined){
      
        console.log(statut)
       
        
        
  
        window.location.reload()
        
  })
  .catch(function (response) {
  console.log(response)
  });
  
    }
    function dispable(stepIndex){
      switch(stepIndex){
          
          
        case 1:
          return  <form style={{ textAlign:"center" ,margin:"1rem auto"}} className={classes.root}>
          <Button onClick={serveR}  style={{fontFamily:"reg",fontSize:"10px",letterSpacing: "3px",backgroundColor:"#ff6961",color:"#fff", borderRadius :"0px",margin:"1rem 3rem",padding:"8px 3rem",fontWeight:"900", width:"15rem"}}>Bloquer
         </Button> 
           </form>;
      case 2:
          
          return <h2 style={{ fontSize:"1rem" ,margin:"2rem auto"}} className={color(2)}>Transfert déja Servit</h2> ;
      case 3:
  
          return <h2 style={{ fontSize:"1rem" ,margin:"2rem auto"}} className={color(3)}>Transfert déja Extourné</h2>;
      case 5:
          return  <form style={{ textAlign:"center" ,margin:"1rem auto"}} className={classes.root}>
          
          <Button onClick={extournerR}  style={{fontFamily:"reg",fontSize:"10px",letterSpacing: "3px",backgroundColor:"#5fe0a2",color:"#fff", borderRadius :"0px",margin:"1rem 3rem",padding:"8px 3rem",fontWeight:"900", width:"15rem"}}>Debloquer
         </Button> </form>;
      case 6:
          return  <form style={{ textAlign:"center" ,margin:"1rem auto"}} className={classes.root}>
          <Button onClick={serveR}  style={{fontFamily:"reg",fontSize:"10px",letterSpacing: "3px",backgroundColor:"#ff6961",color:"#fff", borderRadius :"0px",margin:"1rem 3rem",padding:"8px 3rem",fontWeight:"900", width:"15rem"}}>Bloquer
         </Button> 
           </form>;
      
      default : return "uncknown Step";
      
      }
  }

  useEffect(()=>{
    console.log('ref',reference)
    console.log(statut)
    getTransfer(reference).then(function (response){
            
      setList(response.data)
     

     
      
      


      
})
.catch(function (response) {
console.log(response)
});
console.log(list)
      console.log(statutt)


  },[])
   
  localStorage.setItem('don-data',JSON.stringify(item));
  const classes = useStyles();
  if(list===undefined){
    return <>loading.....</>
  }
  function color(stepIndex){
    switch(stepIndex){
        
        case 1:
            return classes.root;
        case 2:
            return classes.root;
        case 3:
            return classes.roo1;
        
        default : return "uncknown Step";
    }
}
  
  return( <div>
    <Header />
    <div style={{width : "80%",
         margin : "0 auto",
         border : "1px solid #fff",
         fontFamily : "reg",
         textAlign:"center"}}>
      <Typography variant='h5' style={{color: "rgb(46, 14, 88)", textAlign:"left", margin:"3rem"}}>
      Details du Transfert ({reference})
      </Typography>
     <TableContainer component={Paper} >
    <Table sx={{ width: 200 }}  aria-label="simple table">
        
        <TableBody sx={{ maxWidth: 200 }} >
        
        <TableRow>
             <TableCell component="th1" scope="row" >
               Prénom
               </TableCell>
              <TableCell align="left">{list.sender_fname}</TableCell>
              </TableRow>
          <TableRow>
             <TableCell component="th1" scope="row" >
               Nom
               </TableCell>
              <TableCell align="left">{list.sender_lname}</TableCell>
              </TableRow>
          <TableRow>
             <TableCell component="th1" scope="row" >
               Date d'émission
               </TableCell>
              <TableCell align="left">{list.created_at}</TableCell>
              </TableRow>
          <TableRow>
             <TableCell component="th1" scope="row" >
               GSM
               </TableCell>
              <TableCell align="left">{list.sender_phnumber}</TableCell>
              </TableRow>
          
          <TableRow>
             <TableCell component="th1" scope="row" >
               Motif
               </TableCell>
              <TableCell align="left">{list.transfers!==undefined
              ?
                  list.transfers.map(tr=>tr.motif)
                  :<></>
              }</TableCell>
              </TableRow>
           
              <TableRow>
             <TableCell component="th1" scope="row" >
               Montant du transfert avec frais
               </TableCell>
              <TableCell align="left">{list.total_expense_amount} dhs</TableCell>
              </TableRow>
          <TableRow>
             <TableCell component="th1" scope="row" >
               Status
               </TableCell>
         
              <TableCell align="left"><h2  style={{fontSize:"12px",textDecoration:"underline"}}>
            {/* {statut === 2 ? "servit":"à servir"} */}{list.transfers!==undefined
              ?
              list.transfers.map(tr=>getStepsContent(tr.transfer_status))
              :<></>
          }
          </h2></TableCell>
              </TableRow>
            
            </TableBody>
        
        
        </Table></TableContainer>
        
     
     
        
        
       
        <>
        <h2 >{list.transfers!==undefined
              ?
              list.transfers.map(tr=>dispable(tr.transfer_status))
              :<></>}</h2> 
      </>
        {/* <Button   className={classes.root}>
            Extourner cette Operation
          </Button> */}
        
        </div>
        
      </div>
  )}

export default Block;
