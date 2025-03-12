import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Player } from "@remotion/player";
import { VideoMain } from "./video/components/VideoMain";
import { DURATION_IN_FRAMES, COMPOSITION_FPS, COMPOSITION_HEIGHT, COMPOSITION_WIDTH } from "./video/constants.mjs";

function Home() {
  const [isTitleComplete, setIsTitleComplete] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start gap-6 font-semibold text-center text-xs xl:text-xl w-full xl:w-3/4 h-full py-24 select-none">
      <div className="flex flex-col items-center justify-center gap-2 w-3/4 md:w-2/3">
        <h1 className="text-lg xl:text-4xl font-bold p-2 rounded-md bg-slate-600 dark:bg-slate-200 text-slate-200 dark:text-slate-600 whitespace-nowrap">
          Zoltan Pozsonyi
        </h1>
        <Title onComplete={() => setIsTitleComplete(true)} />
        <Button onClick={() => {}} disabled>
          <p className="material-symbols-outlined">download</p>
          CV
        </Button>
        {isTitleComplete && (
          <Player
            component={VideoMain}
            durationInFrames={DURATION_IN_FRAMES}
            fps={COMPOSITION_FPS}
            compositionHeight={COMPOSITION_HEIGHT}
            compositionWidth={COMPOSITION_WIDTH}
            style={{
              width: "100%",
            }}
            loop
            autoPlay
            allowFullscreen={false}
            showVolumeControls={false}
          />
        )}
      </div>
    </div>
  );
}

function Button({ children, onClick, disabled = false }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className=" disabled:bg-slate-400 disabled:dark:bg-slate-400 bg-light-side-from  dark:bg-dark-side-to text-slate-200 dark:text-slate-200 p-2 rounded-md disabled:cursor-not-allowed w-[75px] xl:w-[200px] flex items-center justify-center gap-1 hover:scale-105 disabled:hover:scale-100 transition-all"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

function Title({ onComplete }) {
  const title = "Engineering Manager";
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const titleLength = title.length;
    let interval;
    let count = 0;

    setTimeout(() => {
      interval = setInterval(() => {
        setCharCount((charCount) => charCount + 1);
        count++;
        if (count === titleLength) {
          clearInterval(interval);
          onComplete();
        }
      }, 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="text-sm xl:text-2xl font-bold">{title.slice(0, charCount)}</h2>;
}

Title.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Home;
