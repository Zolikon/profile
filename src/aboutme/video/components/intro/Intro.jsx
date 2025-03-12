import { AbsoluteFill, Img } from "remotion";
import { FadeIn } from "../FadeIn";
import { ScreenImg } from "./ScreenImg";
import { useSeconds } from "../useSeconds";

export const Intro = () => {
  const seconds = useSeconds();

  return (
    <AbsoluteFill className="flex flex-row items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-around w-1/3 h-4/5">
        <ScreenImg src="/video/code.svg" />
        <ScreenImg src="/video/board.svg" delay={seconds(1)} />
      </div>
      <div className="py-2 flex flex-col items-center">
        <FadeIn delay={seconds(2)}>
          <Img src="/profil.jpg" className=" object-fill rounded-2xl " />
        </FadeIn>
      </div>
    </AbsoluteFill>
  );
};
