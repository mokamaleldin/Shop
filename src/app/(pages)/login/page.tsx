'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from "../../components/Inputs/Input"

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            const { token } = await res.json();
            localStorage.setItem('token', token);
            router.push('/');
        } else {
            console.error('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="email" type="email" onChange={handleChange} required />
            <Input placeholder="password" type="password" onChange={handleChange} required />
            <button
                className="md:mt-0 mt-4 border md:w-1/2 py-1 md:py-3 md:px-10 px-2 md:text-base text-sm rounded-md md:font-semibold duration-200 border-black text-white bg-black hover:text-black hover:bg-white"
                type="submit"
            >
                Login
            </button>
        </form>
    );
}
