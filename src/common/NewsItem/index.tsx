import React from "react";
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { INews } from "../../types/redux-state.types";

interface INewsItemProps {
  news: INews;
}

const NewsItem = ({ news }: INewsItemProps) => {
  return (
    <ImageListItem>
      <img
        style={{ borderRadius: "1rem" }}
        src={news.url}
        srcSet={`${news.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={news.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={news.title}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${news.title}`}
          >
            <ArrowForwardIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default NewsItem;
