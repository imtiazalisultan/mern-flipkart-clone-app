
import { Typography , Box, Menu, MenuItem, styled} from '@mui/material'
import React ,{ useEffect} from 'react';
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { authenticateLogout } from '../service/api';

const Component = styled(Menu)`
margin-top:2px
`;
const Logout = styled(Typography)`
font-size:14px;
margin-left:10px;
`
const MyProfile = styled(Typography)`
font-size:14px;
margin-left:10px;
`

const Profile = () => {

    const [open, setOpen] = useState(false);

    const {state,dispatch, userData } = useContext(DataContext);

    //console.log(userData);

    const navigate = useNavigate();

    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const logout = async() =>{
       
        let response = await authenticateLogout();
        //console.log(response);
        if(response.status === 200){
          handleClose();
          dispatch({type:"USER",payload:false});
          navigate('/',{replace:true});
          alert(`${response?.data} Thanks for Shopping Us!`)
  
      }
    }
    
  const { firstname } = userData

    const profileDetails = () =>{
      navigate('/profile')
    }


  

  return (
    <>
    <Box onClick={handleClick} style={{display:'flex', cursor:'pointer'}}>
        <Typography  style={{marginTop:2}} >{firstname}</Typography>
        <KeyboardArrowDownIcon style={{marginInline:5, width:18}} />
    </Box>
     <Component
       
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      
      >
        <MenuItem onClick={()=>{handleClose();logout()}}>
            <PowerSettingsNewIcon color='primary' fontSize='medium' />
            <Logout>
                Logout
            </Logout>
        </MenuItem>
        <MenuItem onClick={()=>{profileDetails();handleClose()}}>
            <AccountCircleIcon color='primary' fontSize='medium' />
            <MyProfile>
                My Profile
            </MyProfile>
        </MenuItem>
      </Component> 
    </>
  )
}

export default Profile
