'use client';
import Link from 'next/link';
import PortfolioNavbar from '../components/PortfolioNavbar';

export default function Portfolio() {
  return (
    <>
      <PortfolioNavbar />
      <main className="portfolio-page min-h-screen bg-white pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="portfolio-fade-in">
            <section
              className="mb-8 sm:mb-10 portfolio-item"
            >
              <h1 className="text-[18px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">
                Carlos Mejia
              </h1>
              <p className="text-[14px] text-black leading-[1.5] mb-6 font-normal">
                Software developer and naturalized Panamanian citizen. I build web applications with a focus on simplicity and user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1.5 text-[12px] bg-[#3B82F6] text-white font-medium">
                  JavaScript
                </span>
                <span className="inline-block px-3 py-1.5 text-[12px] bg-[#EF4444] text-white font-medium">
                  React
                </span>
                <span className="inline-block px-3 py-1.5 text-[12px] bg-[#10B981] text-white font-medium">
                  Next.js
                </span>
                <span className="inline-block px-3 py-1.5 text-[12px] bg-[#F97316] text-white font-medium">
                  Node.js
                </span>
              </div>
            </section>

            <section
              id="projects"
              className="mb-8 sm:mb-10 portfolio-item"
            >
              <h2 className="text-[16px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">
                Projects
              </h2>

              <div className="space-y-8 sm:space-y-10">
                <div className="portfolio-item">
                  <div className="mb-4">
                    <h3 className="text-[14px] font-semibold text-black mb-2">
                      Examen de Naturalización Panameña
                    </h3>
                    <p className="text-[14px] text-[#666666] mb-3 leading-[1.5]">
                      A free study tool for the Panama citizenship exam. Built with Next.js and Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-4 text-[12px] text-[#666666] mb-4">
                      <span>2024</span>
                      <span className="text-[#3B82F6] font-medium">Live</span>
                    </div>
                  </div>
                  <div className="aspect-video bg-[#3B82F6] mb-4 flex items-center justify-center">
                    <img
                      src="/flag_of_panama.svg"
                      alt="Panama Citizenship Exam"
                      className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/"
                      className="text-[14px] text-black hover:underline font-medium"
                    >
                      View Project →
                    </Link>
                    <a
                      href="https://github.com/camejiaf/citizenship-panama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-[#666666] hover:text-black transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="portfolio-item">
                  <div className="mb-4">
                    <h3 className="text-[14px] font-semibold text-black mb-2">
                      Project Title
                    </h3>
                    <p className="text-[14px] text-[#666666] mb-3 leading-[1.5]">
                      Brief description of the project and what it does. Keep it concise and focused on the value it provides.
                    </p>
                    <div className="flex items-center gap-4 text-[12px] text-[#666666] mb-4">
                      <span>2024</span>
                      <span className="text-[#666666]">Coming Soon</span>
                    </div>
                  </div>
                  <div className="aspect-video bg-[#EF4444] mb-4"></div>
                  <div className="flex gap-3">
                    <span className="text-[14px] text-[#666666]">View Project →</span>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="about"
              className="mb-8 sm:mb-10 portfolio-item"
            >
              <h2 className="text-[16px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">
                About
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] text-black leading-[1.5]">
                  I&apos;m a software developer based in Panama. After becoming a naturalized citizen, I created a study tool to help others prepare for the citizenship exam.
                </p>
                <p className="text-[14px] text-black leading-[1.5]">
                  I believe in building simple, effective solutions that solve real problems. My work focuses on web applications that are fast, accessible, and easy to use.
                </p>
              </div>
            </section>

            <section
              className="mb-8 sm:mb-10 portfolio-item"
            >
              <h2 className="text-[16px] font-semibold text-black mb-6 tracking-[-0.02em] leading-[1.25]">
                Contact
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="block text-[14px] text-black hover:underline"
                >
                  your.email@example.com
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/camejiaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#666666] hover:text-black transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/camejiaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#666666] hover:text-[#3B82F6] transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
