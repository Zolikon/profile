import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center py-2 px-4 rounded-lg text-stone-200 bg-green-600 hover:bg-green-800"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
