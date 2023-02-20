
import {Box, styled, Button, ButtonGroup} from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const Component = styled(ButtonGroup)`
margin-top:20px;
`
const StyledButton = styled(Button)`
border-radius:50%;
`

const GroupedButton = ({quantity,id}) =>{

    const [qty, setQty] = useState(quantity)

    const dispatch = useDispatch();
   
    const incrementToCart =() =>{
        setQty(qty+1);
       
       dispatch(addToCart(id,qty+1)); 
    }
    const decrementToCart =() =>{
        if(qty<=1){
           return setQty(1);
        }
        setQty(qty-1);
        dispatch(addToCart(id,qty-1));
    }
    
     return(
        <Component>
            <StyledButton onClick={()=>decrementToCart(id,quantity)} >-</StyledButton>
            <StyledButton>{qty}</StyledButton>
            <StyledButton onClick={()=>incrementToCart(id,quantity)} >+</StyledButton>
        </Component>
     )
}
export default GroupedButton;