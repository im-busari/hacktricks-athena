import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindAMentor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [choice, setChoice] = useState('');
  const navigation = useNavigate();

  const handleSelection = (option: string) => {
      setChoice(option)
      navigation('/mentors')
  }

  return (
    <div className="find-a-mentor">
      <h1 className="find-a-mentor-heading-1">But first...</h1>
      <h2 className="find-a-mentor-heading-2">What are your goals?</h2>
      <Button className="landing-page-button" onClick={() => handleSelection('skills')}>Learning more skills</Button>
      <Button className="landing-page-button" onClick={() => handleSelection('customer')}>Gain more customers</Button>
      <Button className="landing-page-button" onClick={() => handleSelection('knowledge')}>Improve business knowledge</Button>
    </div>
  );
};

export default FindAMentor;
