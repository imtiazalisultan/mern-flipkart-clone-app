import { Box, Typography, styled, Button, TextField,Grid} from '@mui/material';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Container = styled(Box)`
display:flex;
justify-content:center;
align-item:center;

`

const orderDetails = {
    address:"",
    payment:"",
    cart:""
}

const PlaceOrder = () => {

    
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [order, setOrder] = useState(orderDetails);
    
    const { cartItems } = useSelector(state=>state.cart);

    const navigate = useNavigate();

    useEffect(()=>{
        totalAmount();
    },[cartItems])


    const totalAmount = () =>{
        let price = 0, discount = 0;
        cartItems.map(item=>{
            price += item.price.mrp * (item.quantity);
            discount += (item.price.mrp - item.price.cost) * (item.quantity);
            
       });
       setPrice(price);
       setDiscount(discount);
       setOrder({...order, cart:cartItems})
      }
     // console.log(price, cartItems.length, discount);

      const onValueChange = (e) =>{
        setOrder({...order,[e.target.name]:e.target.value});
      } 

      const orderSubmit = async(e) =>{
        e.preventDefault();
       
        const { address ,payment ,cart } = order;

             const res = await fetch('/api/login/orders',{
               method:"POST",
               headers:{
                 "Content-Type":"application/json"
               },
               body:JSON.stringify({
                address,payment,cart
               })
             });
             const data = await res.json();
             //console.log(data);
             if(res.status === 400){

               //console.log("Order Failed");
               alert(`${data?.error}`)
             }else{
               alert(`${data?.message}`);
               setOrder({address:"", payment:"", cart:""});
               navigate('/account/orders');
             }
      } 

  return (
    <Container>
        
        <form method="POST" onSubmit={orderSubmit} style={{width:'50%',background:'#fff',padding:'50px 135px 50px 135px',border:'2px solid lavender'}} >
        <Typography variant="h5" color="#878787">Payment Page</Typography>&nbsp;
               <Typography>
                Delivery Address: &nbsp; &nbsp;<TextField label="Please Fill Address Details" name="address" onChange={onValueChange}  variant="standard" />
                </Typography><br/>

            <Typography>Please Select Payment Method:</Typography><br/>
               <input type="radio" id="card" name="payment" onChange={onValueChange} value="VISA CREDIT/DEBIT CARD"/>
               <label for="card">VISA CREDIT/DEBIT CARD</label><br/>
               <input type="radio" id="upi" name="payment" onChange={onValueChange} value="UPI PAYMENT"/>
               <label for="upi">UPI PAYMENT</label><br/>
               <input type="radio" id="cod" name="payment" onChange={onValueChange} value="COD"/>
               <label for="cod">COD (Cash On Delivery)</label><br/><br/>

            <Typography >Total Price you will have to pay including delivery charges: ₹{price-discount +40}</Typography>&nbsp;
            <Button type="submit"  style={{width:'100%', background:'lightsteelblue', color:'green'}} >Buy Now</Button><br/><br/>
            <Button  style={{width:'100%', background:'red', color:'#fff'}} onClick={()=>navigate('/')} >Cancel Order</Button>
        </form>
            
    </Container>
  )
}

export default PlaceOrder

{/* <table>
<tr>
   <th>Product</th>
   <th>Value</th>
   <th>MRP</th>
   <th>Price</th>
   <th>Discount</th>
   <th>Quantity</th>
</tr>
{
cartItems.map((item)=>(

<tr>
   <td>{item.title.shortTitle}</td>
   <td>{item.price.cost}</td>
   <td>{item.price.mrp}</td>
   <td>{price}</td>
   <td>{discount}</td>
   <td>{item.quantity}</td>
</tr>        
))
}
<tr>
   <td>Total</td>
   <td>{565}</td>
</tr>
</table> */}
