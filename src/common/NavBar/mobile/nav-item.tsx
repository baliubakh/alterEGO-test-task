import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

interface IMobileNavItemProps {
  link: string;
  label: string;
  onClick?: () => void;
}

const MobileNavItem = ({ link, label, onClick }: IMobileNavItemProps) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <MenuItem onClick={onClick}>
        <Typography
          textAlign="center"
          color="text.primary"
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          {label}
        </Typography>
      </MenuItem>
    </Link>
  );
};

export default MobileNavItem;
