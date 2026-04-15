import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const blogs = [
  {
    title: "Building accessible React components from scratch",
    image: image1,
    category: "Code",
    date: "March 20, 2025",
    accent: "bg-primary/20 text-primary",
    content:
      "In this article, I walk through how I build reusable and accessible React components from scratch using semantic HTML, keyboard-friendly interactions, proper ARIA attributes, and scalable TypeScript props. My focus is always on building systems that are inclusive, maintainable, and production-ready.",
  },
  {
    title: "Clean architecture for scalable frontend systems",
    image: image2,
    category: "Code",
    date: "March 20, 2025",
    accent: "bg-violetSecondary/20 text-violetSecondary",
    content:
      "A scalable frontend system starts with clear separation of concerns. I explore how I organize folders, components, hooks, services, and UI primitives to make React applications easier to scale, debug, and maintain in team environments.",
  },
  {
    title: "Designing elegant UI systems with Tailwind",
    image: image3,
    category: "Code",
    date: "March 20, 2025",
    accent: "bg-amberThirdly/20 text-amberThirdly",
    content:
      "Tailwind CSS allows me to move quickly while maintaining visual consistency. In this post, I explain how I design elegant reusable UI systems with spacing scales, typography rhythm, color tokens, and component composition.",
  },
  {
    title: "How I structure large React projects professionally",
    image: image3,
    category: "Code",
    date: "March 20, 2025",
    accent: "bg-primary/20 text-primary",
    content:
      "Professional React projects require a clear architecture. I share my real folder strategy for sections, reusable UI components, hooks, utilities, assets, and state logic to ensure long-term scalability.",
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
    image: image1,
    category: "Code",
    date: "March 20, 2025",
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
    <section id="Blogs" className="px-6 md:px-16 py-10 bg-black/95 text-white">
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center overflow-y-auto justify-center z-50 px-6">
          <div className="relative mx-auto w-full  max-w-3xl mt-30 md:mt-5 rounded-4xl border border-white/10 bg-zinc-950 p-8">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute bg-primary rounded-full p-2 cursor-pointer -top-5  -right-5 text-white"
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
