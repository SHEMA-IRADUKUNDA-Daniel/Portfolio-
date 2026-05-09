import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Anselme M",
    role: "CEO & Founder, Vanoma",
    rating: 5,
    feedback:
      "Daniel is hardworking, professional, and highly reliable. He constitently showed strong dedicaiton, adaptability, and a willingness to learn. making him a valuable team member.",
  },
  {
    name: "Florence I",
    rating: 4,
    role: "UI/UX Collaborator",
    feedback:
      "Working with Daniel on product interfaces was seamless. His ability to translate wireframes into refined, responsive interfaces is exceptional.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="px-6 md:px-16 pt-5 py-10 bg-black text-white"
    >
      <div className="max-w-screen-2xl mx-auto ">
        <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
          Testimonials
        </p>

        <h2 className="text-5xl md:text-6xl font-serif mb-16">Testimonials</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
