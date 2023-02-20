 
import { Typography, Box, styled, Table,TableCell,TableBody, TableRow} from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


const SmallText = styled(Box)`
vertical-align:baseline;
& > p{
    margin-top:10px;
    font-size:14px;
}
`
const StyledBadge = styled(Badge)`
color: #00CC00;
font-size:15px;
margin-right:10px;
`
const ColumnText = styled(TableRow)`
vertical-align:baseline;
&>td {
    font-size:14px;
    border:none;
}
`

const ProductDetails = ({product}) =>{

    const date = new Date( new Date().getTime()+(5*24*60*60*1000));
    
    return (
        <>
        <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop:5, color: '#878787', fontSize:14}}>
                8 rating & 1 review
               <span><img src={fassured} style={{width:77, marginLeft:20}} alt="assuredLogo" /></span> 
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize:28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }} ><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }} >{product.price.discount}</Box>
            </Typography>
            <Typography style={{fontWeight:550}} >Available offers</Typography>
            
            <SmallText>
            <Typography><StyledBadge/>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
            <Typography><StyledBadge/>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
            <Typography><StyledBadge/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹750 Know More</Typography>
            <Typography><StyledBadge/>Combo OfferBuy 3 items save 3%; Buy 4 save 4%; Buy 5+ save 5%</Typography>
            <Typography><StyledBadge/>Partner OfferPurchase now & get a surprise cashback coupon in February / March 2023Know More</Typography>
            </SmallText>

            <Table>
                <TableBody>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600 }}>Delivery by {date.toDateString()} </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}} >Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}} >Seller</TableCell>
                    <TableCell>
                        <Box component="span" style={{ color: '#2874f0'}}>SuperComNet</Box>
                        <Typography>GST Invoice Available</Typography>
                        <Typography>View more seller starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img style={{width:390}} src={adURL} alt="flipkartPoint" />
                    </TableCell>
                </ColumnText>
                <ColumnText  >
                    <TableCell style={{color:'#878787'}} >Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
                </TableBody>
            </Table>
        
        </>
    )
 }

 export default ProductDetails;