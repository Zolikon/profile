import Timeline from "./Timeline";

function CareerJourney() {
  return (
    <div className="flex flex-col justify-start py-8 items-center h-full w-[90%] xl:w-3/4 gap-3 custom-scrollbar">
      <div className="text-4xl sm:text-6xl flex items-center justify-center font-extrabold">Career Journey</div>
      <Timeline />
    </div>
  );
}

export default CareerJourney;
