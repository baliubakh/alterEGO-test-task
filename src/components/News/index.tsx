import React, { useState, useEffect } from "react";
import {
  Divider,
  Typography,
  CircularProgress,
  Button,
  ImageList,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_PER_PAGE } from "../../constants";
import { get, showNews } from "../../redux/slices/news-slice";
import { newsService } from "../../services/newsService";
import NewsItem from "../../common/NewsItem";

const NewsComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  const newsState = useSelector(showNews);

  useEffect(() => {
    newsService.getNews(page * NEWS_PER_PAGE).then((res) => {
      if (res && newsState.news.length !== res.length) {
        dispatch(get({ news: res }));
      }
    });
    setIsLoading(false);
  }, [newsState.news.length, dispatch, page]);

  const handleLoadMoreClick = () => {
    setIsLoading(true);
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        sx={{
          fontSize: 26,
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        News
      </Typography>
      <Divider sx={{ my: 1 }} />
      <ImageList cols={3}>
        {newsState.news.map((news) => (
          <NewsItem news={news} key={news.id} />
        ))}
      </ImageList>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            onClick={handleLoadMoreClick}
            sx={{
              py: 1,
              px: 3,
              backgroundColor: "secondary.main",
              color: "text.secondary",
              fontWeight: 700,
              transition: "background-color 0.3s",
              ":hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            Load More
          </Button>
        )}
      </Box>
    </>
  );
};

export default NewsComponent;
