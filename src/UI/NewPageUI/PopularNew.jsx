import React,{useState,useEffect} from "react";
import "./PopularNew.scss";
import dataPopNew from "../../components/data/dataPopNew";
import CardPopular_new from "./CardPopular_new";
import CardNewsNewPost from "./CardNewsNewPost";
import axiosClient from "../../utils/customizeAPI";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
const PopularNew = () => {
  const [news, setNews] = useState([]); // Store provinces data
  const [isLoading, setIsLoading] = useState(true);

  // const splitDataIntoRows = (dataPopNew, rowSize) => {
  //   const rows = [];
  //   for (let i = 0; i < dataPopNew.length; i += rowSize) {
  //     const row = dataPopNew.slice(i, i + rowSize);
  //     rows.push(row);
  //   }
  //   return rows;
  // };

  // const cardRows = splitDataIntoRows(news, 10);
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const params = {
          pageSize: 10,
          pageIndex: 1
        }
        const dataNewsAPI = await axiosClient.get("/news", {
          params
        })
        console.log("list news: ",dataNewsAPI.data);
        setNews(dataNewsAPI.data.data || [])
      } catch (error) {
        console.log("error", error);
      }finally{
        setIsLoading(false);
      }
    }
   fetchData()
    // fetch("https://triptix3.azurewebsites.net/news")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const mappedData = data.data.map((item) => ({
    //       id: item.idNews.toString(),
    //       name: item.title, // Ensure the property name matches the actual key in the response
    //       detail : item.description,
    //       img: item.listImg,
    //       createdDate: item.createdDate,
    //       updatedDate: item.updatedDate
    //     }));
    //     setNews(mappedData);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  }, []); // Ensure the dependencies are properly managed

  return (
    <Box>
      {isLoading ?  
      <Stack
          sx={{ height: '50vh', width:"100%"}}
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={3}
        >
          <CircularProgress color='info' />
          <Typography>Đang tải dữ liệu.....</Typography>
        </Stack> :
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
          {/* <span className="Title_new_pop"> Bài viết mới nhất </span> */}
          <Typography variant="h6">Bài viết mới nhất</Typography>
          <div className="card-list-Newpost">
            {/* {news.map((row, index) => ( */}
              <div 
              // key={index} 
              className="card-row">
                {news.map((card) => (
                  <CardNewsNewPost
                    key={card.idNews}
                    imageSrc={card.imgLink}
                    title={card.title}
                    detail={card.description}
                    date={card.updatedDate}
                  />
                ))}
              </div>
            {/* ))} */}
          </div>
        </div>
      </div>}
    </Box>
  );
};
export default PopularNew;
