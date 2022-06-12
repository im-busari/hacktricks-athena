import Avatar from "@mui/material/Avatar";
import { InlineWidget } from "react-calendly";
import { IMentor } from "../components/mentors/MentorCard";
import { useParams } from "react-router-dom";
import data from "../data.json";

export const MentorDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      {data && id ? (
        data.map((item: IMentor) => {
          return (
            item.id === parseInt(id) && (
              <div style={{ margin: "4rem" }}>
                <div
                  style={{ display: "inline", float: "left", maxWidth: "30%" }}
                >
                  <div>
                    <Avatar
                      style={{ display: "inline", float: "left" }}
                      alt={`${item.name} ${item.name}`}
                      src={item.src}
                      sx={{ width: 80, height: 80 }}
                    />
                    <div
                      style={{
                        display: "inline",
                        float: "left",
                        marginLeft: "2rem",
                      }}
                    >
                      <h3>
                        {item.name} {item.surname}
                      </h3>
                    </div>
                  </div>
                  <div style={{ marginTop: "7rem" }}>
                    <h4>{item.jobTitle}</h4>
                    <h4>{item.yearsOfExperience} years</h4>
                    <h4>{item.industry}</h4>
                    <br></br>
                    <h4>Bio</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc ut dapibus dolor. Morbi gravida feugiat odio, a
                      volutpat dolor luctus sed.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "inline",
                    float: "right",
                    width: "60%",
                    paddingTop: "2rem",
                  }}
                >
                  <InlineWidget url="https://calendly.com/hacktrick" />
                </div>
              </div>
            )
          );
        })
      ) : (
        <h1>Not found </h1>
      )}
    </>
  );
};

//   if (data && id) {
//     return data.map(item: IMentor) => {
//     if (item.id === parseInt(id)) {
//       return (
//         <div>
//           <div>
//             <Avatar
//               style={{ display: "inline", float: "left" }}
//               alt={`${item.name} ${item.name}`}
//               src={item.src}
//               sx={{ width: 80, height: 80 }}
//             />
//             <div
//               style={{ display: "inline", float: "left", marginLeft: "2rem" }}
//             >
//               <h3>
//                 {item.name} {item.surname}
//               </h3>
//             </div>
//           </div>
//           <InlineWidget url="https://calendly.com/hacktrick" />
//         </div>
//       );
//   } else {
//     return <h1>Can't find user</h1>
//   }
// }})
