import { Box, Typography, styled } from '@mui/material';
import { useState, useEffect } from 'react'




const HeaderWrapper = styled(Box)`
padding:15px 24px;
border-bottom:2px solid #f0f0f0;
`
const Heading = styled(Typography)`
color:#878787   ;
`
const Container = styled(Box)`
padding:15px 24px;
& > p{
    margin-bottom:20px;
    font-size:14px;
}
`
const Price = styled(Box)`
float:right;
`
const Discount = styled(Typography)`
color:green;
font-weight:550;
`

const TotalBalance = ({cartItems}) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
  

    useEffect(()=>{
        totalAmount();
  
    },[cartItems])


    const totalAmount = () =>{
        let price = 0, discount = 0;
        cartItems.map(item=>{
            price += item.price.mrp * (item.quantity);
            discount += (item.price.mrp - item.price.cost) * (item.quantity);
            
       });
       setPrice(price);
       setDiscount(discount);
      }

  return (
        <Box style={{background:'#fff'}}>
          <HeaderWrapper>
             <Heading>Price Details</Heading>
          </HeaderWrapper>
          <Container>
             <Typography>Price ({cartItems?.length } item) 
                <Price component="span">₹{price}</Price>
             </Typography>
             <Typography>Discount ({cartItems?.length} item) 
                <Price component="span">₹{discount}</Price>
             </Typography>
             <Typography>Delivery Charges ({cartItems?.length } item) 
                <Price component="span">₹40</Price>
             </Typography>
             <Typography variant="h6">Total Amount ({cartItems?.length } item) 
                <Price component="span">₹{price-discount +40 }</Price>
             </Typography>
             <Discount>You will save ₹{discount-40} on this order </Discount>
          </Container>
        </Box>
  )
}

export default TotalBalance
