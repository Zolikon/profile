import { Img, useCurrentFrame } from "remotion";
import PropType from "prop-types";

export const Face = ({ stayDuration }) => {
  const frame = useCurrentFrame();
  const steps = [-60, 0, 60, 120, 180, 240];
  const currentStep = Math.floor(frame / stayDuration) - 1;
  const isOver = currentStep >= steps.length;
  const rotate = steps[currentStep % steps.length];

  return (
    <div className="flex flex-col items-center justify-center absolute w-full h-full">
      <div className="w-[25%] h-[25%]">
        <Img src={"/video/face.svg"} className=" object-fill w-full h-full" />
        <div className="relative h-[10px] w-full flex items-center justify-center -top-[11rem] gap-10">
          {!isOver && rotate !== undefined ? (
            <>
              <Img
                src={"/video/eyes.svg"}
                className=" object-fill w-[50px] h-[50px]"
                style={{ transform: `rotate(${rotate}deg)` }}
              />
              <Img
                src={"/video/eyes.svg"}
                className=" object-fill w-[50px] h-[50px]"
                style={{ transform: `rotate(${rotate}deg)` }}
              />
            </>
          ) : (
            <>
              <Img src={"/video/normal_eye.svg"} className=" object-fill w-[50px] h-[50px]" />
              <Img src={"/video/normal_eye.svg"} className=" object-fill w-[50px] h-[50px]" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Face.propTypes = {
  stayDuration: PropType.number.isRequired,
};
