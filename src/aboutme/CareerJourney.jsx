import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const career = {
  2014: {
    company: "Epam Systems",
    title: "Junior Software Engineer",
    projects: ["Worked on a financial project as a backend developer", "Technologies: Java, Spring, MongoDb"],
  },
  2015: {
    company: "Epam Systems",
    title: "Software Engineer",
    projects: ["Worked on a financial project as a backend developer", "Technologies: Java, Spring, MongoDb"],
  },
  2017: {
    company: "Epam Systems",
    title: "Senior Software Engineer",
    projects: [
      "Worked on a travel related project",
      "Desgined solution for data analysis and reporting, also email integration",
      "Technologies: Java, Spring, Python",
    ],
  },
  2019: {
    company: "Epam Systems",
    title: "Senior Software Engineer",
    projects: [
      "Worked on a banking project as a team lead",
      "We implemented a caching solution for the clients legacy database",
      "Technologies: Scala, Akka, Kafka, AWS",
    ],
  },
  2020: {
    company: "Epam Systems",
    title: "Lead Software Engineer",
    projects: ["Developed and maintained web applications for various clients in the US and Europe."],
  },
  2021: {
    company: "Epam Systems",
    title: "Engineering Manager",
    projects: ["Developed and maintained web applications for various clients in the US and Europe."],
  },
};

function getCareerData(year, defaultResponse = career[2014]) {
  const keys = Object.keys(career)
    .map(Number)
    .sort((a, b) => a - b);

  if (year < keys[0]) {
    return defaultResponse;
  }

  for (let i = 0; i < keys.length; i++) {
    if (year >= keys[i] && (i === keys.length - 1 || year < keys[i + 1])) {
      const result = career[keys[i]];
      result.from = keys[i];
      result.to = keys[i + 1] || "now";
      return result;
    }
  }
  const result = career[keys[keys.length - 1]];
  result.from = keys[keys.length - 1];
  result.to = "now";
  return result;
}

const duration = 0.8;

const variants = {
  start: { scale: 0, opacity: 0, transition: { duration } },
  appear: { scale: 1, opacity: 1, transition: { duration } },
};

function CareerJourney() {
  const startYear = 2014;
  const endYear = new Date().getFullYear();
  const [year, setYear] = useState(startYear);
  const [hasAnimated, setHasAnimated] = useState(false);
  const careerData = getCareerData(year);

  return (
    <div className="flex flex-col justify-start py-8 items-center h-full w-3/4 gap-3">
      <div className="text-lg lg:text-2xl flex items-center justify-center font-extrabold">Career Journey</div>
      <div className="flex flex-col w-3/4 justify-around items-center">
        <div className="font-bold text-xs lg:text-2xl flex justify-between w-full xl:w-1/2">
          <p>{startYear}</p>
          <p>{endYear}</p>
        </div>
        <input
          type="range"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            if (!hasAnimated) {
              setHasAnimated(true);
            }
          }}
          min={startYear}
          max={endYear}
          className="w-full xl:w-1/2"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-xs xl:text-lg">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={careerData.title + careerData.from}
            variants={variants}
            initial={hasAnimated ? "start" : false}
            animate="appear"
            className="flex flex-col items-center justify-center"
          >
            <p className="font-bold whitespace-nowrap">{careerData.title}</p>
            <p>{careerData.company}</p>
            <p>{`${careerData.from} - ${careerData.to}`}</p>
            <p className="my-3">
              {careerData.projects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CareerJourney;
