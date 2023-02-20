import Box from "@mui/material/Box/Box";
import { Typography } from "@mui/material";
import React from "react";
import { IPost } from "../../types/redux-state.types";

interface IPostItemProps {
  post: IPost;
}

const PostItem = ({ post }: IPostItemProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: 3,
        borderRadius: "4px",
        padding: 2,
      }}
    >
      <Typography component="h5" sx={{ fontSize: 18, fontWeight: 700 }}>
        {post.title}
      </Typography>
      <Typography sx={{ mt: 1 }}>{post.body}</Typography>
    </Box>
  );
};

export default PostItem;
