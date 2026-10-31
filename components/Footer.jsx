import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030b27] px-6 py-10 text-white mt-4">

      <div className="mx-auto max-w-[1600px]">

        <div className="flex flex-start items-center justify-start gap-8 md:flex-column">

          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-wide"
            >
              KEN<span className="text-blue-500">DRICK</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Aspiring frontend developer passionate about
              creating beautiful and responsive websites.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <a href="#home" className="transition hover:text-blue-400 hover:underline">
              Home
            </a>

            <a href="#about" className="transition hover:text-blue-400 hover:underline">
              About
            </a>

            <a href="#projects" className="transition hover:text-blue-400 hover:underline">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-blue-400 hover:underline">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/"
              className="text-slate-400 transition hover:text-blue-400 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              className="text-slate-400 transition hover:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            ©2026 Kendrick. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer