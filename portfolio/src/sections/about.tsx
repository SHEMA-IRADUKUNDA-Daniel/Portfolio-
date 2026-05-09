// import AboutImageComponent from "../components/AboutImage";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import swimImage from "../assets/swim.jpg";
import hikeImage from "../assets/hike.jpg";
import travelImage from "../assets/travel.jpg";
import codeImage from "../assets/code.jpg";

const About = () => {
  // const aboutImages = [swimImage, hikeImage, travelImage, codeImage];
  const strengths = [
    "Design Systems",
    "Pixel Perfect UI",
    "Frontend Performance",
    "Responsive Design",
    "Graphic Design",
    "Problem Solving",
  ];
  const hobbies = [
    {
      title: "Swimming",
      image: swimImage,
      subtitle: "Resetting through movement and water",
      description:
        "Swimming helps me disconnect, recharge mentally, and maintain balance outside the digital world.",
    },
    {
      title: "Adventure",
      image: travelImage,
      subtitle: "Road trips, landscapes and new experiences.",
      description:
        "Traveling and expoloring new places fuels curiosity and expands the way I think about experiences and stroytelling.",
    },
    {
      title: "Building",
      image: codeImage,
      subtitle: "Turning ideas into digital experiences.",
      description:
        "I enjoy transforming concepts into scalable and visually refined products through frontend engineering and design.",
    },
    {
      image: hikeImage,
      title: "Hiking",
      subtitle: "Exploring mountains and nature trails.",
      description:
        "Hiking gives me clarity, perspective, and inspiration that often influence the way I approach design and creativity.",
    },
  ];
  const floatingCards = [
    { title: "Adventure", position: "bottom-10 -left-5" },
    { title: "Frontend ", position: "top-8 left-10" },
    { title: "UI/UX Design", position: "top-20 -right-4" },
    { title: "Graphic Design", position: "bottom-10 right-0" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hobbies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hobbies.length]);
  const current = hobbies[currentIndex];
  return (
    <section
      id="About"
      className=" px-6 md:px-16 pt-5 pb-10 bg-black/98 text-white  overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-175 flex items-center justify-center">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`
                absolute
                ${card.position}
                z-20
                rounded-2xl
                border border-white/10
                bg-zinc-950/90
                backdrop-blur-xl
                px-5 py-4
                shadow-[0_0_25px_rgba(255,255,255,0.05)]
              `}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <p className="text-sm text-white">{card.title}</p>
            </motion.div>
          ))}
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-4xl
              overflow-hidden
              border border-white/10
              bg-zinc-950/80
              shadow-[0_0_50px_rgba(190,242,100,0.08)]
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-135 object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 z-10">
                  <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3">
                    {current.subtitle}
                  </p>

                  <h3 className="text-4xl font-serif mb-4">{current.title}</h3>

                  <p className="text-zinc-300 leading-7 text-sm max-w-sm">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
            Who I Am
          </p>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Screen <span className="text-primary italic">and</span>{" "}
            <span className="text-zinc-500 italic">Beyond</span>
          </h2>

          <div className="space-y-6 text-zinc-300 leading-8 text-lg max-w-2xl">
            <p>
              I’m a frontend developer and designer focused on building modern
              digital experiences that feel fast, intentional, and visually
              refined.
            </p>
            <p>
              My work lives at the intersection of clean engineering and
              thoughtful design — where performance meets storytelling.
            </p>
            <p>
              Outside of tech, I enjoy hiking, adventure travel, swimming, and
              exploring nature. Those experiences heavily influence the way I
              approach creativity, movement, and user experience design.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-5">
              Key Strengths
            </p>
            <div className="flex flex-wrap gap-3">
              {strengths.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  className="px-5 py-3 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
