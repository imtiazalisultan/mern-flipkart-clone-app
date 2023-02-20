import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Grid, Box, styled, Button} from '@mui/material'
import { useSelector } from 'react-redux';
import CartItem from './CartItem'
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';
import { useNavigate } from 'react-router-dom';
import { authenticateLogin, authenticateSignup, loginSubmit, getDataUser } from '../service/api';
import { DataContext } from '../context/DataProvider';
import { useContext } from 'react';
import PlaceOrder from './PlaceOrder';

const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0px'
    }
}))


const Header = styled(Typography)`
padding: 15px 24px;
background:#fff;
`
const ButtonWrapper = styled(Box)`   
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top: 5px solid #f0f0f0;
`
const StyledButton = styled(Button)`    
display:flex;
margin-left:auto;
background:#fb641b;
color:#fff;
width:33%;
height:51px;
border-radius:2px;  
`

const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginBottom:10
    }
}))



const Placeholder2 = () => {

    const { cartItems } = useSelector(state=>state.cart);
    const navigate = useNavigate()
    const { setAccount ,state,setUserData, dispatch } = useContext(DataContext);
  

   

   const getCartDetails = async() =>{
    try{
        let res = await  getDataUser();
        //console.log(res);
        if(res.status === 200){
            dispatch({type:'USER',payload:true});
            navigate('/cart/orders');
        }else{
      
           const error = new Error(res.error);
           throw error; 
        }

         }catch(err){
           console.log(err);
           navigate('/account/login');
      }
        
   }

  return (
    <>
            
               
                 <Container container> 
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <PlaceOrder/>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                           <TotalBalance cartItems={ cartItems } /> 
                    </Grid>

                 </Container> 
                 
            
    </>
  )
}

export default Placeholder2
