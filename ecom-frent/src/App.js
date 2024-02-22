import logo from './logo.svg';
import './App.css';
import NavBar from './customer/components/navigation/navigation';
import HomePage from './customer/pages/homepage/homepage';
import Product from './customer/components/Products/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CardHandel from './customer/components/card/card';
import ChekOut from './customer/components/chekout/Chekout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomRoutes from './Routes/CustemRoutes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';




function App() {
  return (
    <div className="App   ">
          
           <Routes>
        <Route path='/*' element={<CustomRoutes/>}></Route>
      </Routes>
           
           

     
      
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <CardHandel/> */}
        {/* <ChekOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </div>
    </div>
  );
}

export default App;
