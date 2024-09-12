// app/login/page.tsx
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

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
            <input name="email" placeholder="Email" type="email" onChange={handleChange} />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
}
