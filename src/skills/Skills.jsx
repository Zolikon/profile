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
    <div className="flex flex-col items-start justify-center gap-4">
      <div className="flex gap-2 self-center justify-center">
        <button onClick={() => toggleSelectedTag(TAGS.backend)}>{TAGS.backend.toUpperCase()}</button>
        <button onClick={() => toggleSelectedTag(TAGS.frontend)}>{TAGS.frontend.toUpperCase()}</button>
        <button onClick={() => toggleSelectedTag(TAGS.general)}>{TAGS.general.toUpperCase()}</button>
      </div>
      <div className="flex flex-col items-start justify-center">
        <SkillIcon skillName="Java" level={5} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Python" level={4} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Leadership" level={5} tags={[TAGS.general]} selectedTag={selectedTag} />
        <SkillIcon skillName="JavaScript" level={4} tags={[TAGS.backend, TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="React" level={4} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Angular" level={4} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Node" level={3} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="TypeScript" level={3} tags={[TAGS.backend, TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="CSS" level={3} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="HTML" level={3} tags={[TAGS.frontend]} selectedTag={selectedTag} />
        <SkillIcon skillName="Docker" level={4} tags={[TAGS.backend]} selectedTag={selectedTag} />
        <SkillIcon skillName="AWS" level={4} tags={[TAGS.general]} selectedTag={selectedTag} />
        <SkillIcon skillName="Git" level={4} tags={[TAGS.general]} selectedTag={selectedTag} />
        <SkillIcon skillName="Testing" level={4} tags={[TAGS.general]} selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default Skills;
