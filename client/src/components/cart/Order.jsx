import { Box, styled, Button,Grid, Typography, Table,TableCell,TableBody, TableRow} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


import {useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { authenticateLogin, authenticateSignup, loginSubmit, getDataUser } from '../service/api';
import { DataContext } from '../context/DataProvider';
import { useEffect } from 'react';
import { useState } from 'react';

const imgurl = "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

const Container = styled(Table)`
background:#fff;
width:100%;

`
// const Component = styled(Box)`
// padding:30px 130px;
// `

// const Container = styled(Grid)(({theme})=>({
//   background:'#fff',
//   width:'100%',
  
//   [theme.breakpoints.down('md')]:{
//       padding:'20px 20px',

//   }
// }))
const Component = styled(Grid)(({theme})=>({
  width:'100%',
  padding:'30px 135px',
  [theme.breakpoints.down('md')]:{
     
  }
}))

const Order = () => {

  const date = new Date( new Date().getTime());
  const [order,setOrder] = useState([]);

  const navigate = useNavigate()
  const { dispatch } = useContext(DataContext);


 useEffect(()=>{
    getCartDetails();
 },[])

 const getCartDetails = async() =>{
  try{
      let res = await  getDataUser();
     
      const data = await res.json; 
      //console.log(data);
      if(!res.status === 200){
          navigate('/account/login');
          const error = new Error(res.error);
         throw error; 
          
      }else{
        setOrder(res?.data?.orders);
        dispatch({type:'USER',payload:true});
        navigate('/account/orders');
         
      }

       }catch(err){
         console.log(err);
         
    }
    //console.log(order);
      
 }

  //console.log(userData);
  return (
    
    <Component container>
      <Typography variant="h5">Order History</Typography><br/><br/>

      {
        order?.length == 0 ?
        <> 
        <Typography>Your Order History is Empty !..</Typography> 
        <Button style={{width:'20%', background:'#fb641b', color:'#fff'}} onClick={()=>navigate('/')}>Shop Now</Button> </> : 
     
      <>
              <Container  item lg={8} md={8} sm={12} xs={12}  >
                 <TableRow >
                   <TableCell style={{fontWeight:600}}>Product</TableCell>
                   <TableCell style={{fontWeight:600}}>Price</TableCell>
                   <TableCell  style={{fontWeight:600}}>Quantity</TableCell>
                   <TableCell  style={{fontWeight:600}}>Address</TableCell>
                   <TableCell style={{fontWeight:600}}>Order Status</TableCell>
                   <TableCell style={{fontWeight:600}}>Payment</TableCell>
                 </TableRow>
        {
          order?.map((item)=>(
            
                 <>
                {item?.cart.map((cartorder)=>(
                   <>  
                  <TableRow >
                   <TableCell><img style={{height:115, background:'pink'}} src={cartorder?.url} alt="product" /><br/>{cartorder.title?.shortTitle}</TableCell>
                   <TableCell>₹{cartorder?.price?.cost}</TableCell>
                   <TableCell>{cartorder?.quantity}</TableCell>
                   <TableCell>{item?.address}</TableCell>
                   <TableCell><CircleIcon style={{fontSize:15, color:'green'}}/> Order at {cartorder?.time}</TableCell>
                   <TableCell>{item?.payment}</TableCell>
                 </TableRow>
                     </>
                   ))}
                 </>
                 
              
          ))
        }
        </Container>
             
      </>
       }
        {/* <Container>
          
               <img style={{height:125}} src={imgurl} alt="product" />
               <Typography>Watch seriess200</Typography>
               <Typography>₹135</Typography>
               <Typography><CircleIcon style={{fontSize:15, color:'green'}}/> Delivered on Oct28,2023</Typography>
               <Typography>Delivery in process</Typography>
               </Container> */}
      
    </Component>
  )
}

export default Order
