import { AbsoluteFill } from "remotion";
import VideoMenuButton from "./VideoMenuButton";
import { useNavigate } from "react-router-dom";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

export const hoverDescription = signal();

function VideoMenu() {
  const navigate = useNavigate();
  useSignals();

  return (
    <AbsoluteFill className="flex flex-col justify-start">
      <div className="flex flex-row gap-10 items-center justify-center p-10 mt-[10%]  h-2/5">
        <VideoMenuButton onClick={() => navigate("/robotme")} description="Ask my AI about me">
          RobotMe
        </VideoMenuButton>
        <VideoMenuButton onClick={() => navigate("/skills")} description="See my major skills">
          Skills
        </VideoMenuButton>
        <VideoMenuButton onClick={() => navigate("/projects")} description="List of my pet projects">
          Projects
        </VideoMenuButton>
      </div>
      {hoverDescription && <p className="text-5xl">{hoverDescription.value}</p>}
    </AbsoluteFill>
  );
}

export default VideoMenu;
