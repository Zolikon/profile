import { Polygon } from "@remotion/shapes";
import PropType from "prop-types";

export const Skill = ({ mainSkill }) => {
  return (
    <div className="flex gap-2 items-center p-10 w-[300px] justify-start">
      <div className="h-[100px] flex gap-2 items-center justify-between w-1/3">
        <Polygon points={5} radius={40} edgeRoundness={1} className="" />
        <h1 className="text-6xl font-bold">{mainSkill}</h1>
      </div>
    </div>
  );
};

Skill.propTypes = {
  mainSkill: PropType.string.isRequired,
};
