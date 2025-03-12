import { Composition } from "remotion";
import {
  DURATION_IN_FRAMES,
  COMPOSITION_FPS,
  COMPOSITION_HEIGHT,
  COMPOSITION_ID,
  COMPOSITION_WIDTH,
} from "./constants.mjs";
import { VideoMain } from "./components/VideoMain";

export const RemotionRoot = () => {
  return (
    <Composition
      id={COMPOSITION_ID}
      component={VideoMain}
      durationInFrames={DURATION_IN_FRAMES}
      fps={COMPOSITION_FPS}
      width={COMPOSITION_WIDTH}
      height={COMPOSITION_HEIGHT}
    />
  );
};
