import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/dbConnect";
import Product from "../../../../models/Product";

export async function GET(req: NextRequest, context: { params?: { slug?: string } }) {
  try {
    await dbConnect();
    
    // ✅ Ensure `params.slug` is correctly retrieved
    const slug = context.params?.slug;
    console.log("Extracted Slug:", slug);

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ message: "Invalid request: Missing or incorrect slug" }, { status: 400 });
    }

    // ✅ Ensure MongoDB finds the product correctly by slug
    const product = await Product.findOne({ slug }).lean();

    if (!product) {
      return NextResponse.json({ message: `Product not found for slug: ${slug}` }, { status: 404 });
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);

    // ✅ Explicitly cast error to `any` or check if it has a `.message`
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json({ message: "Failed to fetch product details", error: errorMessage }, { status: 500 });
  }
}