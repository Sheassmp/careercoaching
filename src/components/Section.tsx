import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
  id?: string;
  heading?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  bgImage?: string;
  bgSize?: string; // New prop for background size
  bgColor?: string;
  slideValue?: string;
  bgPosition?: string; // New prop for background position
  textAlignment?: string; // New prop for text alignment
}

const Section: React.FC<SectionProps> = ({
  id,
  heading,
  title,
  subtitle,
  children,
  bgImage,
  bgColor,
  bgPosition,
  bgSize,
  slideValue,
  textAlignment = "relative z-10 text-center", // Default alignment is center
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect (Moves slightly upward)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", slideValue ?? "-20%"]);

  // Determine the flex direction based on text alignment
  let textAlignClass = textAlignment;

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
              backgroundColor: `${bgColor}`,
              backgroundSize: bgSize ?? "cover", // Keep it as cover
              backgroundPosition: `center ${bgPosition}`, // Apply the custom background offset
              y: y, // Apply the vertical parallax effect
            }}
          />
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{ backgroundColor: bgColor }}
      ></div>

      <div
        className={`px-6 mt-4 md:mt-[-4rem] w-[90vw] mx-auto ${textAlignClass}`}
      >
        {heading && <h2 className="text-3xl font-semibold pb-4">{heading}</h2>}
        {title && <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>}
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Section;
