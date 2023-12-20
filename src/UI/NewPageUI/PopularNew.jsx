import React,{useState,useEffect} from "react";
import "./PopularNew.scss";
import dataPopNew from "../../components/data/dataPopNew";
import CardPopular_new from "./CardPopular_new";
import CardNewsNewPost from "./CardNewsNewPost";
const PopularNew = () => {
  const [news, setNews] = useState([]); // Store provinces data

  const splitDataIntoRows = (dataPopNew, rowSize) => {
    const rows = [];
    for (let i = 0; i < dataPopNew.length; i += rowSize) {
      const row = dataPopNew.slice(i, i + rowSize);
      rows.push(row);
    }
    return rows;
  };

  const cardRows = splitDataIntoRows(news, 2);
  useEffect(() => {
    fetch("https://triptix3.azurewebsites.net/news")
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.data.map((item) => ({
          id: item.idNews.toString(),
          name: item.title, // Ensure the property name matches the actual key in the response
          detail : item.description,
          img: item.listImg,
          createdDate: item.createdDate,
          updatedDate: item.updatedDate
        }));
        setNews(mappedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Ensure the dependencies are properly managed

  return (
    <>
      <div className="PopularNewContainer">
        {/* <div className="wrap_New_pop">
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
        </div> */}
        <div className="wrap_New_NewPost">
          <span className="Title_new_pop"> Bài viết mới nhất </span>
          <div className="card-list-Newpost">
            {cardRows.map((row, rowIndex) => (
              <div key={rowIndex} className="card-row">
                {row.map((card) => (
                  <CardNewsNewPost
                    key={card.id}
                    imageSrc={card.img}
                    title={card.name}
                    detail={card.detail}
                    date={card.updatedDate}
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
