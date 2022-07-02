import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1470,
    },
  },
});

export default defaultTheme;
