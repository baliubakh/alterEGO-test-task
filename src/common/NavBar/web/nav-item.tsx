import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

interface IWebNavItemProps {
  link: string;
  label: string;
  onClick?: () => void;
}

const WebNavItem = ({ link, label, onClick }: IWebNavItemProps) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Button
        onClick={onClick}
        sx={{
          my: 2,
          color: "text.secondary",
          display: "block",
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default WebNavItem;
