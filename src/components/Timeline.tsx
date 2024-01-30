import education from "../data/education";
import jobs from "../data/jobs";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
export default function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {education.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
        
      </div>
      <div className="w-full md:w-7/12">
        <Title>Experiencia Laboral</Title>
        {jobs.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
          
          ))}
          
      </div>
    </div>
  );
}
