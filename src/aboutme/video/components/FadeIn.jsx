import { useMemo } from "react";
import PropType from "prop-types";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const FadeIn = ({ children, delay = 0 }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const progress = spring({
    fps,
    frame,
    config: {
      damping: 50,
    },
    durationInFrames: 80,
    delay,
  });

  const rightStop = interpolate(progress, [0, 1], [200, 0]);

  const leftStop = Math.max(0, rightStop - 60);

  const maskImage = `linear-gradient(-45deg, transparent ${leftStop}%, black ${rightStop}%)`;

  const content = useMemo(() => {
    return {
      maskImage,
      WebkitMaskImage: maskImage,
    };
  }, [maskImage]);

  return <div style={content}>{children}</div>;
};

FadeIn.propTypes = {
  children: PropType.node.isRequired,
  delay: PropType.number,
};
