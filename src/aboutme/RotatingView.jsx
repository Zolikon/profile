import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const duration = 1.2;

const variants = {
  start: { x: 200, opacity: 0, transition: { duration } },
  appear: { x: 0, opacity: 1, transition: { duration } },
  end: { x: -200, opacity: 0, transition: { duration } },
};

function RotatingView({ elements }) {
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((currentIndex) => (currentIndex + 1) % elements.length);
      setHasAnimated(true);
    }, 3000);
    return () => clearInterval(interval);
  }, [elements.length]);

  return (
    <div className="relative w-full h-16 overflow-hidden flex justify-center items-center">
      <AnimatePresence initial={false}>
        <motion.p
          key={current}
          variants={variants}
          initial={hasAnimated ? "start" : false}
          animate="appear"
          exit="end"
          className="absolute"
        >
          {elements[current]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

RotatingView.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RotatingView;
