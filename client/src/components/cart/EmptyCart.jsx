import { Box, styled, Button ,Typography } from "@mui/material";
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Component = styled(Box)`
  width: 80%%;
  height: 65vh;
  background: #fff;
  margin: 80px 140px;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")({
  width: "15%",
});

const LoginButton = styled(Button)`

color : #fff;
background:#FB641B;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
fonr-weight:600;
height:32px;
`

const imgurl =
  "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

const EmptyCart = () => {

  const { account, state, setAccount } = useContext(DataContext)
  const navigate = useNavigate();

  const openDialog = () =>{
     navigate('/account/login')
  }
  const shopNow = () =>{
    navigate('/');
  }
  
  return (
    <Component>
      <Container>
        <Image src={imgurl} />
        <Typography>Missing Cart items?</Typography>
        <Typography style={{fontSize:13}} component="span">Add items to it now.</Typography><br/><br/>
        {state ? <LoginButton variant="contained" onClick={()=>shopNow()} >Shop Now</LoginButton> :  <LoginButton variant="contained" onClick={()=>openDialog()} >Login</LoginButton>} 
      </Container>
    </Component>
  );
};

export default EmptyCart;
