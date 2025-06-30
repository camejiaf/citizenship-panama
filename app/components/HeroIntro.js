"use client";
import Image from "next/image";

export default function HeroIntro() {
    return (
        <section className="relative isolate min-h-screen flex flex-col items-center justify-center px-6 text-center">
            {/* Background image */}
            <Image
                src="/images/panama-canal.jpg"
                alt="Fondo del Canal de Panamá"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Passport-like tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE9]/80 to-[#E0DDD0]/90 mix-blend-overlay"></div>

            {/* Optional texture layer */}
            {/* <div className="absolute inset-0 bg-[url('/grain.png')] opacity-5 mix-blend-overlay"></div> */}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <Image src="/flag-panama.svg" alt="Panama Flag" width={64} height={64} />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-sm">
                    Examen de Naturalización Panameña
                </h1>
                <p className="max-w-xl text-muted-foreground">
                    Prepárate con preguntas reales, explicaciones claras, y una experiencia 100% gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                        href="/quiz"
                        className="rounded-full px-6 py-3 font-medium text-white bg-[#165EF0] hover:bg-[#1647c7] transition"
                    >
                        Empezar a Practicar
                    </a>
                    <a
                        href="/flashcards"
                        className="rounded-full px-6 py-3 font-medium text-white bg-[#059669] hover:bg-[#047857] transition"
                    >
                        Estudiar con Flashcards
                    </a>
                </div>
            </div>
        </section>
    );
}
