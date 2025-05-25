import { NextRequest, NextResponse } from "next/server";
import User, { IUser } from "../../../models/User";
import { dbConnect } from "../../../lib/dbConnect";

// ✅ Handle Fetching All Users (GET Request)
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // ✅ Exclude Admins & Format Full Name
    const users = await User.find({ role: { $ne: "admin" } })
      .select("firstName lastName email role createdAt")
      .lean<IUser[]>();

    // ✅ Add Full Name to Response
    const formattedUsers = users.map((user) => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`,
    }));

    return NextResponse.json({ users: formattedUsers, status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);

    // ✅ Safely extract error message
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json({ message: "Failed to fetch users", error: errorMessage }, { status: 500 });
  }
}