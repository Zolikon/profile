import { AbsoluteFill } from "remotion";
import VideoMenuButton from "./VideoMenuButton";
import { useNavigate } from "react-router-dom";

function VideoMenu() {
  const navigate = useNavigate();
  return (
    <AbsoluteFill className="flex flex-row gap-6 items-center justify-center">
      <VideoMenuButton onClick={() => navigate("/robotme")}>RobotMe</VideoMenuButton>
      <VideoMenuButton onClick={() => navigate("/skills")}>Skills</VideoMenuButton>
      <VideoMenuButton onClick={() => navigate("/projects")}>Projects</VideoMenuButton>
    </AbsoluteFill>
  );
}

export default VideoMenu;
