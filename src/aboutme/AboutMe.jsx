import { useSignals } from "@preact/signals-react/runtime";

function AboutMe() {
  useSignals();
  return (
    <div className="flex flex-col items-center justify-center gap-6 font-semibold text-center text-xs md:text-xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold p-2 rounded-md bg-slate-600 dark:bg-slate-200 text-slate-200 dark:text-slate-600">
          Zoltan Pozsonyi
        </h1>
        <h2 className="text-2xl font-bold">Engineering manager</h2>
        <p>Fullstack engineer with 10+ years of experience</p>
        <p>5+ years of team/technical lead</p>
        <p>5+ years of experience in people management</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          disabled
          className=" disabled:bg-slate-400 bg-green-800  dark:bg-slate-600 text-slate-200 dark:text-slate-200 p-2 rounded-md disabled:cursor-not-allowed"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
