'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import flashcards from '../flashcards/flashcards.json';
import MolaPattern from '../components/MolaPattern';

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
            <main className="w-full h-svh flex items-center justify-center text-center p-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
                <p className="text-gray-300">No hay tarjetas de estudio disponibles.</p>
            </main>
        );
    }

    return (
        <main className="relative w-full h-svh flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
            <MolaPattern className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-5" style={{ minWidth: '100vw', minHeight: '100vh' }} />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200/20 rounded-tr-full"></div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-200/20 rounded-bl-full"></div>
                <svg className="absolute bottom-[54%] left-[10%] w-8 h-8" viewBox="0 0 24 24" fill="rgba(59,130,246,0.85)">
                    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                </svg>
                <svg className="absolute top-[60%] right-[10%] w-7 h-7" viewBox="0 0 24 24" fill="rgba(239,68,68,0.85)">
                    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                </svg>
                <div className="absolute top-1/3 left-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"></div>
            </div>

            <div className="z-10 w-full max-w-xl text-center px-2 sm:px-4 py-4 sm:py-10 pb-16 sm:pb-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 mb-4 sm:mb-6 w-full max-w-full">
                    <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Modo Flashcards</h1>
                    <div
                        className="bg-white/90 border border-gray-200 rounded-xl p-3 sm:p-6 shadow-lg cursor-pointer transition hover:shadow-xl backdrop-blur-sm"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                            {showAnswer ? current.answer : current.question}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            {showAnswer ? 'Toca para ver la pregunta' : 'Toca para ver la respuesta'}
                        </p>
                    </div>
                    <div className="flex justify-between mt-4 sm:mt-8 gap-2 sm:gap-4">
                        <button
                            onClick={prev}
                            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition text-xs sm:text-base shadow-lg w-1/2"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={next}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition text-xs sm:text-base shadow-lg w-1/2"
                        >
                            Siguiente
                        </button>
                    </div>
                    <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-600">
                        Tarjeta {index + 1} de {flashcards.length}
                    </p>
                    <div className="mt-2 sm:mt-4 text-center">
                        <button
                            onClick={() => router.push('/')}
                            className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors"
                        >
                            ← Volver al inicio
                        </button>
                    </div>
                </div>
            </div>
        </main >
    );
}
