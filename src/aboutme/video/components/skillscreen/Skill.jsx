import PropType from "prop-types";

export const Skill = ({ mainSkill, icon }) => {
  return (
    <div className="flex gap-2 items-center p-10 w-[300px] justify-start">
      <div className="h-[100px] flex gap-4 items-center justify-between w-1/3">
        <img src={`/skill/${icon}.svg`} />
        <h1 className="text-6xl font-bold">{mainSkill}</h1>
      </div>
    </div>
  );
};

Skill.propTypes = {
  mainSkill: PropType.string.isRequired,
  icon: PropType.string.isRequired,
};
