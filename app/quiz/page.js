'use client';
import { useEffect, useState, useRef } from 'react';
import allQuestions from './questions.json';
import MolaPattern from '../components/MolaPattern';

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
        <main className="relative w-full h-svh bg-gradient-to-br from-blue-50 via-white to-red-50">
            {/* Mola SVG pattern overlay */}
            <MolaPattern className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-5" style={{ minWidth: '100vw', minHeight: '100vh' }} />

            {/* Panama-themed geometric accents */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Panama flag colors - blue section */}
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200/20 rounded-tr-full"></div>
                {/* Panama flag colors - red section */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-200/20 rounded-bl-full"></div>
                {/* Panama stars (SVG for color control) */}
                <svg className="absolute bottom-[70%] left-[10%] w-8 h-8" viewBox="0 0 24 24" fill="rgba(59,130,246,0.6)">
                    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                </svg>
                <svg className="absolute top-[75%] right-[10%] w-7 h-7" viewBox="0 0 24 24" fill="rgba(239,68,68,0.6)">
                    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                </svg>
                {/* Canal water effect */}
                <div className="absolute top-1/3 left-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                {/* Tropical elements */}
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
                {!hasStarted ? (
                    <div className="w-full max-w-md">
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                            <div className="text-center space-y-4 sm:space-y-6">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                    <span className="text-white text-lg sm:text-2xl">📝</span>
                                </div>

                                <div>
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">¿Cuántas preguntas?</h1>
                                    <p className="text-gray-600 text-xs sm:text-sm">Elige la cantidad de preguntas para tu práctica</p>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => startQuiz(20)}
                                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                                    >
                                        20 Preguntas
                                    </button>
                                    <button
                                        onClick={() => startQuiz(50)}
                                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                                    >
                                        50 Preguntas
                                    </button>
                                    <button
                                        onClick={() => startQuiz(allQuestions.length)}
                                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                                    >
                                        Todas ({allQuestions.length})
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : questions.length === 0 ? (
                    <div className="text-center">
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
                            <p className="text-gray-600 text-sm sm:text-base">No hay preguntas disponibles aún.</p>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-4xl">
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 sm:flex sm:flex-col sm:h-full">
                            {showResult ? (
                                <div className="text-center space-y-6 sm:space-y-8">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                                        <span className="text-white text-2xl sm:text-3xl">🎉</span>
                                    </div>

                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">¡Examen completado!</h1>
                                        <p className="text-lg sm:text-xl text-gray-600 mb-1">Obtuviste {score} de {questions.length} correctas</p>
                                        <p className="text-xs sm:text-sm text-gray-500">Tiempo: {formatTime(elapsedTime)}</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-h-64 sm:max-h-96 overflow-y-auto">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Resumen de respuestas</h3>
                                        <div className="space-y-3 sm:space-y-4">
                                            {questions.map((q, index) => (
                                                <div key={index} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-100">
                                                    <p className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{index + 1}. {q.question}</p>
                                                    <p className={`text-xs sm:text-sm ${q.userAnswer === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                                                        Tu respuesta: {q.userAnswer || 'No contestada'}
                                                    </p>
                                                    {q.userAnswer !== q.correctAnswer && (
                                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">Correcta: {q.correctAnswer}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                        <button
                                            onClick={resetQuiz}
                                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                                        >
                                            Reintentar
                                        </button>
                                        <button
                                            onClick={() => window.location.href = '/'}
                                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
                                        >
                                            ← Volver al inicio
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 sm:space-y-8 sm:flex-1 sm:overflow-auto">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                                        <div className="flex items-center space-x-3 sm:space-x-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm sm:text-lg font-bold">{currentIndex + 1}</span>
                                            </div>
                                            <div>
                                                <p className="text-xs sm:text-sm text-gray-500">Pregunta {currentIndex + 1} de {questions.length}</p>
                                                <p className="text-xs text-gray-400">⏱ {formatTime(elapsedTime)}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question */}
                                    <div className="space-y-4 sm:space-y-6">
                                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-relaxed">{currentQuestion.question}</h2>

                                        {selected && (
                                            <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${isCorrect
                                                ? 'bg-green-100 text-green-800 border border-green-200'
                                                : 'bg-red-100 text-red-800 border border-red-200'
                                                }`}>
                                                <span className="mr-1 sm:mr-2">{isCorrect ? '✓' : '✗'}</span>
                                                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                                            </div>
                                        )}

                                        {/* Options */}
                                        <div className="space-y-2 sm:space-y-3">
                                            {currentQuestion.options.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleSelect(option)}
                                                    disabled={selected}
                                                    className={`w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 font-medium text-sm sm:text-base ${selected
                                                        ? option === currentQuestion.correctAnswer
                                                            ? 'bg-green-50 border-green-300 text-green-800'
                                                            : option === selected
                                                                ? 'bg-red-50 border-red-300 text-red-800'
                                                                : 'bg-gray-50 border-gray-200 text-gray-500'
                                                        : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-800 hover:text-blue-800'
                                                        } ${!selected ? 'hover:shadow-md transform hover:-translate-y-0.5' : ''}`}
                                                >
                                                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200 text-gray-600 text-xs sm:text-sm font-bold mr-2 sm:mr-3">
                                                        {String.fromCharCode(65 + idx)}
                                                    </span>
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation - always at bottom on sm: and up */}
                            {selected && (
                                <div className="text-center pt-4 sm:pt-8 sm:mt-auto">
                                    <button
                                        onClick={nextQuestion}
                                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-xl sm:rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base mb-3"
                                    >
                                        {currentIndex + 1 === questions.length ? 'Ver resultados' : 'Siguiente'}
                                    </button>

                                    <button
                                        onClick={() => window.location.href = '/'}
                                        className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors"
                                    >
                                        <span role="img" aria-label="home" className="mr-1">🏠</span>Volver al inicio
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
