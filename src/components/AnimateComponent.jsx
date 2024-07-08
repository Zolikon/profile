import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AnimateComponent({ children }) {
  return (
    <motion.div
      className="flex gap-4 h-full w-full overflow-y-auto flex-wrap items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

AnimateComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimateComponent;
