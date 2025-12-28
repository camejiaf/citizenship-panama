'use client';
import Link from 'next/link';

export default function MinimalNavbar({ showBackButton = true }) {
    return (
        <>
            <nav className="border-b border-[#e5e5e5] bg-white relative z-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex items-center justify-between h-12">
                        <Link
                            href="/"
                            className="text-[14px] font-medium text-black hover:text-[#3B82F6] transition-colors duration-200"
                        >
                            Inicio
                        </Link>
                        <div className="flex items-center gap-4">
                            <a
                                href="/temario.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] text-[#555555] hover:text-black transition-colors duration-200"
                            >
                                Temario
                            </a>
                            <a
                                href="https://www.migracion.gob.pa/tramites-de-naturalizacion/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] text-[#555555] hover:text-black transition-colors duration-200"
                            >
                                Trámites
                            </a>
                            <a
                                href="https://www.tourismpanama.com/plan-your-vacation/travel-requirements/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] text-[#555555] hover:text-black transition-colors duration-200"
                            >
                                Requisitos
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            {showBackButton && (
                <Link
                    href="/"
                    className="fixed bottom-6 left-6 z-50 bg-white border border-[#e5e5e5] px-3 py-2 text-[12px] text-[#555555] hover:text-black transition-colors duration-200"
                >
                    ← Inicio
                </Link>
            )}
        </>
    );
}

