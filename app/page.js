'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#f9fafb]">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 text-center flex-grow">
        <div className="mb-6 flex justify-center">
          <img src="/panama.png" alt="Panamá Logo" className="h-12 sm:h-16" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Examen de Naturalización Panameña
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Prepárate con preguntas reales, explicaciones claras, y una experiencia 100% gratuita.
        </p>

        {/* Main Quiz Button */}
        <button
          onClick={() => router.push('/quiz')}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition mb-4"
        >
          Empezar a Practicar
        </button>

        {/* Flashcard Mode Button */}
        <button
          onClick={() => router.push('/flashcards')}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition mb-4"
        >
          Estudiar con Flashcards
        </button>


      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-4">
        Hecho por un ciudadano naturalizado.<br />
        Pronto lo serás tú también. ¡Muchísima suerte! ❤️
      </footer>
    </main>
  );
}
