import React from "react";
import "./PopularNew.scss";
import dataPopNew from "../../components/data/dataPopNew";
import CardPopular_new from "./CardPopular_new";
import CardNewsNewPost from "./CardNewsNewPost";
const PopularNew = () => {
  const splitDataIntoRows = (dataPopNew, rowSize) => {
    const rows = [];
    for (let i = 0; i < dataPopNew.length; i += rowSize) {
      const row = dataPopNew.slice(i, i + rowSize);
      rows.push(row);
    }
    return rows;
  };

  const cardRows = splitDataIntoRows(dataPopNew, 2);

  return (
    <>
      <div className="PopularNewContainer">
        <div className="wrap_New_pop">
          <span className="Title_new_pop"> Bài viết phổ biến </span>
          <div className="card-list">
            {dataPopNew.map((card) => (
              <CardPopular_new
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                detail={card.detail}
                authorAvatar={card.authorAvatar}
                authorName={card.authorName}
                date={card.date}
              />
            ))}
          </div>
        </div>
        <div className="wrap_New_NewPost">
          <span className="Title_new_pop"> Bài viết mới nhất </span>
          <div className="card-list-Newpost">
            {cardRows.map((row, rowIndex) => (
              <div key={rowIndex} className="card-row">
                {row.map((card) => (
                  <CardNewsNewPost
                    key={card.id}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    detail={card.detail}
                    authorAvatar={card.authorAvatar}
                    authorName={card.authorName}
                    date={card.date}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PopularNew;
