import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#EDF7FA",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "#9d9d9d",
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
      dark: "#016057",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
