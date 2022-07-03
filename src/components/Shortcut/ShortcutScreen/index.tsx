import { Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useIntl } from "react-intl";
import { useClient, useSelect } from "react-supabase";
import { SnackbarContext } from "../../Base/SnackbarContext";
import CreateNewShortcut from "../CreateNewShortcut";
import messages from "./messages";

const ShortcutScreen: React.FC = () => {
  const { setAlert } = useContext(SnackbarContext);
  const [{ error }] = useSelect("vs_code_shortcuts");
  const intl = useIntl();
  const supabaseClient = useClient();
  const user = supabaseClient.auth.user();

  useEffect(() => {
    if (error) {
      setAlert({
        show: true,
        severity: "error",
        message: error.message,
      });
    }
  }, [error, setAlert]);

  return (
    <Container>
      <Grid container py={5}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" textAlign="center">
            {intl.formatMessage(messages.title)}
          </Typography>
        </Grid>
        {user && (
          <Grid item>
            <CreateNewShortcut />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ShortcutScreen;
