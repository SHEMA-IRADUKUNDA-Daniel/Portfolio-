import AboutImageComponent from "../components/AboutImage";

const About = () => {
  const strengths = [
    "Design Systems",
    "Pixel Perfect UI",
    "Frontend Performance",
    "Responsive Design",
    "Graphic Design",
    "Problem Solving",
  ];
  return (
    <section
      id="About"
      className=" px-6 md:px-16 pt-5 pb-10 bg-black/95 text-white grid lg:grid-cols-2 gap-14 items-center"
    >
      {/* left */}
      <div className="relative max-w-md">
        <div className="absolute -inset-3 rounded-4xl border border-primary/10 blur-xl" />
        <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
          Who I Am
        </p>
        <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
          About <span className="text-primary italic">me</span>
        </h2>
        <AboutImageComponent />
        <div className="absolute -bottom-6 -right-6 bg-zinc-950/80 border border-white/10 rounded-3xl px-6 py-4 ">
          <p className="text-3xl font-light text-primary">3+ yrs</p>
          <p className="text-sm text-zinc-400">Building digital products</p>
        </div>
      </div>
      {/* right  */}
      <div>
        {/* <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
          Who I Am
        </p>
        <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
          About <span className="text-primary italic">me</span>
        </h2> */}

        <div className="space-y-5 text-zinc-300 leading-8 text-lg max-w-xl">
          <p>
            focused on building modern digital experiences that feel effortless,
            scalable, and visually refined.
          </p>
          <p>
            My strength lies at the intersection of clean engineering and
            thoughtful design systems—where performance meets storytelling.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-5">
            Key Strengths
          </p>
          <div className="flex flex-wrap gap-3">
            {strengths.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
