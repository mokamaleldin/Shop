// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../models/User';
import connectDB from '@/app/lib/manage /db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 422 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });
}
