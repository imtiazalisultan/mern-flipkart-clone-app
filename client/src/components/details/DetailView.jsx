import React, { useEffect, useContext }  from 'react';
import { Box, styled, Typography, Grid } from '@mui/material';
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/actions/productActions';
import ActionItems from './ActionItems';
import ProductDetails from './ProductDetails';
import { DataContext } from '../context/DataProvider';

const Component = styled(Box)`
background:#F2F2F2;
margin-top:55px;
`
const Container = styled(Grid)(({theme})=>({
    background:'#FFFFFF',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))


const RightContainer = styled(Grid)`
margin-top: 50px;
padding:0px 20px

`



const DetailView = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    const {product, loading } = useSelector(state=>state.getProductDetails);

    useEffect(()=>{
        if(product && id !== product.id ){
            dispatch(getProductDetails(id));
        }
        
    },[dispatch, id, product,loading])

   
  return (
    <Component>
        
       {
       product && Object.keys(product).length &&
        <Container container>
            <Grid item lg={4} md={6} sm={6} xs={12}> 
                <ActionItems product={product} />
            </Grid>
            
            <RightContainer item lg={8} md={6} sm={6} xs={12} >
                <ProductDetails product={product}/>
            </RightContainer>    
        </Container>
       }
    </Component>
  )
}

export default DetailView
