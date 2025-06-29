'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
    }, []);

    const toggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggle}
            className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 px-3 py-1.5 rounded-full shadow hover:scale-105 transition"
        >
            {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
        </button>
    );
}
