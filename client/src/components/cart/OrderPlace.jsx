import { Grid, styled, Button} from '@mui/material'
import TotalBalance from './TotalBalance';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import { useContext } from 'react';
import PlaceOrder from './PlaceOrder';
import { useSelector } from 'react-redux'


const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0px'
    }
}))

const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginBottom:10
    }
}))



const OrderPlace = () => {

    const { cartItems } = useSelector(state=>state.cart);
    const navigate = useNavigate()
    const { setAccount ,state,setUserData, dispatch } = useContext(DataContext);

  return (
    <>
              
              {  state ? 
               
                   <Container container> 
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <PlaceOrder/>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                           <TotalBalance cartItems={ cartItems } /> 
                    </Grid>
                    </Container>
                  :
                  <Container>Please Login First..  <Button style={{background:'cadetblue',color:'#fff'}} onClick={()=>navigate('/account/login')} >Login</Button></Container> 
              }
              
    </>
  )
}

export default OrderPlace

