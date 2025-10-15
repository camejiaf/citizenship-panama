'use client';
import { useRouter } from 'next/navigation';
import MolaPattern from './components/MolaPattern';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-full h-svh bg-gradient-to-br from-blue-50 via-white to-red-50">
      <MolaPattern className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-5" style={{ minWidth: '100vw', minHeight: '100vh' }} />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200/20 rounded-tr-full"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-200/20 rounded-bl-full"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"></div>
        <svg className="absolute bottom-[70%] left-[10%] w-8 h-8" viewBox="0 0 24 24" fill="rgba(59,130,246,0.6)">
          <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
        </svg>
        <svg className="absolute top-[75%] right-[10%] w-7 h-7" viewBox="0 0 24 24" fill="rgba(239,68,68,0.6)">
          <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
        </svg>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30">
            <div className="text-center">
              <img src="/flag_of_panama.svg" alt="Panama Flag" className="w-40 sm:w-56 mx-auto shadow-lg mb-4 sm:mb-6" style={{ display: 'block', lineHeight: 0 }} />

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Examen de Naturalización Panameña</h1>
                <p className="text-gray-600 text-xs sm:text-sm">Preguntas reales del examen, explicaciones fáciles de entender, y todo completamente gratis.</p>
                <div className="sm:hidden mt-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-700 text-xs flex items-center justify-center">
                    <span className="mr-1">💡</span>
                    Te recomiendo usar una computadora o tablet para que se vea mejor
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => router.push('/quiz')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  🎯 Empezar a Practicar
                </button>
                <button
                  onClick={() => router.push('/flashcards')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  📚 Estudiar con Flashcards
                </button>
                <button
                  onClick={() => router.push('/recursos')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  🌟 Recursos Oficiales y Culturales
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-xs mt-2">
                  Hecho por un ciudadano naturalizado.<br />
                  Pronto lo serás tú también. ¡Muchísima suerte! ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/camejiaf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 hover:scale-105 transition-transform"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300/50 shadow-lg bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <span className="text-gray-600 text-sm sm:text-base">👤</span>
        </div>
      </a>
    </main>
  );
}
