import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../components/Order/OrderTrack";
import { getOrder } from "../../state/order/Action";
import { processPayment } from "../../state/payment/paymentActions";


const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_status"));
  }, []);

  useEffect(() => {
    const data = { orderId, paymentId };
    dispatch(getOrder(orderId));
    dispatch(processPayment(data));
  }, [orderId, paymentId]);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your order has been placed.
        </Alert>
      </div>
      <OrderTracker activeStep={1} />

      {order.order?.orderItems.map((item) => (
        <Grid
          container
          item
          className="shadow-x1 rounded-md p-5"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          key={item.product.id} // Add a unique key for each item
        >
          <Grid item xs={6}>
            <div className="flex items-center">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src={item.product.imageURL} // Replace with your image URL logic
                alt={item.product.title}
              />
              <div>
                <p>{item.product.title}</p>
              </div>
            </div>
          </Grid>
          {/* Add the remaining grid items or data you want to display */}
        </Grid>
      ))}
    </div>
  );
};

export default PaymentSuccess;
