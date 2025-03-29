import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
  id?: string;
  heading?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  bgImage?: string;
}

const Section: React.FC<SectionProps> = ({ id, heading, title, subtitle, children, bgImage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect (Moves slightly upward)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div
      ref={ref}
      id={id}
      {...(id ? { name: id } : {})}
      className="relative min-h-screen flex items-center justify-center text-white overflow-visible md:overflow-hidden pb-20"
    >
      {bgImage && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
              y: y,
            }}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-6 mt-4 md:mt-[-2rem] w-[90vw] mx-auto">
        {heading && <h2 className="text-3xl font-semibold pb-4">{heading}</h2>}
        {title && <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>}
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Section;
