import { dbConnect } from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405 });
  }
  try {
    const { email, password } = await req.json();
    await dbConnect();

    const admin = await User.findOne({ email, role: 'admin' });
    if (!admin) {
      return new Response(JSON.stringify({ message: 'Admin not found or unauthorized' }), {
        status: 401,
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
      });
    }

    // Ensure the JWT_SECRET is defined before using it
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }

    const token = jwt.sign({ userId: admin._id, role: admin.role }, jwtSecret, {
      expiresIn: '1d',
    });

    return new Response(JSON.stringify({ message: 'Login successful', token }), {
      status: 200,
    });
  } catch (error) {
    console.error('Admin login error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}