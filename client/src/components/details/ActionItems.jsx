
import { Box , styled, Button} from '@mui/material';
import { ShoppingCart as Cart ,FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { useState } from 'react';



const LeftContainer = styled(Box)(({theme})=>({
  minWidth:'40%',
  padding: '40px 0 0 80px',
  marginInline:20,
  [theme.breakpoints.down('lg')]:{
    padding:'20px 30px',
  }
}))


const StyledButton = styled(Button)(({theme})=>({
  width:'47%',
  height:50,
  borderRadius: 2,
  [theme.breakpoints.down('lg')]:{
        width:'46%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'48%'
  } 
}));

const Image = styled('img')({
    width: '95%',
    padding:15
})



const ActionItems = ({product}) => {

  const [ quantity, setQuantity ] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, detailUrl } = product;

  const addItemToCart =() =>{
      dispatch(addToCart(id,quantity))
      navigate('/cart');
  }
  const addItemToBuy = () =>{
    dispatch(addToCart(id,quantity));
    navigate('/cart/orders')
  }

  return (
    <LeftContainer>
      <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width:'85%' }}>
      <Image src={detailUrl} alt="productImage" />
      </Box>
      <StyledButton variant="contained" style={{marginRight: 10, background: '#ff9f00'}} onClick={()=>addItemToCart()} > <Cart /> Add to Cart</StyledButton>
      <StyledButton variant="contained" style={{background: '#fb641b'}} onClick={()=>addItemToBuy()} ><Flash/> Buy now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItems
