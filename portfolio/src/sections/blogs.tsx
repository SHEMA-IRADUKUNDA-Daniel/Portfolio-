import image1 from "../assets/Equity.png";
import image2 from "../assets/Movie.png";
import image3 from "../assets/MovieDBW.png";
import image4 from "../assets/hero.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const blogs = [
  {
    title:
      "How i redesigned Equity Banking App with a premium dark mode experience",
    image: image1,
    category: "Code",
    date: "July 10, 2023",
    accent: "bg-primary/20 text-primary",
    content: `The original Equity mobile banking home screen felt visually crowded and overwhelming. Too many important elements were competing for attention on the first screen—balances, account cards, quick actions, and account details were all placed together, making the experience feel heavy and less intuitive.

My goal was to simplify the interface and improve usability while giving the app a more modern premium feel.

I redesigned the home screen using a glassmorphism-inspired UI approach to create cleaner visual hierarchy and better focus. Instead of displaying everything at once, I grouped the most important daily actions—such as balance visibility, quick transactions, and shortcuts—into a more structured and minimal layout.

One major improvement was moving the "My Accounts" section away from the home screen and placing it inside the dedicated Accounts tab. Since account management is a separate user intention, keeping it on the main dashboard created unnecessary clutter. This change made the home screen lighter, faster to scan, and more task-focused.

I also improved spacing, reduced visual noise, and introduced stronger section separation so users could navigate the interface more naturally without cognitive overload.

The redesign focused on one principle:

less clutter, better decisions.By simplifying the first screen, users can now focus on what matters most—checking balance, sending money, and completing quick actions—without distraction.
  `,
  },

  {
    title:
      "From Design to Development: Building the Canal Olympia Movie Ticket App",
    image: image2,
    category: "Code",
    date: "January 5, 2024",
    accent: "bg-violetSecondary/20 text-violetSecondary",
    content: `

The Canal Olympia movie ticket app started as both a UI/UX concept and a development challenge. The goal was to solve a simple but common frustration: long cinema queues, slow ticket purchasing, and the lack of a smooth mobile-first booking experience.

I wanted to create an app where users could browse movies, check showtimes, reserve seats, and purchase tickets quickly without needing to wait in line at the cinema.

The first step was understanding the user journey. I mapped out the full experience—from opening the app to completing ticket payment. The focus was on speed, clarity, and simplicity. Users should be able to move from discovering a movie to confirming a booking in just a few steps.

I started the design process in Figma by creating wireframes and defining the structure of the main screens: home page, movie details, seat selection, payment flow, and booking confirmation. I focused on creating strong visual hierarchy so users could instantly understand what action to take next.

The interface was designed with a modern cinematic feel—dark backgrounds, strong contrast, bold movie visuals, and clean call-to-action buttons. The goal was to make the app feel premium while still being simple to use.

After finalizing the UI, I moved into development using React Native. This allowed me to transform the design into a real mobile application while maintaining responsiveness across devices. I built reusable components for movie cards, showtime selectors, seat layouts, and booking summaries to keep the codebase clean and scalable.

Navigation was carefully structured to make the booking flow smooth and intuitive. I also paid attention to performance, ensuring the interface remained fast and responsive even with image-heavy movie content.

One of the biggest lessons from this project was balancing visual design with real usability. A beautiful interface is important, but speed and clarity matter even more when users are trying to complete transactions.

This project strengthened both my design thinking and mobile development skills because it required me to move beyond mockups and into real product building.

The final result was more than just a redesign concept—it became a practical solution focused on improving the movie-going experience.

The principle behind the project was simple:

less waiting, faster booking, better experience.
`,
  },
  {
    title: " Designing maintainable component systems with Tailwind CSSß",
    image: image3,
    category: "Code",
    date: "December 19, 2024",
    accent: "bg-amberThirdly/20 text-amberThirdly",
    content:
      "Tailwind CSS allows me to move quickly while maintaining visual consistency. In this post, I explain how I design elegant reusable UI systems with spacing scales, typography rhythm, color tokens, and component composition.",
  },
  {
    title: "Building Movie Recommendation App",
    image: image3,
    category: "Code",
    date: "April 24, 2025",
    accent: "bg-primary/20 text-primary",
    content: `The Movie Recommendation App was built from a simple frustration—spending too much time searching for what to watch instead of actually enjoying a movie.

I noticed how difficult it can be to choose a good film, especially when there are too many options and not enough personalized suggestions. Most platforms focus only on showing popular movies, but they often miss what the user actually wants based on mood, genre, or personal taste.

I designed this app to make movie discovery faster, simpler, and more enjoyable. The goal was to create a clean and engaging experience where users could easily browse movies, explore categories, and receive recommendations that feel more personal.

I started with the UI/UX design process in Figma, focusing on simplicity, strong visual hierarchy, and a cinematic feel. I wanted the interface to feel modern and immersive while keeping navigation easy and intuitive. The layout included featured movies, genre filters, search functionality, and personalized recommendation sections.

After the design phase, I moved into development using React Native to make the experience smooth across mobile devices. I focused on responsive layouts, reusable components, and performance optimization to ensure the app felt fast and polished.

The app was built to help users discover movies based on genres, trending content, and personal preferences, reducing decision fatigue and improving the entertainment experience.

This project helped me strengthen both my design thinking and mobile development skills by combining UI/UX strategy with real product implementation. It showed me how solving a simple everyday problem can lead to building something both useful and enjoyable.
The principle behind the project was:
less searching, more watching, better entertainment.
`,
  },
  {
    title: "Building maintainable component systems",
    image: image2,
    category: "Code",
    date: "March 20, 2025",
    accent: "bg-violetSecondary/20 text-violetSecondary",
    content:
      "Maintainability is the foundation of good frontend engineering. Here I cover naming conventions, prop consistency, component composition, design tokens, and strategies for reducing duplicated UI logic.",
  },
  {
    title: "Frontend performance tips for production apps",
    image: image4,
    category: "Code",
    date: "October 13, 2024",
    accent: "bg-amberThirdlyt/20 text-amberThirdly",
    content:
      "Performance directly affects UX and SEO. In this article, I share practical production techniques like code splitting, lazy loading, memoization, image optimization, and reducing unnecessary re-renders.",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogs)[0] | null>(
    null,
  );
  return (
    <section
      id="Blogs"
      className="px-6 md:px-16  pt-5 py-10 bg-black/95 text-white"
    >
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
        Thoughts and Writings
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-16">Blogs</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="rounded-4xl border border-white/10 bg-zinc-950 overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <div className="mb-5 flex justify-end">
                <span
                  className={`px-4 py-1 rounded-full text-xs font-medium ${blog.accent}`}
                >
                  {blog.category}
                </span>
              </div>

              <h3 className="text-xl leading-8 mb-6 text-zinc-100">
                {blog.title}
              </h3>

              <div className="flex items-center justify-between mt-10">
                <p className="text-sm text-zinc-500">{blog.date}</p>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="text-primary text-sm font-medium hover:underline cursor-pointer"
                >
                  Read more →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start overflow-y-auto  z-50 px-6 py-10">
          <div className="relative mx-auto w-full  max-w-3xl max-h-[90vh]   rounded-4xl border border-white/10 bg-zinc-950 p-8">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute bg-primary hover:bg-red-500 transition rounded-full p-2 cursor-pointer  -top-5 -right-6 text-white"
            >
              <X size={28} />
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-72 object-cover rounded-3xl mb-6"
            />

            <span
              className={`px-4 py-1 rounded-full text-xs font-medium ${selectedBlog.accent}`}
            >
              {selectedBlog.category}
            </span>

            <h3 className="text-3xl font-semibold mt-6 mb-4">
              {selectedBlog.title}
            </h3>

            <p className="text-sm text-zinc-500 mb-6">{selectedBlog.date}</p>

            <p className="text-zinc-400 leading-8">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
