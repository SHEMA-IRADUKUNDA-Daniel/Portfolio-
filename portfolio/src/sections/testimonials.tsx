const testimonials = [
  {
    name: "Anselme M",
    role: "CEO & Founder, Vanoma",
    feedback:
      "Daniel consistently delivers clean, scalable interfaces with a strong eye for both usability and design precision. His frontend work always feels intentional and polished.",
  },
  {
    name: "Florence I",
    role: "UI/UX Collaborator",
    feedback:
      "Working with Daniel on product interfaces was seamless. His ability to translate wireframes into refined, responsive interfaces is exceptional.",
  },
  {
    name: "ALX Mentor",
    role: "Frontend Program Mentor",
    feedback:
      "Daniel showed strong growth in component architecture, accessibility, and frontend engineering best practices throughout the program.",
  },
  {
    name: "Vanoma Team",
    role: "Cross-functional Team",
    feedback:
      "A reliable creative problem solver with a strong balance between technical execution and visual communication.",
  },
  {
    name: "Project Client",
    role: "Freelance Collaboration",
    feedback:
      "The final product exceeded expectations. Clean code, elegant UI, and excellent communication throughout the project.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="px-6 md:px-16 pt-5 py-10 bg-black text-white"
    >
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
        Testimonials
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-16">Testimonials</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded-4xl border border-white/10 bg-zinc-950 p-6"
          >
            <div className="mb-5 text-yellow-400">★★★★★</div>

            <p className="text-zinc-300 leading-8 mb-8">{item.feedback}</p>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">
                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
