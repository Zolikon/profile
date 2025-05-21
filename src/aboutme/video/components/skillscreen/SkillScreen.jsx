import { AbsoluteFill } from "remotion";
import { Face } from "./Face";
import { FloatIn } from "../FloatIn";
import { Skill } from "./Skill";
import { useSeconds } from "../useSeconds";

export const SkillScreen = () => {
  const seconds = useSeconds();

  const fiveSeconds = seconds(5);

  return (
    <AbsoluteFill className="flex flex-col">
      <Face stayDuration={seconds(2)} />
      <div className="flex flex-row flex-grow">
        <FloatIn from="left" lengthInFrames={fiveSeconds} delay={seconds(2)}>
          <Skill mainSkill="Java" icon="java" />
        </FloatIn>
        <FloatIn from="top" lengthInFrames={fiveSeconds} delay={seconds(4)}>
          <Skill mainSkill="Javascript" icon="javascript" />
        </FloatIn>
        <FloatIn from="right" lengthInFrames={fiveSeconds} delay={seconds(6)}>
          <Skill mainSkill="Cloud" icon="cloud" />
        </FloatIn>
      </div>
      <div className="flex flex-row flex-grow">
        <FloatIn from="left" lengthInFrames={fiveSeconds} delay={seconds(12)}>
          <Skill mainSkill="Python" icon="python" />
        </FloatIn>
        <FloatIn from="bottom" lengthInFrames={fiveSeconds} delay={seconds(10)}>
          <Skill mainSkill="GenAI" icon="ai" />
        </FloatIn>
        <FloatIn from="right" lengthInFrames={fiveSeconds} delay={seconds(8)}>
          <Skill mainSkill="ReactJs" icon="react" />
        </FloatIn>
      </div>
    </AbsoluteFill>
  );
};
