import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { createPaymentIntent, getOrderDetails } from '../slices/orderSlice';

const stripePromise = loadStripe('your_publishable_key'); // Replace with your Stripe publishable key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-success`,
      },
    });

    if (submitError) {
      setError(submitError.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!stripe || processing}
        sx={{ mt: 3 }}
      >
        {processing ? <CircularProgress size={24} /> : 'Pay Now'}
      </Button>
    </form>
  );
};

const Payment = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState('');

  const { order, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    if (order && !order.isPaid) {
      dispatch(createPaymentIntent(orderId)).then((result) => {
        if (!result.error) {
          setClientSecret(result.payload.clientSecret);
        }
      });
    }
  }, [dispatch, order, orderId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );
  }

  if (!order) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Order not found
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Payment
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Order Summary
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography>Order ID: {order._id}</Typography>
            <Typography>Total Amount: ${order.totalPrice}</Typography>
          </Box>
        </CardContent>
      </Card>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: 'stripe',
            },
          }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
};

export default Payment;
