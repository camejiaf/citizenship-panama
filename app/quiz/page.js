'use client';
import { useEffect, useState, useRef } from 'react';
import allQuestions from './questions.json';

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} minuto${mins !== 1 ? 's' : ''} ${secs} segundo${secs !== 1 ? 's' : ''}`;
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
            setTimeout(() => nextQuestion(), 1500);
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
    const Background = () => (
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/backgroundquiz.png')" }}
        />

    );

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <Background />



            {!hasStarted ? (
                <div className="z-20 relative text-center space-y-6 p-6">
                    <h1 className="text-2xl font-bold text-gray-800">¿Cuántas preguntas quieres responder?</h1>
                    <div className="flex flex-col gap-4">
                        <button onClick={() => startQuiz(20)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">20 Preguntas</button>
                        <button onClick={() => startQuiz(50)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">50 Preguntas</button>
                        <button onClick={() => startQuiz(allQuestions.length)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">Todas ({allQuestions.length})</button>
                    </div>
                </div>
            ) : questions.length === 0 ? (
                <div className="z-20 relative text-center p-4 text-gray-600">
                    No hay preguntas disponibles aún.
                </div>
            ) : (
                <div className="z-20 relative w-full max-w-2xl bg-white/80 rounded-xl p-6 mx-4 shadow-xl">
                    {showResult ? (
                        <>
                            <h1 className="text-2xl font-bold text-center mb-4">¡Examen finalizado!</h1>
                            <p className="text-center mb-2 text-gray-800">Obtuviste {score} de {questions.length} correctas.</p>
                            <p className="text-center text-sm text-gray-600 mb-6">⏱ Tiempo total: {formatTime(elapsedTime)}</p>

                            <div className="bg-white/90 rounded-lg p-2 max-h-[400px] overflow-y-auto mb-4 shadow-inner">
                                {questions.map((q, index) => (
                                    <div key={index} className="border rounded-lg p-4 mb-4">
                                        <p className="font-medium">{index + 1}. {q.question}</p>
                                        <p className={`mt-1 text-sm ${q.userAnswer === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                                            Tu respuesta: {q.userAnswer || 'No contestada'}
                                        </p>
                                        {q.userAnswer !== q.correctAnswer && (
                                            <p className="text-sm text-gray-500">Correcta: {q.correctAnswer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-4 mt-4">
                                <button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">Reintentar</button>
                                <button onClick={() => window.location.href = '/'} className="text-sm text-blue-600 hover:underline">← Volver al inicio</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4 flex justify-between text-sm text-gray-600">
                                <span>Pregunta {currentIndex + 1} de {questions.length}</span>
                                <span>⏱ {formatTime(elapsedTime)}</span>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
                            </div>

                            <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">{currentQuestion.question}</h1>

                            {selected && (
                                <p className={`mb-4 font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                                </p>
                            )}

                            <div className="space-y-3 mb-8">
                                {currentQuestion.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(option)}
                                        className={`w-full text-left rounded-xl px-4 py-3 text-sm font-medium transition duration-200 border
                                            ${selected
                                                ? option === currentQuestion.correctAnswer
                                                    ? 'bg-green-100 border-green-400 text-green-800'
                                                    : option === selected
                                                        ? 'bg-red-100 border-red-400 text-red-800'
                                                        : 'bg-white border-gray-300 text-gray-400'
                                                : 'bg-white hover:shadow-md hover:border-blue-500 hover:text-blue-700'
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {!isCorrect && selected && (
                                <button
                                    onClick={nextQuestion}
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
                                >
                                    Siguiente
                                </button>
                            )}

                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="text-xs text-gray-600 hover:text-blue-600 underline"
                                >
                                    ← Inicio
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </main>
    );
}
