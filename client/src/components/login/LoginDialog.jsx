import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import {Box, styled, Typography, TextField,Button} from '@mui/material';
import { authenticateLogin, authenticateSignup, loginSubmit } from '../service/api';
import { DataContext } from '../context/DataProvider';
import { useContext } from 'react';



const Component = styled(Box)`
height:70vh;
width:90vh;

`

const LoginButton = styled(Button)`
text-transform: none;
color : #fff;
background:#FB641B;
height:48px;
border-radius:2px
`
const RequestOTPButton = styled(Button)`
text-transform: none;
color : #2874f0;
background:#fff;
height:48px;
border-radius:2px;
font-weight:600;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
font-size: 12px;
color: #878787
`
const CreateAccount = styled(Typography)`
font-size: 14px;
font-wight: 600;
cursor: pointer;
text-align : center;
color: #2874f0;
`

const Wrapper = styled(Box)`
display:flex;
width:50%;
flex-direction:column;
padding:25px 35px;
& > div, & > p, & > button {
margin-top:18px;
}`

const Image = styled(Box)`
  background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center no-repeat;
  height:83%;
  width:30%;
  padding:45px 35px;
  & > h5{
    color: #fff;
    font-weight:600;
  };
  & > p{
    color: #fff;
  }
`
const Error = styled(Typography)`
font-size:13px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`

const accountInitialValues = {
     login : {
        view: 'login',
        heading: 'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
     },
     signup: {
        view: 'signup',
        heading : "Looks like you're new here! ",
        subHeading: 'Signup with your mobile number to get started'
     }
}

const signupInitialValues = {
  firstname : '',
  lastname : '',
  email : '',
  username : '',
  password: '',
  phone : ''
};
const loginInitialValues = {
  username:'',
  password:'',
}

const LoginDialog = () => {

  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup]  = useState(signupInitialValues);
  const [login,setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { dispatch, open, setOpen ,setUserData } = useContext(DataContext);

  const handleClose = () =>{
     setOpen(false);
     toggleAccount(accountInitialValues.login);
     setError(false);
  }


  const onInputChange =(e) =>{
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }
  const onValueChange = (e) =>{
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const signupUser = async()=>{
    let response = await authenticateSignup(signup)
    //console.log(response?.data);
    if(!response.status === 201){
      alert(response?.data?.message)
    }else{
      
      handleClose();
      //setAccount(signup.firstname);
      alert(response?.data?.message)
    }
   
  }



  const loginUser = async() =>{

    let response = await authenticateLogin(login);
     //console.log(response);
    if(response.status === 200){
        handleClose();
        dispatch({type:'USER',payload:true});
        setUserData(response.data?.data);
        alert(response.data?.message)
    }else{
      alert(response.data?.message)
      setError(true);
    }
    
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx : {maxWidth:'unset'}}}>
     
     <Component>
      
      <Box style={{display:'flex',height:'100%'}}>

        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{marginTop:25}}>{account.subHeading}</Typography>
        </Image>
        {
          account.view === 'login' ? 
           <Wrapper>
              <TextField label="Enter Username" name="username"  onChange={(e)=>onValueChange(e)} variant="standard"/>
              <TextField label="Enter Password" name="password"  onChange={(e)=>onValueChange(e)} variant="standard"/>
              <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
              <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
              {error && <Error>Please Enter Valid Username Or Password</Error>}
              <Typography style={{textAlign:'center'}}>OR</Typography>
              <RequestOTPButton>Request OTP</RequestOTPButton>
              <CreateAccount onClick={()=>toggleAccount(accountInitialValues.signup)}>New to Flipkart? Create an Account</CreateAccount>
           </Wrapper> 
             :
             <Wrapper>
              
                 <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                 <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                 <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                 <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                 <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                 <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                 <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                
                <RequestOTPButton onClick={()=>toggleAccount(accountInitialValues.login)}>Existing User? Log in</RequestOTPButton>
            </Wrapper>
        }
        
      </Box>
     </Component>
      
    </Dialog>
  )
}

export default LoginDialog
