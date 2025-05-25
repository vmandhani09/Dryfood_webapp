import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";
import mongoose from "mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid product ID format" }, { status: 400 });
    }

    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
    }

    const body = await req.json();
    delete body._id;

    if (!body.name || !body.category || typeof body.price !== "number") {
      return NextResponse.json({ message: "Invalid product data" }, { status: 400 });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          name: body.name,
          category: body.category,
          price: body.price,
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated", product: updatedProduct }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}
