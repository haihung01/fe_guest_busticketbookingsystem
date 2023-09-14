import React from 'react';
import './CardPopular_new.scss'
const CardPopular_new = ({ imageSrc, title, detail, authorAvatar, authorName, date }) => {
  const truncatedDetail = detail.length > 50 ? `${detail.substring(0, 50)}...` : detail;

  return (
    <div className="card_news_popular">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-detail">{truncatedDetail}</p>
        <div className="card-author">
          <img src={authorAvatar} alt={authorName} className="author-avatar" />
          <p className="author-name">{authorName}</p>
        </div>
        <p className="card-date">{date}</p>
      </div>
    </div>
  );
};
export default CardPopular_new;
