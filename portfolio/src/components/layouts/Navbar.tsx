const NavBar = () => {
  return (
    <nav className="flex items-center justify-between mb-20">
      <div className=" text-white text-2xl font-serif ">
        D<span className="text-lime-300">S.</span>
      </div>
      <ul className="flex gap-9">
        {[
          "Home",
          "About",
          "Skills",
          "Experience",
          "Blogs",
          "Testimonials",
          "Contact",
        ].map((item) => (
          <li
            key={item}
            className="text-white/40 hover:text-lime-300 transition cursor-pointer text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="px-4 py-2 rounded-full bg-lime-300 text-black font-medium cursor-pointer hover:bg-lime-300/20 hover:text-lime-300 transition">
        Hire me
      </button>
    </nav>
  );
};
export default NavBar;
