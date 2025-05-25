import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../../../lib/dbConnect";
import Product from "../../../../../models/Product";
import React from "react";
import mongoose from "mongoose"; // ✅ Ensures correct ObjectId handling


export async function GET(req: NextRequest, context: { params?: { id?: string } }) {
  try {
    await dbConnect();

    // ✅ Extract the `id` instead of slug
    const id = context.params?.id;
    console.log("Extracted Product ID (Admin):", id); // ✅ Debugging log

    // ✅ Ensure `id` is a valid MongoDB ObjectId before querying
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid Product ID format" }, { status: 400 });
    }

    // ✅ Find product by `_id`
    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json({ message: `Product not found for ID: ${id}` }, { status: 404 });
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error("Error fetching product (Admin):", error);
    return NextResponse.json({ message: "Failed to fetch product details", error: error.message }, { status: 500 });
  }
}


export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    await dbConnect();

    const { id } = context.params;
    console.log("Updating Product ID:", id); // ✅ Debugging log

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid Product ID format" }, { status: 400 });
    }

    const body = await req.json();
    console.log("Update Request Body:", body); // ✅ Debugging log

    // ✅ Exclude `_id` from the update object (MongoDB does not allow `_id` updates)
    delete body._id;

    // ✅ Ensure the price is properly set in the update request
    if (!body.name || !body.category || typeof body.price !== "number") {
      return NextResponse.json({ message: "Invalid product data. Please provide name, category, and price." }, { status: 400 });
    }

    console.log("Updating price:", body.price); // ✅ Debugging log

    // ✅ Directly update the price field using `$set`
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: { name: body.name, category: body.category, price: body.price } },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ message: `Product not found for ID: ${id}` }, { status: 404 });
    }

    console.log("Final Updated Product:", updatedProduct); // ✅ Debugging log

    return NextResponse.json({ message: "Product updated successfully!", product: updatedProduct }, { status: 200 });
  } catch (error) {
    console.error("Error updating product (Admin):", error);
    return NextResponse.json({ message: "Failed to update product", error: error.message }, { status: 500 });
  }
}