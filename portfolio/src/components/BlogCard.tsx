import type { BlogCardProps } from "../interface";

const BlogCard = ({ blog, onReadMore }: BlogCardProps) => {
  return (
    <article className="rounded-4xl border border-white/10 bg-zinc-950 overflow-hidden hover:-translate-y-2 transition duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover object-top"
      />

      <div className="p-6">
        <div className="mb-5 flex justify-end">
          <span
            className={`px-4 py-1 rounded-full text-xs font-medium ${blog.accent}`}
          >
            {blog.category}
          </span>
        </div>

        <h3 className="text-xl leading-8 mb-6 text-zinc-100">{blog.title}</h3>

        <div className="flex items-center justify-between mt-10">
          <p className="text-sm text-zinc-500">{blog.date}</p>

          <button
            onClick={onReadMore}
            className="text-primary text-sm font-medium hover:underline cursor-pointer"
          >
            Read more →
          </button>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
