import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartslice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Card sx={{ minWidth:200, margin: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image} 
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category} 
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleAddToCart}>
            Add to Cart
          </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default ProductCard;
