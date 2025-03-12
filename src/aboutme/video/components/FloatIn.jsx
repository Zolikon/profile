import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import PropType from "prop-types";

export const FloatIn = ({ children, from = "right", lengthInFrames, delay = 30 }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const translateX =
    React.Children.map(children, (child, i) => {
      return spring({
        fps,
        frame,
        from: width * (from === "right" ? 1 : from === "left" ? -1 : 0),
        durationInFrames: lengthInFrames / 3,
        to: 0,
        delay: delay + i * 5,
        config: {
          mass: 0.5,
        },
      });
    })?.reverse() || [];

  const translateY =
    React.Children.map(children, (child, i) => {
      return spring({
        fps,
        frame,
        from: height * (from === "bottom" ? 1 : from === "top" ? -1 : 0),
        durationInFrames: lengthInFrames / 3,
        to: 0,
        delay: delay + i * 5,
        config: {
          mass: 0.5,
        },
      });
    })?.reverse() || [];

  const opactity =
    React.Children.map(children, (child, i) => {
      return spring({
        fps,
        frame,
        from: 0,
        to: 1,
        durationInFrames: lengthInFrames / 3,
        delay: delay + i * 5,
      });
    })?.reverse() || [];

  return (
    <div
      className="m-auto "
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          style={{
            marginBottom: 20,
            opacity: opactity[i],
            transform: `translateX(${translateX[i]}px) translateY(${translateY[i]}px)`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

FloatIn.propTypes = {
  children: PropType.node.isRequired,
  lengthInFrames: PropType.number,
  delay: PropType.number,
  from: PropType.oneOf(["right", "left", "top", "bottom"]),
};
