'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col justify-between text-center overflow-hidden">
      {/* Background image */}
      <img
        src="/panama-puente.png"
        alt="Fondo del Canal de Panamá"
        className="absolute inset-0 w-full h-full object-cover brightness-90 z-0"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-0" />

      {/* Optional passport-style overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE9]/80 to-[#E0DDD0]/90 mix-blend-overlay z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 py-16">
        <div className="mb-6">
          <img src="/panama.png" alt="Panamá Logo" className="h-12 sm:h-16" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] mb-4 leading-tight">
          Examen de Naturalización Panameña
        </h1>

        <p className="text-lg text-white max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-8">
          Prepárate con preguntas reales, explicaciones claras, y una experiencia 100% gratuita.
        </p>

        <button
          onClick={() => router.push('/quiz')}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition mb-4"
        >
          Empezar a Practicar
        </button>

        <button
          onClick={() => router.push('/flashcards')}
          className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition"
        >
          Estudiar con Flashcards
        </button>
        <button
          onClick={() => router.push('/recursos')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition mt-4"
        >
          Recursos Oficiales y Culturales
        </button>

      </div>

      <a
        href="https://www.linkedin.com/in/camejiaf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 hover:scale-105 transition-transform"
      >
        <img
          src="/linkedin.png"
          alt="Carlos Mejia LinkedIn"
          className="w-12 h-12 rounded-full border-2 border-white shadow-md"
        />
      </a>

      {/* Footer */}
      <footer className="relative z-10 text-gray-200 text-sm py-4">
        Hecho por un ciudadano naturalizado.<br />
        Pronto lo serás tú también. ¡Muchísima suerte! ❤️
      </footer>
    </main>
  );
}
