// src/components/ProductForm.js
import React, { useState } from 'react';
import { Box, Button, Grid, TextField, MenuItem, Typography } from '@mui/material';
import { useAddProductMutation } from '../services/apiService';

const categories = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'books', label: 'Books' },
  { value: 'furniture', label: 'Furniture' },
];

const ProductForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const [addProduct, { isLoading, error }] = useAddProductMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormValues({ ...formValues, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('description', formValues.description);
    formData.append('price', formValues.price);
    formData.append('category', formValues.category);
    formData.append('image', formValues.image);

    try {
     const result= await addProduct(formData).unwrap();
      console.log(result)
      // Optionally reset the form or show a success message
    } catch (err) {
      console.error('Failed to save the product: ', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Product Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Product Name"
            fullWidth
            variant="outlined"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Product Description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="outlined"
            type="number"
            value={formValues.price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            fullWidth
            select
            variant="outlined"
            value={formValues.category}
            onChange={handleInputChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            component="label"
            sx={{ backgroundColor: '#575fcf' }}
          >
            Upload Image
            <input type="file" hidden onChange={handleImageChange} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#575fcf' }}
            disabled={isLoading}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {error && <p style={{ color: 'red' }}>Failed to submit the form: {error.message}</p>}
    </Box>
  );
};

export default ProductForm;
