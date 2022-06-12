import { IMentor, MentorCard } from "../components/mentors/MentorCard";
import data from "../data.json";

export const MentorsPage = () => {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1 style={{ textAlign: "left" }}>Mentors</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item: IMentor) => {
          return <MentorCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
