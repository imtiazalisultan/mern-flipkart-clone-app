import React from 'react';
import Slide from './Slide';
import { Box , styled} from '@mui/material';



const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

const Component = styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}))

const RightComponent = styled(Box)(({theme})=>({
width:'17%',
marginTop:10,
textAlign:'center',
background:'#ffffff',
marginLeft:10, 
padding:5,
[theme.breakpoints.down('md')]:{
    display:'none'
}  
}));


const MidSlide = ({products, title, timer}) => {
  return (
    <Component>
        <LeftComponent>
            <Slide products={products} title={title} timer={timer} />
        </LeftComponent>
        <RightComponent>
            <img src={adURL} alt="ads" style={{width:217}}/>
        </RightComponent>
    </Component>
  )
}

export default MidSlide
