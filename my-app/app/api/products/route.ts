import { NextRequest, NextResponse } from "next/server";

import Product from "../../../models/Product";
import { dbConnect } from "../../../lib/dbConnect";

// ✅ Handle Fetching All Products (GET Request)
export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find({})
      .select("name category brand stockQuantity weights image description slug") // ✅ Ensures needed fields are returned
      .lean();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);

    // ✅ Check if error is an instance of Error before accessing `.message`
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { message: "Failed to fetch products", error: errorMessage },
      { status: 500 }
    );
  }
}