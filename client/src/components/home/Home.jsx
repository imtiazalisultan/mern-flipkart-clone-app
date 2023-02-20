import React from 'react'
import { styled, Box } from '@mui/material';

//Component
import NavBar from './NavBar';
import Banner from './Banner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { TailSpin } from 'react-loader-spinner';
import Loader from '../loader/Loader';

const Container = styled(Box)`
padding: 10px;
background-color: #f2f2f2`

const Home = () => {

  const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getProducts());
  },[dispatch]);

  
  const { products, loading }= useSelector(state=>(state.getProducts));
  
    //console.log(products, loading);

  return (
    <>
      <NavBar/>
      <Container>
        <Banner/>
        <MidSlide products = { products } title="Deals of the Day" timer={true} />
        <MidSection/>
        <Slide products = { products } title="Top Discount" timer={false} />
        <Slide products = { products } title="Recommended Deals" timer={false} />
        <Slide products = { products } title="Suggessted Item" timer={false} />
      </Container>
      
    </>
  )
}

export default Home
