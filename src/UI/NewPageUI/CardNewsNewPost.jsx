// import React from "react";
// import "./CardNewsNewPost.scss";
// import img from "../../assets/img/Newpop.jpg";
// const CardNewsNewPost = ({ imageSrc, title, detail, authorName, date }) => {
//   const truncatedDetail =
//     detail.length > 70 ? `${detail.substring(0, 70)}...` : detail;
//   const truncatedTitle =
//     title.length > 45 ? `${detail.substring(0, 45)}...` : title;

//   return (
//     <>
//       <div className="card-NewPost">
//         <img src={imageSrc} alt={title} className="card-image-NewPost" />
//         <div className="card-content-NewPost">
//           <h2 className="card-title-NewPost">{truncatedTitle}</h2>
//           <span className="card-detail-NewPost">{truncatedDetail}</span>
//           <div className="card-author-NewPost">
//             <img src={img} alt={authorName} className="author-avatar-NewPost" />
//             <p className="author-name-NewPost">By TripTix</p>
//           </div>
//           <p className="card-date-NewPost">{date}</p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CardNewsNewPost;

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import moment from "moment";
import * as React from "react";
import img from "../../assets/img/Newpop.jpg";

export default function RecipeReviewCard({
  imageSrc,
  title,
  detail,
  date,
}) {
  return (
    <Card sx={{ width: "1000px", m: "auto", mb: 10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={img} aria-label="recipe" />
        }
        title={"Mai Ngọc Hải Hưng"}
        subheader={moment(date).format("DD/MM/YYYY  HH:mm")}
      />
      <CardMedia
        component="img"
        sx={{ height: 345 }}
        image={imageSrc}
        alt="img"
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
      </CardContent>
    </Card>
  );
}
