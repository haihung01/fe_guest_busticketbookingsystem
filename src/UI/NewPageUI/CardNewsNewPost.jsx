import React from "react"
import './CardNewsNewPost.scss'
const CardNewsNewPost =({ imageSrc, title, detail, authorAvatar, authorName, date }) =>{
    const truncatedDetail = detail.length > 70 ? `${detail.substring(0, 70)}...` : detail;

    return(
        <>
        <div className="card-NewPost">
      <img src={imageSrc} alt={title} className="card-image-NewPost" />
      <div className="card-content-NewPost">
        <h2 className="card-title-NewPost">{title}</h2>
        <span className="card-detail-NewPost">{truncatedDetail}</span>
        <div className="card-author-NewPost">
          <img src={authorAvatar} alt={authorName} className="author-avatar-NewPost" />
          <p className="author-name-NewPost">{authorName}</p>
        </div>
        <p className="card-date-NewPost">{date}</p>
      </div>
    </div>
        </>
    )
}
export default CardNewsNewPost