import Button from "../components/Button";
import HeroImageComponent from "../components/HeroImage";
import NavBar from "../components/layouts/Navbar";
import myCV from "../assets/myCV..pdf";
import HeroTyping from "../components/HeroTyping";
const Hero = () => {
  return (
    <section
      id="Home"
      className="px-6 md:px-16 pt-10 pb-30 bg-black text-white"
    >
      <NavBar />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* left */}
        <div>
          <div className="flex items-center content-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <p className="text-zinc-500">Open to opportunities</p>
          </div>
          <HeroTyping />

          <h1 className="text-6xl md:text-7xl font-serif leading-[0.95] mb-8">
            Crafting <span className="text-primary italic">digital</span>
            <br />
            <span className="text-zinc-500 italic">experiences.</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">
            I build products that live at the intersection of clean code and
            intentional design — fast, accessible, and memorable.
          </p>

          <div className="flex gap-4 mb-14">
            <Button
              href="#Projects"
              text="See my work"
              className="px-6 py-3 rounded-full bg-primary text-black font-medium cursor-pointer hover:bg-primary/20 hover:text-primary transition"
            />

            <Button
              variant="outline"
              href={myCV}
              target="_blank"
              text="My Resume"
              className="px-6 py-3 rounded-full border border-white/10 text-zinc-300 cursor-pointer hover:bg-white/10 hover:text-white transition"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <p className="text-3xl font-light">4+</p>
              <p className="text-xs text-zinc-500 uppercase mt-2">
                Projects shipped
              </p>
            </div>

            <div>
              <p className="text-3xl font-light text-primary">
                3yr<span className="text-white">+</span>
              </p>
              <p className="text-xs text-zinc-500 uppercase mt-2">Experience</p>
            </div>

            <div>
              <p className="text-3xl font-light">100%</p>
              <p className="text-xs text-zinc-500 uppercase mt-2">
                Remote ready
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="relative max-w-md mx-auto lg:mx-0">
          <div className="absolute -inset-3 rounded-4xl border border-primary/10 blur-xl" />

          <HeroImageComponent />

          <div className="absolute -bottom-25 md:left-6 md:right-6 left-3 right-3 bg-zinc-950/80 backdrop-blur rounded-3xl border border-white/10 md:p-5 p-3">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-zinc-500 uppercase">Based in</p>
                <p className="text-sm text-zinc-300">Kigali, RW</p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xs text-zinc-500 uppercase text-right">
                  Status
                </p>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <p className="text-sm text-primary">Available</p>
                </div>
              </div>
            </div>
            <p className=" text-zinc-500 text-sm uppercase mb-3">Core stack</p>
            <div className="flex flex-wrap gap-2 ">
              {[
                "React",
                "Next.js",
                "React Native",
                "TypeScript",
                "Figma",
                "Tailwind",
                "Postman",
                "Illustrator",
                "Photoshop",
                "Git",
              ].map((item, index) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full
  bg-primary/10
  border border-primary/20
  text-primary text-xs font-medium
  hover:scale-105
  hover:-translate-y-1
  hover:bg-primary/20
  transition-all duration-300
  cursor-default"
                  style={{
                    animation: `
      fadeUp 0.6s ease forwards,
      driftX 3s ease-in-out infinite
    `,
                    animationDelay: `
      ${index * 0.15}s,
      ${index * 0.4}s
    `,
                    opacity: 0,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
