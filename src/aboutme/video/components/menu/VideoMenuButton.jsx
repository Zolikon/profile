import PropTypes from "prop-types";

function VideoMenuButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" w-1/4 h-1/3 rounded-2xl bg-light-side-from  dark:bg-dark-side-to text-white dark:text-white text-6xl p-2 flex items-center justify-center gap-1 hover:scale-105 transition-all"
    >
      {children}
    </button>
  );
}

VideoMenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoMenuButton;
