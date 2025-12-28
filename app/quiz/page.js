'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import allQuestions from './questions.json';
import AnimatedBackground from '../components/AnimatedBackground';

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export default function QuizPage() {
    const [hasStarted, setHasStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const timerRef = useRef(null);

    const currentQuestion = questions[currentIndex];

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    useEffect(() => {
        if (!showResult && hasStarted) {
            timerRef.current = setInterval(() => {
                setElapsedTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [showResult, hasStarted]);

    const startQuiz = (count) => {
        const shuffled = shuffleArray(allQuestions).slice(0, count);
        const randomized = shuffled.map((q) => ({
            ...q,
            options: shuffleArray(q.options),
        }));
        randomized.forEach(q => delete q.userAnswer);

        setQuestions(randomized);
        setCurrentIndex(0);
        setScore(0);
        setSelected(null);
        setIsCorrect(null);
        setShowResult(false);
        setElapsedTime(0);
        setHasStarted(true);
    };

    const handleSelect = (option) => {
        if (selected) return;
        setSelected(option);
        questions[currentIndex].userAnswer = option;

        const correct = option === currentQuestion.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setScore((prev) => prev + 1);
        }
    };

    const nextQuestion = () => {
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex((prev) => prev + 1);
            setSelected(null);
            setIsCorrect(null);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setHasStarted(false);
        setQuestions([]);
        setCurrentIndex(0);
        setSelected(null);
        setIsCorrect(null);
        setScore(0);
        setShowResult(false);
        setElapsedTime(0);
    };

    return (
        <>
            <AnimatedBackground />
            <Link
                href="/"
                className="fixed bottom-6 left-6 z-40 bg-white border border-[#e5e5e5] px-4 py-2.5 text-[14px] text-[#555555] hover:text-black transition-colors duration-200"
            >
                ← Volver al inicio
            </Link>
            <main className="min-h-screen pb-24 relative z-10">
            <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
                {!hasStarted ? (
                    <div className="max-w-md mx-auto">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-[18px] font-semibold text-black mb-3 tracking-[-0.02em] leading-[1.25]">¿Cuántas preguntas quieres?</h1>
                                <p className="text-[14px] text-[#555555] leading-[1.5]">Elige cuántas preguntas quieres practicar</p>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => startQuiz(20)}
                                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                                >
                                    20 Preguntas
                                </button>
                                <button
                                    onClick={() => startQuiz(50)}
                                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                                >
                                    50 Preguntas
                                </button>
                                <button
                                    onClick={() => startQuiz(allQuestions.length)}
                                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                                >
                                    Todas ({allQuestions.length})
                                </button>
                            </div>
                        </div>
                    </div>
                ) : questions.length === 0 ? (
                    <div className="text-center">
                        <p className="text-[14px] text-[#555555]">No hay preguntas disponibles aún.</p>
                    </div>
                ) : (
                    <div className="w-full">
                        {showResult ? (
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-[18px] font-semibold text-black mb-3 tracking-[-0.02em] leading-[1.25]">¡Listo!</h1>
                                    <p className="text-[14px] text-black leading-[1.5] mb-1">Tuviste {score} de {questions.length} correctas</p>
                                    <p className="text-[12px] text-[#555555]">Tiempo: {formatTime(elapsedTime)}</p>
                                </div>

                                <div className="border-t border-[#e5e5e5] pt-6">
                                    <h3 className="text-[16px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">Aquí están tus respuestas</h3>
                                    <div className="space-y-4 max-h-96 overflow-y-auto">
                                        {questions.map((q, index) => (
                                            <div key={index} className="border-b border-[#e5e5e5] pb-4 last:border-0">
                                                <p className="text-[14px] font-medium text-black mb-2 leading-[1.5]">{index + 1}. {q.question}</p>
                                                <p className={`text-[14px] ${q.userAnswer === q.correctAnswer ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                                                    Tu respuesta: {q.userAnswer || 'No contestada'}
                                                </p>
                                                {q.userAnswer !== q.correctAnswer && (
                                                    <p className="text-[14px] text-[#555555] mt-1">Correcta: {q.correctAnswer}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={resetQuiz}
                                        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                                    >
                                        Reintentar
                                    </button>
                                </div>
                            </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4">
                                        <div>
                                            <p className="text-[14px] text-[#555555]">Pregunta {currentIndex + 1} de {questions.length}</p>
                                            <p className="text-[12px] text-[#555555]">{formatTime(elapsedTime)}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h2 className="text-[16px] font-semibold text-black leading-[1.5] tracking-[-0.02em]">{currentQuestion.question}</h2>

                                        {selected && (
                                            <div className={`inline-block px-3 py-1.5 text-[14px] font-medium ${isCorrect
                                                ? 'bg-[#10B981] text-white'
                                                : 'bg-[#EF4444] text-white'
                                                }`}>
                                                {isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                                            </div>
                                        )}

                                        <div className="space-y-3">
                                            {currentQuestion.options.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleSelect(option)}
                                                    disabled={selected}
                                                    className={`w-full text-left p-4 border-2 transition-colors duration-200 text-[14px] leading-[1.5] ${selected
                                                        ? option === currentQuestion.correctAnswer
                                                            ? 'bg-[#10B981] border-[#10B981] text-white'
                                                            : option === selected
                                                                ? 'bg-[#EF4444] border-[#EF4444] text-white'
                                                                : 'bg-white border-[#e5e5e5] text-[#555555]'
                                                        : 'bg-white border-[#e5e5e5] hover:border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white text-black'
                                                        }`}
                                                >
                                                    <span className="inline-flex items-center justify-center w-6 h-6 bg-black text-white text-[12px] font-medium mr-3">{String.fromCharCode(65 + idx)}</span>
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {selected && (
                                        <div className="pt-6 border-t border-[#e5e5e5] pb-20 sm:pb-6">
                                            <button
                                                onClick={nextQuestion}
                                                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
                                            >
                                                {currentIndex + 1 === questions.length ? 'Ver resultados' : 'Siguiente'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                    </div>
                )}
            </div>
        </main>
        </>
    );
}
