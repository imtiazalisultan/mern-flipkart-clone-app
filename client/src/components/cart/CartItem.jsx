import React from 'react';
import { useState } from 'react';
import { Box, styled, Typography , Button } from '@mui/material';
import { addEllipsis } from '../utils/common-utils';
import GroupedButton from './GroupedButton';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';



const Container = styled(Box)`
display: flex;
background:#fff;
`;

const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`
const SmallText = styled(Typography)`
font-size:14px;
color:#878787;
margin-top:8px;
`;

const RemoveButton = styled(Button)`
margin-top: 20px;
font-size:16px;
color:#000;
background:aliceblue;
font-weight:550;
`;

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const CartItem = ({item,qty}) => {

    const dispatch = useDispatch();

    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id))
    }
   

  return (
    <Container>
      <LeftComponent>
        <img style={{height:160}} src={item.url} alt="productLogo" />
        <GroupedButton quantity={item.quantity} id={item.id}  />
      </LeftComponent>
      <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller: RetailNet
                <Box component="span"><img src={fassured} style={{width:60, marginLeft:10}} alt="Assureedlogo"/></Box>
            </SmallText>
            <Typography style={{margin:'20px 0px'}}>
                <Box component="span" style={{fontWeight:600, fontSize:18 }}>₹{(item.price.cost) * qty }</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }} ><strike>₹{(item.price.mrp) * qty }</strike></Box>&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }} >{item.price.discount}</Box>
            </Typography>
            <RemoveButton onClick={()=>removeItemFromCart(item.id)}  >Remove</RemoveButton>
      </Box>
    </Container>
  )
}

export default CartItem
