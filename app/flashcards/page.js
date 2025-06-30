'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import flashcards from '../flashcards/flashcards.json';

export default function FlashcardPage() {
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const router = useRouter();

    const current = flashcards[index];

    const next = () => {
        setShowAnswer(false);
        setIndex((prev) => (prev + 1 < flashcards.length ? prev + 1 : 0));
    };

    const prev = () => {
        setShowAnswer(false);
        setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : flashcards.length - 1));
    };

    if (flashcards.length === 0) {
        return (
            <main className="min-h-screen flex items-center justify-center text-center p-4">
                <p className="text-gray-500">No hay tarjetas de estudio disponibles.</p>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <img
                src="/backgroundquiz.png"
                alt="Fondo del Modo Flashcards"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Optional overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-transparent z-0" />

            {/* Flashcard Content */}
            <div className="z-10 w-full max-w-xl text-center px-4 py-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Modo Flashcards</h1>

                <div
                    className="bg-white/80 border border-gray-300 rounded-xl p-6 shadow-md cursor-pointer transition hover:shadow-lg backdrop-blur"
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    <p className="text-lg sm:text-xl font-medium text-gray-800">
                        {showAnswer ? current.answer : current.question}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        {showAnswer ? 'Toca para ver la pregunta' : 'Toca para ver la respuesta'}
                    </p>
                </div>

                <div className="flex justify-between mt-8 gap-4">
                    <button
                        onClick={prev}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={next}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                        Siguiente
                    </button>
                </div>

                <p className="mt-4 text-sm text-black">
                    Tarjeta {index + 1} de {flashcards.length}
                </p>

                <div className="mt-6">
                    <button
                        onClick={() => router.push('/quiz')}
                        className="text-sm text-black hover:underline"
                    >
                        Ir a modo Examen →
                    </button>
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-xs text-black  hover:text-blue-600 transition underline"
                    >
                        ← Inicio
                    </button>
                </div>
            </div>
        </main >
    );
}
