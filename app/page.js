'use client';
import { useRouter } from 'next/navigation';
import MinimalNavbar from './components/MinimalNavbar';
import AnimatedBackground from './components/AnimatedBackground';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AnimatedBackground />
      <MinimalNavbar showBackButton={false} />
      <main className="min-h-screen relative z-10 bg-gray-50/95">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <div className="space-y-8 sm:space-y-10">
          <div>
            <img src="/flag_of_panama.svg" alt="Panama Flag" className="w-32 h-32 sm:w-40 sm:h-40 mb-6" style={{ display: 'block' }} />
            <h1 className="text-[18px] font-semibold text-black mb-4 tracking-[-0.02em] leading-[1.25]">Examen de Naturalización Panameña</h1>
            <p className="text-[14px] text-black leading-[1.5] mb-6">Preguntas reales del examen, explicaciones fáciles de entender, y todo completamente gratis.</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => router.push('/quiz')}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
            >
              Empezar a Practicar
            </button>
            <button
              onClick={() => router.push('/flashcards')}
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
            >
              Estudiar con Flashcards
            </button>
            <button
              onClick={() => router.push('/recursos')}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 px-4 text-[14px] font-medium transition-colors duration-200"
            >
              Recursos Oficiales y Culturales
            </button>
          </div>

          <div className="pt-6 border-t border-[#e5e5e5]">
            <p className="text-[12px] text-[#555555]">
              Hecho por un ciudadano naturalizado.<br />
              Pronto lo serás tú también. ¡Muchísima suerte! ❤️
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/camejiaf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 transition-opacity duration-200 hover:opacity-70"
      >
        <div className="w-10 h-10 bg-white border border-[#e5e5e5] flex items-center justify-center">
          <span className="text-[14px]">👤</span>
        </div>
      </a>
    </main>
    </>
  );
}
