import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

interface IMentor {
  name: string;
  surname: string;
  industry: string;
  jobTitle: string;
}

export const MentorCard = (props: IMentor) => {
  return (
    <div>
      <Link to={`/mentors/1`}>
      <Card style={{ margin: "2rem" }} sx={{ maxWidth: 280 }}>
        <CardMedia
          component="img"
          height="194"
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      </Link>
    </div>
  );
};
