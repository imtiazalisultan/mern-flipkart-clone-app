import React from 'react'
import { InputBase, Box , styled,List, ListItem} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
background: #fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex

`
const InputSearchbase = styled(InputBase)`
padding-left: 20px;
width:100%;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;


const Search = () => {

  const dispatch = useDispatch();

  const { products }= useSelector(state => state.getProducts);
 

  const [text, setText] = useState()

  const getText = (e) =>{
    setText(e.target.value)
  }


  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <SearchContainer>
     
    <InputSearchbase placeholder='Search for products,brands and more' onChange={getText} value={text} />
    
    <SearchIconWrapper>
        <SearchIcon/>
    </SearchIconWrapper>
    {
      text &&
      <ListWrapper>
         
             { products.filter((item)=>
                item.title.longTitle.toLowerCase().includes(text.toLowerCase()) 
             ).map((item,index)=>
                
                <ListItem key={index}>
                  
                  <Link 
                  to={`/product/${item.id}`}
                  onClick={()=>setText('')}
                  style={{textDecoration:'none', color:'inherit'}}>
                  {item.title.longTitle}
                  </Link>
                  
                </ListItem>
             )}
         
      </ListWrapper>
    }
    </SearchContainer>
    
  )
}

export default Search
