import { useState, useContext } from 'react';
import {AppBar, Toolbar, styled, Box, Typography, Drawer, List, ListItem} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom'

//components
import Search from './Search'
import CustomButtons from './CustomButtons';

const StyleHeader = styled(AppBar)`
       background-color:#2874f0;
       height:55px;
`
const Component = styled(Link)`
       margin-left:12%; 
       line-height:0;
       text-decoration:none;
       color:inherit; 
`
const SubHeading = styled(Typography)`
      font-size:10px;
      font-style:italic;
` 
const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:4
});

const CustomButtonWrapper = styled(Box)(({theme})=>({
    margin: '0 0 0 5%',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));

const MenuButton = styled(IconButton)(({theme})=>({
     display:'none',
     [theme.breakpoints.down('md')]:{
        display:'block',
     }
}));

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


const Header = () =>{

    const [ isopen , setIsOpen ] = useState(false);
    //const [ on , setOn ] = useState(false);
    const {open, setOpen} = useContext(DataContext);
    
  
    const handleOpen = () =>{
        setIsOpen(!isopen);
    }
    
    const handleClose = () =>{
        setIsOpen(false);
        setOpen(true);
     
    }
  

    const list = () =>(
      
        <Box style={{width:200}} onClick = {handleClose} >
            <List>
              <ListItem button>
                <CustomButtons  />
              </ListItem>
            </List>
          
        </Box>
    )

    return(
        <>
       <StyleHeader>
        <Toolbar style={{minHeight: 55}} >
              <MenuButton style={{color:'inherit'}} onClick={handleOpen} >
                <Menu/>
              </MenuButton>
              <Drawer open={isopen} onClose={handleClose}>
                   {list()}
              </Drawer>
            <Component to='/'>
            <img src={logoURL} alt="Flipkart-logo" style={{ width:75 }} /> 
           
            <Box style={{display:'flex'}}>
                <SubHeading>
                       Explore&nbsp; 
                       <Box component="span"style={{ color:"#FFE500" }}>Plus</Box>
                </SubHeading>
                <PlusImage src={subURL} alt="Sub-Flipkart-Logo"/>
            </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
           
        </Toolbar>
       </StyleHeader>
        </>
    )
}
export default Header;