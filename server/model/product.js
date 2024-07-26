import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  
  },
  description: {
    type: String,
    
  },
  price: {
    type: Number,
   
  },
  category: {
    type: String,
  
  },
  image: {
    type: String,
    
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
