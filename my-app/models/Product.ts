import mongoose, { Schema, Document, Model } from "mongoose";

interface IWeight {
  label: string;
  price: number;
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  category: string;
  sku: string;
  weights: IWeight[];
  stockQuantity: number;
  discountPrice?: number;
  brand?: string;
  tags?: string[];
  createdAt: Date;
}

const WeightSchema = new Schema<IWeight>({
  label: { type: String, required: true },
  price: { type: Number, required: true },
});

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  weights: [WeightSchema],
  stockQuantity: { type: Number, required: true },
  discountPrice: { type: Number },
  brand: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }, // ✅ Ensures automatic timestamp
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product; 