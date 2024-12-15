import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

function SkillIcon({ skillName, level, tags, selectedTag }) {
  function isSelectedTag() {
    return tags.includes(selectedTag);
  }

  return (
    <div
      className={`w-[200px] sm:w-[250px] border-2 border-transparent hover:dark:border-stone-200 hover:border-stone-500 p-2 rounded-md select-none relative text-xs sm:text-lg`}
    >
      <div className="flex gap-2 items-center justify-between z-10 relative">
        <div className="font-bold">{skillName}</div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                i <= level
                  ? isSelectedTag()
                    ? "bg-green-700 dark:bg-green-800"
                    : "bg-green-600 dark:bg-green-500"
                  : "bg-gray-200 dark:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {isSelectedTag() && (
        <AnimatePresence>
          <motion.div
            key={skillName}
            initial={{ opacity: 0, width: 0, left: 0 }}
            animate={{ opacity: 1, width: "100%", left: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-green-500 dark:bg-purple-400 h-full w-full absolute right-0 top-0 rounded-md z-0`}
          />
        </AnimatePresence>
      )}
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
