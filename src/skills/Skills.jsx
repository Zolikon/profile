import { useState } from "react";
import SkillIcon from "./SkillIcon";

const TAGS = {
  frontend: "frontend",
  backend: "backend",
  general: "general",
};

function Skills() {
  const [selectedTag, setSelectedTag] = useState();

  function toggleSelectedTag(tag) {
    setSelectedTag(tag === selectedTag ? undefined : tag);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 my-4">
      <p className="text-4xl sm:text-6xl flex items-center justify-center">Skills</p>
      <div className="flex  sm:gap-2 items-center justify-center text-xs sm:text-xl">
        <button
          onClick={() => toggleSelectedTag(TAGS.backend)}
          className={` p-2 font-bold rounded-md ${selectedTag == TAGS.backend && "bg-green-500 dark:bg-purple-400"}`}
        >
          {TAGS.backend.toUpperCase()}
        </button>
        <button
          onClick={() => toggleSelectedTag(TAGS.frontend)}
          className={` p-2 font-bold rounded-md ${selectedTag == TAGS.frontend && "bg-green-500 dark:bg-purple-400"}`}
        >
          {TAGS.frontend.toUpperCase()}
        </button>
        <button
          onClick={() => toggleSelectedTag(TAGS.general)}
          className={` p-2 font-bold rounded-md ${selectedTag == TAGS.general && "bg-green-500 dark:bg-purple-400"}`}
        >
          {TAGS.general.toUpperCase()}
        </button>
      </div>
      <div className="flex flex-col items-start justify-center gap-1 h-[90%] overflow-y-auto">
        <SkillIcon skillName="Java" level={5} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Python" level={4} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Leadership" level={5} tags={[TAGS.general]} selectedTag={selectedTag} />
        <SkillIcon skillName="AWS" level={4} tags={[TAGS.general]} selectedTag={selectedTag} />
        <SkillIcon skillName="AI" level={4} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="JavaScript" level={4} tags={[TAGS.backend, TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="React" level={5} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Node" level={3} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="TypeScript" level={3} tags={[TAGS.backend, TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="CSS" level={4} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="HTML" level={5} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Docker" level={4} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Git" level={5} tags={[TAGS.general]} selectedTag={selectedTag} />
        <SkillIcon skillName="Testing" level={5} tags={[TAGS.general]} selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default Skills;
