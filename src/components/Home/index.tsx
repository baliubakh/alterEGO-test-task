import {
  Divider,
  Typography,
  CircularProgress,
  Button,
  Grid,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../common/PostItem";
import { POSTS_PER_PAGE } from "../../constants";
import { get, showPosts } from "../../redux/slices/posts-slice";
import { postsService } from "../../services/postsService";

const HomePageComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  const postsState = useSelector(showPosts);

  useEffect(() => {
    postsService.getPosts(page * POSTS_PER_PAGE).then((res) => {
      if (res && postsState.posts.length !== res.length) {
        dispatch(get({ posts: res }));
      }
    });
    setIsLoading(false);
  }, [postsState.posts.length, dispatch, page]);

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
        Posts
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Grid
        container
        spacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={2}
      >
        {postsState.posts.map((post) => (
          <Grid item xl={3} lg={4} md={4} key={post.id}>
            <PostItem post={post} />
          </Grid>
        ))}
      </Grid>
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

export default HomePageComponent;
