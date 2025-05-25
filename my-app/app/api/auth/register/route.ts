
import { dbConnect } from "../../../../lib/dbConnect";
import User from "../../../../models/User";

import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { firstName, lastName, mobile, email, password } = body;

    if (!firstName || !lastName || !mobile || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      mobile,
      email,
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({
        message: "User registered successfully",
        user: {
          id: newUser._id,
          fullName: `${newUser.firstName} ${newUser.lastName}`,
          email: newUser.email,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}