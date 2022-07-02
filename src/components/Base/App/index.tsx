import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import theme from "../../../common/theme";
import Root from "../Root";
import { SnackbarProvider } from "../SnackbarContext";
import { createClient } from "@supabase/supabase-js";
import { Provider as SupabaseProvider } from "react-supabase";

const client = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_KEY!
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale="en">
        <SupabaseProvider value={client}>
          <BrowserRouter>
            <CssBaseline />
            <Helmet defaultTitle="vs code shortcuts" />
            <SnackbarProvider>
              <Root />
            </SnackbarProvider>
          </BrowserRouter>
        </SupabaseProvider>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
