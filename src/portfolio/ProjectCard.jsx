import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const COLOR_MAP = {
  react: ["bg-yellow-400", "bg-yellow-400"],
  angular: ["bg-red-400", "bg-red-400"],
  python: ["bg-green-400", "bg-green-400"],
  java: ["bg-purple-400", "bg-purple-400"],
};

function ProjectCard({ name, description, image, language }) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <NavLink to={name.toLowerCase()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div
        className={`relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] ${COLOR_MAP[language][0]} dark:${COLOR_MAP[language][1]} rounded-2xl border-stone-500 border-2 m-2 p-2 flex flex-col justify-center items-center dark:text-stone-700`}
        animate={isHovered ? "back" : "front"}
        variants={variants}
        transition={isHovered ? { duration: 0.5 } : { duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of the Card */}
        <motion.div
          className="absolute w-full h-full flex flex-col justify-center "
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-4xl font-bold select-none w-full text-center">{name}</p>
        </motion.div>

        {/* Back of the Card */}
        <motion.div
          className="absolute w-full h-full flex gap-2 flex-col justify-center items-center  p-2 "
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        >
          <img src={image} alt="project image" className="rounded-xl object-contain w-4/5 h-4/5" />
          <p className="text-center">{description}</p>
        </motion.div>
      </motion.div>
    </NavLink>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default ProjectCard;
