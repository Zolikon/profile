import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";

function Timeline() {
  return (
    <div className="w-full px-1 py-10 overflow-y-auto">
      <VerticalTimeline>
        <WorkElement
          date="2022 - present"
          title="Engineering manager"
          company="Epam Systems"
          description={[
            "General management 5-7 people, support their professional development",
            "Leading fullstack development team and act as architect",
          ]}
        />
        <WorkElement
          date="2020 - 2022"
          title="Lead Software Engineer"
          company="Epam Systems"
          description={[
            "General management 4-5 people, support their professional development",
            "Leading backend development team on fincancial project, taking active part in development",
          ]}
        />
        <WorkElement
          date="2017 - 2020"
          title="Senior Software Engineer"
          company="Epam Systems"
          description={["Worked as a backend developer in travel domain", "Designing new solutions"]}
        />
        <WorkElement
          date="2015 - 2017"
          title="Software Engineer"
          company="Epam Systems"
          description={["Worked as a backend developer on a financial project"]}
        />
        <WorkElement
          date="2014 - 2015"
          title="Software Engineer"
          company="Epam Systems"
          description={[
            "Taking part in Epams junior mentoring program",
            "After successfully completed that, worked as a backend developer on a financial project",
          ]}
        />
      </VerticalTimeline>
    </div>
  );
}

function WorkElement({ date, title, company, description }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work text-light-text dark:text-dark-text "
      contentStyle={{ background: "rgb(33, 150, 243)" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      dateClassName="text-light-text dark:text-dark-text"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title font-extrabold text-lg xl:text-2xl">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle font-bold">{company}</h4>
      <p>
        {description.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </p>
    </VerticalTimelineElement>
  );
}

WorkElement.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function WorkIcon() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <i className="material-symbols-outlined text-dark-text dark:text-light-text">work</i>
    </div>
  );
}

export default Timeline;
