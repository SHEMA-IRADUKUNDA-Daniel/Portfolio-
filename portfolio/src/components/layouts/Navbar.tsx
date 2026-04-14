import Button from "../Button";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between mb-20">
      <div className=" text-white text-2xl font-serif ">
        D<span className="text-primary">S.</span>
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
            className="text-white/40 hover:text-primary transition cursor-pointer text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
      <Button
        text="Hire me"
        className="px-4 py-2 rounded-full bg-primary text-black font-medium cursor-pointer hover:bg-primary/20 hover:text-lime-300 transition"
      />
    </nav>
  );
};
export default NavBar;
