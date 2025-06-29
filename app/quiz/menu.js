'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function QuizMenu() {
    const router = useRouter();
    const [totalQuestions, setTotalQuestions] = useState(null);

    useEffect(() => {
        // Optionally fetch question count from server or JSON
        fetch('/quiz/questions.json')
            .then(res => res.json())
            .then(data => setTotalQuestions(data.length))
            .catch(() => setTotalQuestions(100)); // fallback if fetch fails
    }, []);

    const handleStart = (count) => {
        localStorage.setItem('quizCount', count);
        router.push('/quiz/page'); // Update this if your quiz entry file is renamed
    };

    return (
        <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Elige la cantidad de preguntas
                </h1>

                <p className="text-gray-600">
                    ¿Cuántas preguntas deseas practicar en este examen?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {[20, 50, totalQuestions].map((count, i) => (
                        <button
                            key={i}
                            onClick={() => handleStart(count)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                        >
                            {count === totalQuestions ? 'Todas' : `${count} preguntas`}
                        </button>
                    ))}
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-xs text-gray-500 hover:text-blue-600 transition underline"
                    >
                        ← Inicio
                    </button>
                </div>
            </div>
        </main>
    );
}
