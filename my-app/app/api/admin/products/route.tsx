import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@lib/dbConnect";
import Product, { IProduct } from "@models/Product";
import mongoose, { Model } from "mongoose";


// ✅ Handle Product Submission (POST Request)
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

    // ✅ Validate Required Fields
    if (!body.name || !body.slug || !body.category || !body.sku || !body.weights?.length) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newProduct = new Product(body);
    await newProduct.save();

    return NextResponse.json({ message: "Product added successfully!", product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add product", error: error.message }, { status: 500 });
  }
}

// ✅ Handle Fetching Products with Pagination (GET Request)
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const products = await Product.find({}).skip(skip).limit(limit).lean<IProduct[]>();
    const total = await Product.countDocuments();

    return NextResponse.json({ products, total, page, limit }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch products", error: error.message }, { status: 500 });
  }
}