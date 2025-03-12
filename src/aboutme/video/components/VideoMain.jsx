import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { flip } from "@remotion/transitions/flip";
import { Intro } from "./intro/Intro";
import { AboutMe } from "./aboutme/AboutMe";
import { SkillScreen } from "./skillscreen/SkillScreen";
import { useSeconds } from "./useSeconds";
import VideoMenu from "./menu/VideoMenu";

export const VideoMain = () => {
  const seconds = useSeconds();

  return (
    <TransitionSeries className="select-none bg-white text-black">
      <TransitionSeries.Sequence durationInFrames={seconds(5)}>
        <Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={flip()} timing={linearTiming({ durationInFrames: seconds(1) })} />
      <TransitionSeries.Sequence durationInFrames={seconds(8)}>
        <AboutMe />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={flip({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: seconds(1.5) })}
      />
      <TransitionSeries.Sequence durationInFrames={seconds(16)}>
        <SkillScreen />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={flip({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: seconds(1.5) })}
      />
      <TransitionSeries.Sequence durationInFrames={seconds(240)}>
        <VideoMenu />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
