import { Box , styled, Typography} from '@mui/material'
import React from 'react'

//Components
import { navData } from '../constants/data'


const Component = styled(Box)(({theme})=>({
display:'flex',
margin: '55px 130px 0 130px',
justifyContent: 'space-between',
overflow:'overlay',
[theme.breakpoints.down('lg')]:{
 margin:0
}
}));

const Container = styled(Box)`
padding: 12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;
`

const Navbar = () => {
  return (
    <div style={{background:'#fff'}}>
        <Component>
         { navData.map((data,index) =>(
            <Container key={index}>
                <img src={data.url} alt="navData" style={{width: 64}} />
                <Text>{data.text}</Text>
            </Container>
         ))
         }
        </Component>
     
    </div>
  )
}

export default Navbar
