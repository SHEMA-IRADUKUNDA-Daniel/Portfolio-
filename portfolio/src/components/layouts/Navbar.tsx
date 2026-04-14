import Button from "../Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Blogs",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav className="flex items-center justify-between mb-20">
      <div className=" text-white text-2xl font-serif ">
        D<span className="text-primary">S.</span>
      </div>
      <ul className=" hidden md:flex gap-6 ">
        {navLinks.map((item) => (
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
        className=" px-4 py-2 rounded-full bg-primary text-black font-medium cursor-pointer hover:bg-primary/20 hover:text-lime-300 transition"
      />
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full  border border-white/10 bg-zinc-950 p-6 md:hidden z-50">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <li
                key={item}
                className="text-white/70 hover:text-primary transition cursor-pointer text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              text="Hire me"
              className="w-full px-4 py-3 rounded-full bg-primary text-black font-medium"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
