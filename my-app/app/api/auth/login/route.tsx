
import { dbConnect } from "@lib/dbConnect";
import bcrypt from "bcryptjs";
import React from "react";
import { NextRequest } from "next/server";
import User from "@models/User";
export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
  }

  return new Response(
    JSON.stringify({
      _id: user._id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      mobile: user.mobile,
    }),
    { status: 200 }
  );
}