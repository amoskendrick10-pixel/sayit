import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#030b27] text-white">
      <div>
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:px-[6.5%]">

        <div className="z-10 w-full max-w-2xl">

          <p className="mb-7 flex items-center gap-8 text-sm font-bold text-blue-200 md:text-base">
            HI! I&apos;M KENDRICK
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            A Future{" "}
            <span className="text-blue-500">Frontend</span>
            <br />
            Developer
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
            I build clean, not so responsive, and user-friendly
            websites with HTML, CSS, JavaScript and by the grace of GOD.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="flex items-center gap-4 rounded-full bg-blue-600 px-8 py-5 text-lg font-bold transition hover: hover:bg-blue-500"
            >
              About Me
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-green-500 px-8 py-5 text-lg transition hover: hover:bg-green-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-5 text-sm font-bold">
            <span className="text-orange-500">HTML</span>
            <span className="text-slate-400">•</span>
            <span className="text-blue-500">CSS</span>
            <span className="text-slate-400">•</span>
            <span className="text-yellow-400">JAVASCRIPT</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero