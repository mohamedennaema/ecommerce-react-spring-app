import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homepage/homepage";
import CardHandel from "../customer/components/card/card";
import Product from "../customer/components/Products/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import NavBar from "../customer/components/navigation/navigation";
import Footer from "../customer/components/Footer/Footer";
import ChekOut from "../customer/components/chekout/Chekout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import PaymentSuccess from "../customer/payment/Payment";

import CartTotal from "../customer/payment/CartTotal";


const CustomRoutes=()=>{
    return(
        <div>
           <div>
             <NavBar/>
           </div>
           
           <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<HomePage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>

            <Route path="/card" element={<CardHandel/>}></Route>
            <Route path="/:laveOne/:laveThree" element={<Product/>}></Route>
            <Route path="/product/:productId" element={<ProductDetails/>}></Route>
            <Route path="/checkout" element={<ChekOut/>}></Route>
            <Route path="/acount/orders" element={<Order/>}></Route>
            <Route path="/acount/orders/:orderId" element={<OrderDetails/>}></Route>
            <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>

           
 <Route path="/CartTotal/:orderId" element={<
            CartTotal/>}></Route>




            
           </Routes>
           <div>
            <Footer/>
           </div>
        </div>
    )
}
export default CustomRoutes;