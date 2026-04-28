import type { TestimonialCardProps } from "../interface";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div
      key={testimonial.name}
      className="rounded-4xl border border-white/10 bg-zinc-950 p-6"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-yellow-400 ${i < testimonial.rating ? "text-yellow-400" : "text-zinc-700"}`}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-zinc-300 leading-8 mb-8">{testimonial.feedback}</p>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium">
          {testimonial.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-zinc-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
