import React from 'react'
import ProductCard from '../components/ProductCard'
import { useGetProductsQuery } from '../services/apiService';
import { Box } from '@mui/material';
function Product() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const baseUrl = 'http://localhost:5000/';

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(products)
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={{
          ...product,
          image: `${baseUrl}${product.image.replace(/\\/g, '/')}`
        }}
      />
    ))}
  </Box>
  )
}

export default Product