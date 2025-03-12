import { Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import PropType from "prop-types";
import { useSeconds } from "../useSeconds";

export const ScreenImg = ({ src, delay = 0 }) => {
  const { fps } = useVideoConfig();
  const seconds = useSeconds();
  const frame = useCurrentFrame();

  const scaleSpring = spring({
    fps,
    frame,
    config: {
      damping: 400,
    },
    from: 4,
    to: 1,
    durationInFrames: seconds(1),
    delay: delay,
  });

  const opactiy = spring({
    fps,
    frame,
    config: {
      damping: 400,
    },
    from: 0,
    to: 1,
    durationInFrames: seconds(2),
    delay: delay,
  });

  return <Img src={src} style={{ opacity: opactiy, transform: `scale(${scaleSpring})` }} />;
};

ScreenImg.propTypes = {
  src: PropType.string.isRequired,
  delay: PropType.number,
};
