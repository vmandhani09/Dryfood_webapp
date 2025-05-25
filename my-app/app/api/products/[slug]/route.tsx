    import { NextRequest, NextResponse } from "next/server";
    import { dbConnect } from "../../../../lib/dbConnect";
    import Product from "../../../../models/Product";


    export async function GET(req: NextRequest, context: { params?: { slug?: string } }) {
    try {
        await dbConnect();
        
        // ✅ Ensure `params.slug` is correctly retrieved
        const slug = context.params?.slug;
        console.log("Extracted Slug:", slug); // ✅ Debugging log

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
        return NextResponse.json({ message: "Failed to fetch product details", error: error.message }, { status: 500 });
    }
    }
    