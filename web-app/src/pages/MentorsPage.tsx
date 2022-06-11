import { MentorCard } from "../components/mentors/MentorCard";

const renderCards = () => {
  let content = [];
  for (let i = 0; i < 8; i++) {
    content.push(
      <MentorCard
        name="Lola"
        surname="Test"
        jobTitle="Software Developer"
        industry="FinTech"
      />
    );
  }

  return content;
};

export const MentorsPage = () => {
  return (
    // Mentor Details component
    // Select a calendar
    <div style={{ padding: "1.5rem" }}>
      <h1 style={{ textAlign: "left" }}>Mentors</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderCards()}</div>
    </div>
  );
};
