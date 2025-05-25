// app/api/login/route.js
import { dbConnect } from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
  }

  // optionally send only public info (excluding password)
  return new Response(JSON.stringify({
    _id: user._id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    mobile: user.mobile,
  }), { status: 200 });
}
