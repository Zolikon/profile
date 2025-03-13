import { AbsoluteFill } from "remotion";
import { FloatIn } from "../FloatIn";
import { useSeconds } from "../useSeconds";

const h1Style = "text-7xl font-bold py-4";

export const AboutMe = () => {
  const seconds = useSeconds();

  const STARTED_AT = 2014;
  const PEOPLE_MANAGEMENT_SINCE = 2020;

  function currentYear() {
    return new Date().getFullYear();
  }

  function yearsOfExperience(startedAt) {
    return currentYear() - startedAt - 1;
  }

  return (
    <AbsoluteFill>
      <h1 className="font-extrabold mx-auto mt-[20px] text-8xl">About me</h1>
      <FloatIn from="left" lengthInFrames={seconds(8)} delay={seconds(2)}>
        <h1 className={h1Style}>{`Engineering Manager with ${yearsOfExperience(
          PEOPLE_MANAGEMENT_SINCE,
        )}+ years of experience`}</h1>
        <h1 className={h1Style}>{`Fullstack developer with ${yearsOfExperience(STARTED_AT)}+ years of experience`}</h1>
        <h1 className={h1Style}>Technical Interviewer</h1>
        <h1 className={h1Style}>Meetup presenter</h1>
      </FloatIn>
    </AbsoluteFill>
  );
};
