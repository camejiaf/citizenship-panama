'use client';
import Link from "next/link";
import {
    Globe,
    Building,
    GraduationCap,
    ShoppingBag,
    Stethoscope,
    Newspaper,
} from "lucide-react";
import MolaPattern from '../components/MolaPattern';

export default function RecursosPage() {
    return (
        <main className="relative w-full h-svh bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-y-auto">
            <MolaPattern className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-5" style={{ minWidth: '100vw', minHeight: '100vh' }} />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200/20 rounded-tr-full"></div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-200/20 rounded-bl-full"></div>
                <div className="absolute top-1/3 left-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"></div>
                <svg className="absolute bottom-[54%] left-[10%] w-8 h-8" viewBox="0 0 24 24" fill="rgba(59,130,246,0.85)">
                    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                </svg>
                <svg className="absolute top-[50%] right-[8%] w-7 h-7" viewBox="0 0 24 24" fill="rgba(239,68,68,0.85)">
                    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                </svg>
            </div>

            <div className="relative z-10 w-full min-h-full p-2 sm:p-6">
                <div className="flex justify-center mb-6 sm:mb-12 mt-2 sm:mt-4">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border border-white/20 text-center w-full max-w-full">
                        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                            Recursos para Futuros Ciudadanos
                        </h1>
                    </div>
                </div>

                <div className="grid gap-3 sm:gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full">
                    <Section
                        title="Trámites y Naturalización"
                        icon={<Building className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />}
                        color="text-blue-700"
                        links={[
                            ["Servicio Nacional de Migración", "https://www.migracion.gob.pa/"],
                            ["Tribunal Electoral", "https://www.tribunal-electoral.gob.pa/"],
                            ["Presidencia de la República", "https://www.presidencia.gob.pa/"],
                        ]}
                    />
                    <Section
                        title="Cultura, Historia y Turismo"
                        icon={<Globe className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />}
                        color="text-green-700"
                        links={[
                            ["VisitPanama.com", "https://www.visitpanama.com/"],
                            ["Biblioteca Nacional", "https://www.binal.ac.pa/"],
                            ["Ministerio de Cultura", "https://micultura.gob.pa/"],
                        ]}
                    />
                    <Section
                        title="Universidades en Panamá"
                        icon={<GraduationCap className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />}
                        color="text-purple-700"
                        links={[
                            ["Universidad de Panamá", "https://www.up.ac.pa/"],
                            ["Universidad Santa María La Antigua", "https://www.usma.ac.pa/"],
                            ["Universidad Latina", "https://www.ulatina.edu.pa/"],
                        ]}
                    />
                    <Section
                        title="Centros Comerciales"
                        icon={<ShoppingBag className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6" />}
                        color="text-pink-700"
                        links={[
                            ["Multiplaza Pacific", "https://multiplaza.com/"],
                            ["Albrook Mall", "https://www.albrookmall.com/"],
                            ["Metromall", "https://www.metromallpanama.com/"],
                        ]}
                    />
                    <Section
                        title="Salud y Bienestar"
                        icon={<Stethoscope className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />}
                        color="text-red-700"
                        links={[
                            ["Caja de Seguro Social", "https://www.css.gob.pa/"],
                            ["Ministerio de Salud", "https://www.minsa.gob.pa/"],
                            ["Hospital Nacional", "https://www.hospitalnacional.com/"],
                        ]}
                    />
                    <Section
                        title="Medios de Comunicación"
                        icon={<Newspaper className="text-yellow-600 w-5 h-5 sm:w-6 sm:h-6" />}
                        color="text-yellow-700"
                        links={[
                            ["TVN Noticias", "https://www.tvn-2.com/"],
                            ["Telemetro", "https://www.telemetro.com/"],
                            ["La Prensa", "https://www.prensa.com/"],
                        ]}
                    />
                </div>

                <div className="mt-6 sm:mt-12 text-center max-w-4xl mx-auto px-2 sm:px-0">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/20">
                        <blockquote className="text-sm sm:text-lg md:text-xl italic text-gray-800 leading-relaxed">
                            &quot;Cuando parece que todas las esperanzas se nos agotan y el camino se torna más oscuro y amenazador,
                            es el momento de hacer brillar la luz interior que todos poseemos.&quot;
                        </blockquote>
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
                            — Rose Marie Tapia, <span className="italic">Niña Bella</span>
                        </p>
                    </div>
                </div>

                <div className="mt-6 sm:mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs sm:text-base font-medium py-3 px-4 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full max-w-xs"
                    >
                        ← Volver al Inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}

function Section({ title, icon, links, color }) {
    return (
        <section className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl border border-white/20 h-full w-full max-w-full">
            <div className="flex items-center mb-3 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    {icon}
                </div>
                <h2 className="text-base sm:text-xl font-semibold text-gray-900 leading-tight">{title}</h2>
            </div>
            <ul className={`space-y-1.5 sm:space-y-3 ${color} text-xs sm:text-base`}>
                {links.map(([label, url]) => (
                    <li key={url}>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline transition-colors duration-200 block py-1 sm:py-2 text-xs sm:text-base break-words"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
