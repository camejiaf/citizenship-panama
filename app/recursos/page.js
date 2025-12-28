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
import MinimalNavbar from '../components/MinimalNavbar';
import AnimatedBackground from '../components/AnimatedBackground';

export default function RecursosPage() {
    return (
        <>
            <AnimatedBackground />
            <MinimalNavbar showBackButton={true} />
            <main className="min-h-screen relative z-10">
                <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
                    <div className="space-y-10">
                        <div>
                            <h1 className="text-[18px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">
                                Recursos para Futuros Ciudadanos
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Section
                                title="Trámites y Naturalización"
                                icon={<Building className="w-4 h-4" />}
                                color="bg-[#3B82F6]"
                                links={[
                                    ["Servicio Nacional de Migración", "https://www.migracion.gob.pa/"],
                                    ["Tribunal Electoral", "https://www.tribunal-electoral.gob.pa/"],
                                    ["Presidencia de la República", "https://www.presidencia.gob.pa/"],
                                ]}
                            />
                            <Section
                                title="Cultura, Historia y Turismo"
                                icon={<Globe className="w-4 h-4" />}
                                color="bg-[#10B981]"
                                links={[
                                    ["VisitPanama.com", "https://www.visitpanama.com/"],
                                    ["Biblioteca Nacional", "https://www.binal.ac.pa/"],
                                    ["Ministerio de Cultura", "https://micultura.gob.pa/"],
                                ]}
                            />
                            <Section
                                title="Universidades en Panamá"
                                icon={<GraduationCap className="w-4 h-4" />}
                                color="bg-[#F97316]"
                                links={[
                                    ["Universidad de Panamá", "https://www.up.ac.pa/"],
                                    ["Universidad Santa María La Antigua", "https://www.usma.ac.pa/"],
                                    ["Universidad Latina", "https://www.ulatina.edu.pa/"],
                                ]}
                            />
                            <Section
                                title="Centros Comerciales"
                                icon={<ShoppingBag className="w-4 h-4" />}
                                color="bg-[#EF4444]"
                                links={[
                                    ["Multiplaza Pacific", "https://multiplaza.com/"],
                                    ["Albrook Mall", "https://www.albrookmall.com/"],
                                    ["Metromall", "https://www.metromallpanama.com/"],
                                ]}
                            />
                            <Section
                                title="Salud y Bienestar"
                                icon={<Stethoscope className="w-4 h-4" />}
                                color="bg-[#EF4444]"
                                links={[
                                    ["Caja de Seguro Social", "https://www.css.gob.pa/"],
                                    ["Ministerio de Salud", "https://www.minsa.gob.pa/"],
                                    ["Hospital Nacional", "https://www.hospitalnacional.com/"],
                                ]}
                            />
                            <Section
                                title="Medios de Comunicación"
                                icon={<Newspaper className="w-4 h-4" />}
                                color="bg-[#F97316]"
                                links={[
                                    ["TVN Noticias", "https://www.tvn-2.com/"],
                                    ["Telemetro", "https://www.telemetro.com/"],
                                    ["La Prensa", "https://www.prensa.com/"],
                                ]}
                            />
                        </div>

                        <div className="pt-6 border-t border-[#e5e5e5]">
                            <blockquote className="text-[14px] text-black leading-[1.5] italic mb-3">
                                &quot;Cuando parece que todas las esperanzas se nos agotan y el camino se torna más oscuro y amenazador,
                                es el momento de hacer brillar la luz interior que todos poseemos.&quot;
                            </blockquote>
                            <p className="text-[12px] text-[#555555]">
                                — Rose Marie Tapia, <span className="italic">Niña Bella</span>
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

function Section({ title, icon, links, color }) {
    return (
        <section>
            <div className="flex items-center mb-4">
                <div className={`${color} w-8 h-8 flex items-center justify-center mr-3`}>
                    <div className="text-white">{icon}</div>
                </div>
                <h2 className="text-[16px] font-semibold text-black tracking-[-0.02em] leading-[1.25]">{title}</h2>
            </div>
            <ul className="space-y-2 ml-11">
                {links.map(([label, url]) => (
                    <li key={url}>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[14px] text-[#555555] hover:text-black hover:underline transition-colors duration-200 block"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
