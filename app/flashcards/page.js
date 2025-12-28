'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import flashcards from '../flashcards/flashcards.json';
import MinimalNavbar from '../components/MinimalNavbar';
import AnimatedBackground from '../components/AnimatedBackground';

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
            <>
                <AnimatedBackground />
                <main className="min-h-screen flex items-center justify-center p-6 relative z-10">
                    <p className="text-[14px] text-[#555555]">No hay tarjetas de estudio disponibles.</p>
                </main>
            </>
        );
    }

    return (
        <>
            <AnimatedBackground />
            <MinimalNavbar showBackButton={true} />
            <main className="min-h-screen relative z-10">
            <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-[18px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">Modo Flashcards</h1>
                        <p className="text-[12px] text-[#555555] mb-6">Tarjeta {index + 1} de {flashcards.length}</p>
                    </div>

                    <div
                        className="border-2 border-[#e5e5e5] p-8 min-h-[200px] flex items-center justify-center cursor-pointer hover:border-[#3B82F6] transition-colors duration-200"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        <div className="text-center">
                            <p className="text-[16px] text-black leading-[1.5] mb-3">
                                {showAnswer ? current.answer : current.question}
                            </p>
                            <p className="text-[12px] text-[#555555]">
                                {showAnswer ? 'Toca para ver la pregunta' : 'Toca para ver la respuesta'}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={prev}
                            className="flex-1 bg-[#666666] hover:bg-black text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={next}
                            className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                        >
                            Siguiente
                        </button>
                    </div>

                </div>
            </div>
        </main>
        </>
    );
}
