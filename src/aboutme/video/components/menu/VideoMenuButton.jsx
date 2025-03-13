import PropTypes from "prop-types";
import { hoverDescription } from "./VideoMenu";
import { useSignals } from "@preact/signals-react/runtime";

function VideoMenuButton({ children, description, onClick }) {
  useSignals();
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => (hoverDescription.value = description)}
      onMouseLeave={() => (hoverDescription.value = "")}
      className="w-1/4 h-full flex-grow rounded-2xl bg-gradient-to-b from-light-side-from to-light-side-to dark:from-dark-side-from dark:to-dark-side-to text-white dark:text-white text-6xl p-2 flex items-center justify-center gap-1 transition-all transform hover:scale-105 hover:shadow-2xl shadow-2xl"
    >
      {children}
    </button>
  );
}

VideoMenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default VideoMenuButton;
