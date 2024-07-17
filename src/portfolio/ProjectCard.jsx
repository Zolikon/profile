import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function ProjectCard({ name, description, image }) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <NavLink to={name.toLowerCase()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div
        className={`relative w-[120px] h-[120px] md:w-[280px] md:h-[280px] bg-yellow-400 rounded-2xl border-stone-500 border-2 m-2 p-2 flex flex-col justify-center items-center dark:text-stone-700`}
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
          <p className="text-sm sm:text-4xl font-bold select-none w-full text-center">{name}</p>
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
};

export default ProjectCard;
