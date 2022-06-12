import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export interface IMentor {
  id: number;
  src: string;
  name: string;
  surname: string;
  industry: string;
  jobTitle: string;
  yearsOfExperience?: number;
}

export const MentorCard = (props: IMentor) => {
  return (
    <div style={{ margin: "2rem" }}>
      <Link to={`/mentors/${props.id}`}>
        <Avatar
          style={{ display: "inline", float: "left" }}
          alt={`${props.name} ${props.name}`}
          src={props.src}
          sx={{ width: 80, height: 80 }}
        />
        <div style={{ display: "inline", float: "left", marginLeft: "2rem" }}>
          <h3>
            {props.name} {props.surname}
          </h3>
          <p>
            <em>{props.jobTitle}</em>
          </p>
        </div>
      </Link>
    </div>
  );
};
