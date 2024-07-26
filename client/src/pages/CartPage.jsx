import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../slice/cartslice';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} sx={{ display: 'flex', marginBottom: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.image}
              alt={item.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <IconButton onClick={() => handleDecrease(item._id)} disabled={item.quantity <= 1}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                  <IconButton onClick={() => handleIncrease(item._id)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemove(item._id)}
                  sx={{ mt: 2 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))
      )}
    </Box>
  );
}

export default CartPage;
