import { Box, styled, Typography, Grid} from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
background:#172337;
color:#fff;
height:70px;
display:flex;
justify-content:space-around;
align-items:center; 
`

const LinkButton = styled(Link)`
text-decoration:none;
color:#fff;
font-size:18px;
`

const Footer = () => {
  return (
    <Component sx={{position:'relative',bottom:0, marginTop: 'calc(10% + 60px)'}} >
     
        <Typography style={{fontSize:14,fontWeight:600}}> &#169; 2023 Designed and Developed by Mady</Typography>
        <Box>
           
            <LinkButton to="/contact" style={{fontSize:14,fontWeight:600 }} >Contact Us</LinkButton>
           
        </Box>
    </Component>
  )
}

export default Footer
