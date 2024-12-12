import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  Rating,
  Box,
  TextField,
  CircularProgress,
  Card,
  CardContent,
} from '@mui/material';
import { fetchProductDetails } from '../slices/productSlice';
import { addToCart } from '../slices/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

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

  if (!product) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Product not found
      </Typography>
    );
  }

  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      <Grid item xs={12} md={6}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating value={product.rating} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.numReviews} reviews)
          </Typography>
        </Box>
        <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
          ${product.price}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {product.description}
        </Typography>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Price:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>${product.price}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Status:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Typography>
              </Grid>
              {product.countInStock > 0 && (
                <>
                  <Grid item xs={6}>
                    <Typography>Quantity:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      select
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                      SelectProps={{
                        native: true,
                      }}
                      size="small"
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddToCart}
          disabled={product.countInStock === 0}
        >
          {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
