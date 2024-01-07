import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IntlTelInput from "react-intl-tel-input"
import SearchIcon from '@material-ui/icons/Search';
import "react-intl-tel-input/dist/main.css"
import SearchBar from "material-ui-search-bar";
import {transferList} from './Service';
import {getTransfer} from './Service';
import { useParams,useNavigate} from 'react-router-dom';
import searchh from './images/searchh.png'
import Footer from './Footer'
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,label,
    OutlinedInput,
    FormControl,
    InputLabel,DialogActions, DialogContent, Dialog, DialogContentText, DialogTitle,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper
} from "@material-ui/core"
import AddBeni from './AddBeni';
import Header from './Header';




const TransferList = () => {
  

  const useStyles = makeStyles({
    

  
})
  
  
     const history = useNavigate()
     
     let {ref} =useParams()
     const [list,setList] = useState([])
     const [search,setSearch] = useState("")
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
     function color(stepIndex){
      switch(stepIndex){
          
          case 1:
              return classes.root;
          case 2:
              return classes.root;
          case 3:
              return classes.roo1;
        case 5:
            return classes.roo1;
        case 6:
            return classes.root;
            
          default : return "uncknown Step";
      }
  }
  useEffect(()=>{
    
    
    transferList().then(function (response){
            
      
      setList(response.data)
console.log("list",list);
})
.catch(function (response) {
console.log(response)
});
  },[])
  const searchRef = () =>{
    getTransfer(search).then(function (response){
            
      history("/servir/"+search)


      
})
.catch(function (response) {
console.log(response)
});

  }
   
  
  const classes = useStyles();

  return( 
  <div>
    <Header />
    <br/>
    <br/>
    <form style={{ textAlign:"center" ,margin:"1rem auto 0"}} className={classes.root}>

    <TextField fullWidth style={{width:"16rem",margin:"0 1rem", textAlign:"right"}} label="ref"  type="text" onChange={e => setSearch(e.target.value)} variant="standard"  />
    <Button  onClick={searchRef} className={classes.root}>
    <SearchIcon  className="search" src={searchh} />
          </Button>
    </form>
    <div  style={{width : "95%",
         margin : "0 auto .2rem",
         border : "1px solid #fff",
         fontFamily : "reg",
         textAlign:"center"}}>
      <Typography variant='h5' style={{color: "#rgb(46, 14, 88)", textAlign:"left", margin:"3rem"}}>
      Listes des Transferts
      </Typography>
     <TableContainer component={Paper} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead>
          <TableRow className={classes.tableHead} >
            
            <TableCell align="left">Date de création</TableCell>
            <TableCell align="left">Donneur</TableCell>
            <TableCell align="left">Montant Total</TableCell>
            <TableCell align="left">Motif</TableCell>
            <TableCell align="left">Bénéficiaires</TableCell>
            <TableCell align="left">Montant</TableCell>
            <TableCell >Reference</TableCell>
            
            <TableCell align="left">Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
         
          
            {list.map(li => (
               <TableRow>
               <TableCell component="th1" scope="row"  >
               {li.created_at}
                </TableCell>
                <TableCell align="left"> {li.sender_fname} </TableCell>
                <TableCell align="left">{li.total_expense_amount} dhs</TableCell>
                <TableCell align="left">{li.motif} </TableCell>

                <TableCell align="left">{li.transfers.map(lii => <div>{lii.receiver_lname}</div>)}</TableCell>

                <TableCell align="left">{li.transfers.map(lii => <div>{lii.transfer_amount} dhs</div>)} </TableCell>
                <TableCell align="left" >{li.transfers.map(lii => <div>{lii.transfer_reference}</div>)}</TableCell>
                <TableCell align="left" >{li.transfers.map(lii =>
                <label  style={{fontSize:"12px"}} className={color(lii.transfer_status)}><div>{getStepsContent (lii.transfer_status)}<br></br></div></label>)}</TableCell></TableRow>
            )
              )}
            
            
              
            
        
            
            </TableBody>
        
        
        </Table></TableContainer><Button style={{fontSize:"12px",letterSpacing:"1px",color:"#rgb(46, 14, 88)",fontFamily:"reg",fontWeight:"900",margin:"1rem 0 0",textTransform:"lowercase"}}>
            
          </Button></div>
        
        
      </div>


  )}

export default TransferList;
