'use client';

import Link from "next/link";
import Image from "next/image";
import {
    Globe,
    Building,
    GraduationCap,
    ShoppingBag,
    Stethoscope,
    Newspaper,
} from "lucide-react";

export default function RecursosPage() {
    return (
        <main className="relative min-h-screen text-gray-800 px-6 py-12 overflow-hidden">
            {/* Mola-Inspired Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/mola.png"
                    alt="Fondo inspirado en mola"
                    fill
                    className="object-cover object-center sm:object-top"
                    priority
                />
            </div>

            {/* Page Title */}
            <div className="flex justify-center mb-16 mt-4 relative z-10">
                <div className="bg-white/90 border-2 rounded-full px-5 py-5 shadow-lg text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Recursos para Futuros Ciudadanos
                    </h1>
                </div>
            </div>

            {/* Resource Sections */}
            <div className="grid gap-8 md:grid-cols-2 relative z-10">
                <Section
                    title="Trámites y Naturalización"
                    icon={<Building className="text-blue-600 w-6 h-6 mr-2" />}
                    color="text-blue-700"
                    links={[
                        ["Servicio Nacional de Migración", "https://www.migracion.gob.pa/"],
                        ["Tribunal Electoral", "https://www.tribunal-electoral.gob.pa/"],
                        ["Presidencia de la República", "https://www.presidencia.gob.pa/"],
                    ]}
                />
                <Section
                    title="Cultura, Historia y Turismo"
                    icon={<Globe className="text-green-600 w-6 h-6 mr-2" />}
                    color="text-green-700"
                    links={[
                        ["VisitPanama.com", "https://www.visitpanama.com/"],
                        ["Biblioteca Nacional", "https://www.binal.ac.pa/"],
                        ["Ministerio de Cultura", "https://micultura.gob.pa/"],
                    ]}
                />
                <Section
                    title="Universidades en Panamá"
                    icon={<GraduationCap className="text-purple-600 w-6 h-6 mr-2" />}
                    color="text-purple-700"
                    links={[
                        ["Universidad de Panamá", "https://www.up.ac.pa/"],
                        ["Universidad Santa María La Antigua", "https://www.usma.ac.pa/"],
                        ["Universidad Latina", "https://www.ulatina.edu.pa/"],
                    ]}
                />
                <Section
                    title="Centros Comerciales"
                    icon={<ShoppingBag className="text-pink-600 w-6 h-6 mr-2" />}
                    color="text-pink-700"
                    links={[
                        ["Multiplaza Pacific", "https://multiplaza.com/"],
                        ["Albrook Mall", "https://www.albrookmall.com/"],
                        ["Metromall", "https://www.metromallpanama.com/"],
                    ]}
                />
                <Section
                    title="Salud y Bienestar"
                    icon={<Stethoscope className="text-red-600 w-6 h-6 mr-2" />}
                    color="text-red-700"
                    links={[
                        ["Caja de Seguro Social", "https://www.css.gob.pa/"],
                        ["Ministerio de Salud", "https://www.minsa.gob.pa/"],
                        ["Hospital Nacional", "https://www.hospitalnacional.com/"],
                    ]}
                />
                <Section
                    title="Medios de Comunicación"
                    icon={<Newspaper className="text-yellow-600 w-6 h-6 mr-2" />}
                    color="text-yellow-700"
                    links={[
                        ["TVN Noticias", "https://www.tvn-2.com/"],
                        ["Telemetro", "https://www.telemetro.com/"],
                        ["La Prensa", "https://www.prensa.com/"],
                    ]}
                />
            </div>

            {/* Inspirational Quote */}
            <div className="mt-16 text-center px-4 relative z-10">
                <blockquote className="text-lg sm:text-xl italic text-white drop-shadow-md">
                    “Cuando parece que todas las esperanzas se nos agotan y el camino se torna más oscuro y amenazador,
                    es el momento de hacer brillar la luz interior que todos poseemos.”
                </blockquote>
                <p className="mt-2 text-sm text-white">
                    — Rose Marie Tapia, <span className="italic">Niña Bella</span>
                </p>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12 text-center relative z-10">
                <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-8 rounded-full shadow-lg transition"
                >
                    ← Volver al Inicio
                </Link>
            </div>
        </main>
    );
}

function Section({ title, icon, links, color }) {
    return (
        <section className="flex flex-col justify-between bg-white/95 p-4 md:p-5 rounded-xl shadow-md border border-gray-100 backdrop-blur-sm h-full">
            <div className="flex items-center mb-4">
                {icon}
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <ul className={`space-y-2 ${color} text-sm`}>
                {links.map(([label, url]) => (
                    <li key={url}>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
