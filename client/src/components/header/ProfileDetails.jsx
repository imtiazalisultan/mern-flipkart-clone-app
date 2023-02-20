import { Box, Typography, styled, Grid, Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { KeyboardArrowRight as ArrowRight } from '@mui/icons-material';
import { ShoppingBasket } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { deleteUser, authenticateLogout } from '../service/api';


import {useContext} from 'react';
import { DataContext } from '../context/DataProvider';


const Component = styled(Grid)`
display:flex;
`
const LeftContainer = styled(Grid)`
padding:30px 20px;

`
const RightContainer = styled(Grid)`
padding:30px 20px;

`

const imagePhoto = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg';

const ProfileDetails = () => {

  const {userData,state,dispatch} = useContext(DataContext);
 

    // console.log(userData);
    const navigate = useNavigate();

    const userLogout = async() =>{
     
        
        let response = await authenticateLogout();
        if(response.status === 200){
        
          dispatch({type:"USER",payload:false});
          navigate('/',{replace:true});
  
      }
 
    }

    const deleteAccount = async(_id) =>{
      //console.log(_id);
      let response = await deleteUser(_id);
      if(response.status === 200){
        alert(response?.data?.message)
        dispatch({type:"USER",payload:false});
        navigate('/',{replace:true});
    }else{
      alert("Failed !")
    }
   }

  return (
    <Component container  >
       <LeftContainer item lg={4} md={4} sm={12} xs={12} >
            
            <Box style={{background:'#fff',padding:20}}>
            
            <img src={imagePhoto} alt="avatar"/> 
            <Typography >Hello,</Typography>
            <Typography>{userData?.firstname}</Typography>&nbsp;
            
            <Box >
              
                
                <Typography variant="h6" style={{color:'#878787'}} > <PersonIcon/> ACCOUNT INFORMATION</Typography>
                <Typography style={{fontSize:18}}>Profile Information</Typography>
                
                <Button style={{fontSize:14, width:'45%',color:'#878787', background:'lavender',fontWeight:600}} onClick={()=>navigate('/account/orders')} > 
                 <ShoppingBasket style={{padding:4}}/> My Orders <ArrowRight style={{fontSize:35}} />
                 </Button>&nbsp;&nbsp;
                
                <Button style={{fontSize:16 ,color:'#fff',width:'45%',fontWeight:600,background:'red'}} onClick={()=>userLogout()} >
                  <PowerSettingsNewIcon style={{color:'#000'}}/> 
                  Logout
                  </Button>
               
                
            </Box>
            </Box>
       </LeftContainer>
       <RightContainer item lg={8} md={8} sm={12} xs={12}>
            <Box style={{background:'#fff',padding:20}}>
            <Typography style={{fontWeight:600}}>Personal Information</Typography>&nbsp;
            <Typography>USERNAME: {userData?.username}</Typography>
            <Typography>FIRSTNAME: {userData?.firstname} </Typography>
            <Typography>LASTNAME: {userData?.lastname}</Typography>&nbsp;
            <Typography>EMAIL-ADDRESS: {userData?.email}</Typography>&nbsp;
            <Typography>MOBILE NO: {userData?.phone}</Typography>&nbsp;
        
            <Typography style={{fontWeight:600}}>FAQs</Typography>

            <p style={{fontWeight:500}}>What happens when I update my email address (or mobile number)? </p>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number). </p>

            <p style={{fontWeight:500}}>When will my Flipkart account be updated with the new email address (or mobile number)?</p>
            <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
            
            <p style={{fontWeight:500}}>What happens to my existing Flipkart account when I update my email address (or mobile number)?</p>
            <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
            
            <p style={{fontWeight:500}}>Does my Seller account get affected when I update my email address?</p>
            <p>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
            <Button style={{fontSize:16 ,color:'#fff',width:'100%',fontWeight:600,background:'red'}} onClick={()=>deleteAccount(userData?._id)} >
                  <PowerSettingsNewIcon style={{color:'#000'}}/> 
                   Delete Account
                  </Button>
            </Box>
       </RightContainer>
    </Component>
  )
}

export default ProfileDetails
