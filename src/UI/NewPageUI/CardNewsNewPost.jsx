import React from "react"
import './CardNewsNewPost.scss'
import img from "../../assets/img/Newpop.jpg"
const CardNewsNewPost =({ imageSrc, title, detail, authorName, date }) =>{
    const truncatedDetail = detail.length > 70 ? `${detail.substring(0, 70)}...` : detail;
    const truncatedTitle = title.length > 45 ? `${detail.substring(0, 45)}...` : title;

    return(
        <>
        <div className="card-NewPost">
      <img src={imageSrc} alt={title} className="card-image-NewPost" />
      <div className="card-content-NewPost">
        <h2 className="card-title-NewPost">{truncatedTitle}</h2>
        <span className="card-detail-NewPost">{truncatedDetail}</span>
        <div className="card-author-NewPost">
          <img src={img} alt={authorName} className="author-avatar-NewPost" />
          <p className="author-name-NewPost">By TripTix</p>
        </div>
        <p className="card-date-NewPost">{date}</p>
      </div>
    </div>
        </>
    )
}
export default CardNewsNewPost