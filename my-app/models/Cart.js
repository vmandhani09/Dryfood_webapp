import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      name: String,        // Useful for display without extra DB query
      image: String,       // Product image for quick display
      price: Number,       // Store price at the time of adding to cart
      weight: String,      // Selected weight option (250g, 1kg, etc.)
      quantity: {
        type: Number,
        default: 1
      },
      total: Number         // price * quantity (pre-calculated for faster rendering)
    }
  ],
  cartTotal: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}); 

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
