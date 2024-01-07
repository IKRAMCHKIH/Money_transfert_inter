import React,{useEffect,useState, useRef} from 'react'
import {Link,NavLink} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import logo from './images/logo.webp'
import { useParams,useNavigate} from 'react-router-dom';

import {DialogActions,Slide, DialogContent, Dialog, TextField,Grid, Button,DialogContentText, DialogTitle} from '@material-ui/core'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";




import {login} from './Service';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// const useStyles = makeStyles({
//     root : {
         
//          "& .MuiFormLabel-root.Mui-focused": {
//              color : "#5fe0a2"
//          },
//          "& .MuiInput-underline.Mui-focused:after": {
//             borderBottom : "2px solid #5fe0a2",
//             color : "#5fe0a2"
//         },
//         "& .MuiInput-underline.Mui-focused:before": {
//             borderBottom : "2px solid #5fe0a2",
//             color : "#5fe0a2"
//         },
//         fontSize:"1px"
         
        
        


//     }
// })
function set_local_storage(data){
    localStorage.setItem('token',data.token);
    localStorage.setItem('id',data.id);
}

const Loginn = (props)=> {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useNavigate()

  
  useEffect(()=>{
    if (localStorage.getItem('user-info')){
     
    }
  },[])

  
  
  async function loginm() {

    console.log("hiiiiii")

    let item = {
      email, 
      password
    }
    console.log(item)
    login(item).then(function (response) {
        
                
                   
                            set_local_storage(response.data);
                           
                
        console.log(response);
        history("/home")

    })
    .catch(function (response) {
        console.log(response)
    });
  }



  
 
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
    


  return (
    <div className="App">
    <div className='headline animationUp'><img  className="logoH"src={logo}/></div>
  
  <form className="form">
    <p>Email</p>
  <FormControl {...props.formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
            <InputLabel htmlFor={id} className="white-label">
            Email
          </InputLabel>
      ) : null}
      <Input
        id={id}
        onChange={(e)=>setEmail(e.target.value)}
        type={type}
        {...inputProps}
      />
    </FormControl>
    <br/>
    <p>password</p>
    <FormControl {...props.formControlProps} className={formControlClasses}>
      {labelText == undefined ?
       (
        <InputLabel
          className={classNames("labelRoot", labelClasses)}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: "disabled",
          underline: underlineClasses
        }}
        id={id}
        onChange={(e)=>setPassword(e.target.value)}
        {...inputProps}
        type={type}
      />
    </FormControl>

    <Button type="button" color="#fff" className="form__custom-button" onClick={loginm} >
      Log in
    </Button>
  </form>

</div>
      
    // <div >
     
    // <section className='heroL'>
    // <div className='headline animationUp'><img  className="logoH"src={logo}/></div>
    // <div className='line headline'>___________________________</div>
    
    
    
    
    // <div className='single-animation1'>
    // <form style={{ textAlign:"center", margin:"3rem"}} className={classes.root}>
    // <div className='loginElm'><TextField fullWidth style={{width:"16rem", textAlign:"center"}} size="small" label="Email"  onChange={(e)=>setEmail(e.target.value)} type="text" variant="standard"/></div>
    // <div className='loginElm'><TextField fullWidth style={{width:"16rem", textAlign:"center"}} label="Mot de passe"  onChange={(e)=>setPassword(e.target.value)} type="password" variant="standard"/></div>
    //   <div className='loginElm'><a  className="btn3 " onClick={loginm}>Continuer</a></div>
    //   </form>
    
    
    //     </div>
    // </section>

    
    // </div>
    
   
    
  )
}

export default Loginn
