import { useEffect, useState } from "react";
import RotatingView from "./RotatingView";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-start gap-6 font-semibold text-center text-xs xl:text-xl w-full xl:w-3/4 h-full py-64 select-none">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-lg xl:text-4xl font-bold p-2 rounded-md bg-slate-600 dark:bg-slate-200 text-slate-200 dark:text-slate-600 whitespace-nowrap">
          Zoltan Pozsonyi
        </h1>
        <Title />
        <div className="flex flex-col py-4 gap-4 w-full items-center">
          <RotatingView
            elements={[
              "Fullstack engineer with 10+ years of experience",
              "4+ years of team/technical lead",
              "4+ years of experience in people management",
            ]}
          />
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/career")}
              className=" disabled:bg-slate-400 bg-light-side-from  dark:bg-dark-side-to text-slate-200 dark:text-slate-200 p-2 rounded-md disabled:cursor-not-allowed w-[75px] xl:w-[200px] flex items-center justify-center gap-1"
            >
              Career journey
            </button>
            <button
              disabled
              className=" disabled:bg-slate-400 bg-green-800  dark:bg-slate-600 text-slate-200 dark:text-slate-200 p-2 rounded-md disabled:cursor-not-allowed w-[75px] xl:w-[200px] flex items-center justify-center gap-1"
            >
              <p className="material-symbols-outlined">download</p>
              CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
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
        }
      }, 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="text-sm xl:text-2xl font-bold">{title.slice(0, charCount)}</h2>;
}

export default AboutMe;
