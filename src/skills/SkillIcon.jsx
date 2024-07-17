import PropTypes from "prop-types";

function SkillIcon({ skillName, level, tags, selectedTag }) {
  function isSelectedTag() {
    return tags.includes(selectedTag);
  }

  return (
    <div
      className={`flex gap-2 items-center justify-between w-[200px] sm:w-[250px] hover:border-2 dark:border-stone-200 border-stone-500 p-2 rounded-md select-none ${
        isSelectedTag() && "bg-green-500 dark:bg-purple-400"
      } text-xs sm:text-xl`}
    >
      <div className="font-bold">{skillName}</div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              i <= level ? "bg-green-700 dark:bg-green-500" : "bg-gray-200 dark:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

SkillIcon.propTypes = {
  skillName: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  selectedTag: PropTypes.string,
};

export default SkillIcon;
