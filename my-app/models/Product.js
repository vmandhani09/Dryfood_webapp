// models/Product.js

import mongoose from 'mongoose';

const WeightOptionSchema = new mongoose.Schema({
  label: { type: String, required: true },     // e.g., "250g"
  price: { type: Number, required: true }      // e.g., 180
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true    // used for dynamic routing
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    unique: true
  },
  weights: [WeightOptionSchema],   // array of weight-price options
  isFeatured: {
    type: Boolean,
    default: false
  },
  tags: [String],                   // e.g., ["nuts", "snacks"]
  additionalInfo: String,          // optional, like storage tips
  relatedProducts: [String],       // store related product slugs or ObjectIds
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
