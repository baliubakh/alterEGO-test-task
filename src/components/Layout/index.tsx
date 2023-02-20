import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import NavBarComponent from "../NavBar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <NavBarComponent />
      <Container
        sx={{
          width: "90%",
          boxShadow: 3,
          my: 3,
          mx: "auto",
          p: 2,
          borderRadius: "1em",
          backgroundColor: "background.paper",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
