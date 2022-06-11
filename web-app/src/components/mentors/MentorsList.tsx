import { MentorCard } from "./MentorCard";

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

export const MentorsList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{renderCards()}</div>
  );
};
