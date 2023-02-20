import React from 'react'
import { Box, Typography, styled ,Button, Divider} from '@mui/material'
import  Carousel  from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';



const responsive = {
   desktop:{
        breakpoint:{ max: 3000, min:1024 },
        items:5,
   },
   tablet:{
        breakpoint: { max: 1024, min: 462},
        items: 3,
   },
   mobile:{
        breakpoint: { max: 464, min: 0},
        items: 2
   }
}

const Component = styled(Box)`
margin-top: 10px;
background: #ffffff;
`
const Deals = styled(Box)`
padding: 15px 20px;
display:flex;
align-items:center;
`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:#7f7f7f`;

const DealText = styled(Typography)`
font-size:24px;
font-weight:600;
margin-right:25px;
line-height:32px;
`;

const ViewAllButton = styled(Button)`
margin-left:auto;
font-size:13px;
font-weight:600;
border-radius:2px;
background-color:#2874f0;
`;

const Image = styled('img')({
    width:'auto',
    height:150,
});

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';



const Slide = ({products, title, timer}) => {

    const renderer = ({hours, minutes, seconds}) =>{
        return <Box variant="span">
            {hours} : {minutes} : {seconds} Left
        </Box>
    }

  return (
    <Component>
        <Deals>
            <DealText>{title}</DealText>
            {timer && 
                  <Timer>
                     <img src = {timerURL} alt='timerLogo' style={{width:24}} />
                     <Countdown date={Date.now()+5.04e+7} renderer={renderer} />
                  </Timer>
            }
            <ViewAllButton variant="contained" color="primary" >View All</ViewAllButton>
        </Deals>
        <Divider/>
     
      <Carousel
        responsive = { responsive }
        centerMode={true}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
            products?.map((item, index)=>(

              <Link to = {`/product/${item?.id}`} style={{textDecoration:'none'}} key={index+1}> 

                <Box textAlign='center' style={{padding:'25px 15px'}}>
                <Image src = { item?.url} alt = "logo"/>
                <Text style={{ fontWeight: 600, color: '#212121' }} >{item?.title?.shortTitle}</Text>
                <Text style={{ color: 'green' }} >{item?.discount}</Text>
                <Text style={{ color: '#212121', opacity: '.6' }} >{item?.tagline}</Text>
                </Box>

                </Link>
            ))
        }
      </Carousel>
      
    </Component>
  )
}

export default Slide
