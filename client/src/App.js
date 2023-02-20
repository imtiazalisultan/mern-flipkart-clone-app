

//Components
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/system';
import DataProvider from './components/context/DataProvider';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import ProfileDetails from './components/header/ProfileDetails';
import Order from './components/cart/Order';
import Footer from './components/footer/Footer';
import LoginScreen from './components/login/LoginScreen';
import OrderPlace from './components/cart/OrderPlace';
import Contact from './components/footer/Contact';



function App() {

  return (
    <DataProvider >
      <BrowserRouter>
        <Header/>
        <Box style={{ marginTop:54 }}>

        <Routes> 
           <Route path='/' element={<Home/>}/>
           <Route path='/product/:id' element={<DetailView/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/profile' element={<ProfileDetails/>}/>
           <Route path='/account/orders' element={<Order/>} />
           <Route path='/account/login' element={<LoginScreen/>} />
           <Route path='/cart/orders' element={<OrderPlace/>}/>
           <Route path='/contact' element={<Contact/>}/>  
        </Routes> 
    
        </Box>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
