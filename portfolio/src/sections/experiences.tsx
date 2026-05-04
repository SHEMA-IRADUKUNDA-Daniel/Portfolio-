"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import andelaImage from "../assets/andela.svg";
import alxImage from "../assets/alx.png";
import vanomaImage from "../assets/vanoma.svg";
import panavisImage from "../assets/panavis.png";

const experiences = [
  {
    date: "June 2025 - Oct 2025",
    title: "Frontend Trainee",
    company: "ALX Rwanda",
    description:
      "Successfully completed the ALX ProDev Front-End program, strengthening technical and professional skills through projects, coding challenges, and simulations while building responsive, dynamic web interfaces.",
    stack: ["Next.js", "React.js", "React Native", "TypeScript", "Tailwind"],
    bg: "bg-white",
    logo: alxImage,
  },
  {
    date: "May 2023 - Aug 2023",
    title: "Frontend Trainee",
    company: "ANDELA Rwanda",
    description:
      "Completed intensive frontend training using HTML, CSS and JavaScript, collaborating on real-world style projects while strengthening clean code practices and UI/UX fundamentals.",
    stack: ["HTML", "CSS", "JavaScript", "Figma", "Git", "GitHub"],
    bg: "bg-white",
    logo: andelaImage,
  },
  {
    date: "Oct 2021 - Nov 2022",
    title: "Graphic Designer, QA & Customer Support",
    company: "VANOMA · Fulltime · Hybrid",
    description:
      "Conducted manual testing for delivery, rider, and staff applications while also creating promotional assets aligned with company branding and user experience improvements.",
    stack: ["Browser DevTools", "Illustrator", "Photoshop"],
    bg: "bg-white",
    logo: vanomaImage,
  },
  {
    date: "Oct 2021 - Nov 2022",
    title: "Graphic Designer",
    company: "PANAVIS · Fulltime · On site",
    description:
      "Designed promotional materials and digital content across platforms while ensuring visuals aligned with company branding and communication goals.",
    stack: ["Illustrator", "Photoshop", "Branding"],
    bg: "bg-[#8B3C4E]",
    logo: panavisImage,
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section
      id="Experience"
      className="px-6 md:px-16 pt-5 py-10 bg-black text-white"
    >
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
        My Journey
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-16">Experience</h2>

      <div ref={ref} className="relative ml-6">
        <motion.div className="absolute left-0 top-0 w-px bg-white/10" />
        <motion.div
          style={{ height }}
          className="absolute left-0 top-0 w-px bg-white"
        />
        <motion.div
          className="space-y-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              className="relative pl-14 "
              variants={item}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className={`absolute  left-0 top-2 -translate-x-1/2 h-12 w-12 rounded-full flex items-center justify-center
                border border-white/10 ${job.bg}
                shadow-[0_0_20px_rgba(255,255,255,0.08)]`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.15,
                }}
              >
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-8 h-8  object-contain"
                />
              </motion.div>

              <motion.div variants={container}>
                <motion.p
                  className="text-sm text-zinc-500 mb-3"
                  variants={child}
                >
                  {job.date}
                </motion.p>

                <motion.h3
                  className="text-3xl font-semibold mb-3"
                  variants={child}
                >
                  {job.title}
                </motion.h3>

                <motion.p className="text-zinc-400 mb-4" variants={child}>
                  {job.company}
                </motion.p>

                <motion.p
                  className="text-zinc-500 leading-8 max-w-4xl mb-5"
                  variants={child}
                >
                  {job.description}
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3" variants={child}>
                {job.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/10 text-sm text-zinc-400"
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
