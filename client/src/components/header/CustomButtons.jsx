import { useContext } from 'react';

import {Box, styled, Button, Typography, Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { DataContext } from '../context/DataProvider';
//component
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

import { Link } from 'react-router-dom';

import{ useSelector } from 'react-redux';

const Wrapper = styled(Box)(({theme})=>({
  display:'flex',
  margin: '0 3% 0 auto',
  '& > button, & > p, & > div':{
      marginRight:40,
      fontSize:16,
      alignItems:'center'
  },
  [theme.breakpoints.down('md')] : {
    display:'block',
  }
}))




const Container = styled(Link)(({theme})=>({
  display:'flex',
  textDecoration:'none',
  color: 'inherit'
  
}))


const LoginButton = styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`

const CustomButtons = () => {

  
 
 
  const {account,setAccount,state, open, setOpen, dispatch} = useContext(DataContext);

  const { cartItems } = useSelector(state=>state.cart);


  const openDialog = () =>{
    
    setOpen(true);
      
  }

  return (
    <Wrapper>
      {
        state ? <Profile account={account} setAccount={setAccount} />
        :
        <LoginButton variant="contained" onClick={()=>openDialog()} >Login</LoginButton> 
      }
        
       { open ?  <LoginDialog/> : null} 
        
        <Typography style={{marginTop:3,width:135}} >Become a seller</Typography>
        <Typography style={{marginTop:3}} >More</Typography>

        <Container to='/cart'>
          <Badge color="secondary" badgeContent={cartItems?.length}>
            <ShoppingCartIcon/>

            </Badge>
            <Typography style={{marginLeft:10}} >cart</Typography>
        </Container>
    </Wrapper>
  )
}

export default CustomButtons
