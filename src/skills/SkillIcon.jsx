import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useChat } from "../ChatContext";

function SkillIcon({ skillName, level, tags, selectedTag }) {
  function isSelectedTag() {
    return tags.includes(selectedTag);
  }

  const navigate = useNavigate();
  const { askQuestion } = useChat();

  function askQuestionAboutSkill() {
    navigate(`/robotme`);
    askQuestion(`Tell me more about your ${skillName} skill`);
  }

  return (
    <div
      className={`w-[200px] sm:w-[250px] h-[50px] border-2 border-transparent p-2 rounded-md select-none text-xs sm:text-lg relative`}
    >
      <div className="flex gap-2 items-center justify-between h-full hover:dark:border-stone-200 hover:border-stone-500">
        <div className="font-bold z-10">{skillName}</div>
        <div className="flex gap-1 z-10">
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
        {isSelectedTag() && (
          <motion.div
            key={skillName}
            initial={{ opacity: 0, width: 0, left: 0 }}
            animate={{ opacity: 1, width: "100%", left: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-green-500 dark:bg-purple-400 h-full w-full absolute right-0 top-0 rounded-md z-0`}
          />
        )}
      </div>
      {isSelectedTag() && (
        <motion.div
          key={skillName + "_chat"}
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute right-0 top-0 -translate-x-[-120%] rounded-md flex w-8 items-center justify-center h-full hover:scale-110 cursor-pointer transition-all duration-300`}
          onClick={askQuestionAboutSkill}
        >
          <p className="material-symbols-outlined">forum</p>
        </motion.div>
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
