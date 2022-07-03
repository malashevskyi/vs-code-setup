import { Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useMemo } from "react";
import { useIntl } from "react-intl";
import { useClient, useSelect } from "react-supabase";
import { SnackbarContext } from "../../Base/SnackbarContext";
import CreateNewShortcut from "../CreateNewShortcut";
import messages from "./messages";

interface ShortcutGroupName {
  name: string;
}

const ShortcutScreen: React.FC = () => {
  const { setAlert } = useContext(SnackbarContext);
  const [{ error: selectShortcutsError }] = useSelect("vs_code_shortcuts");
  const [{ error: selectGroupNamesError, data: groupNames }] =
    useSelect<ShortcutGroupName>("shortcut_group_names");
  const intl = useIntl();
  const supabaseClient = useClient();
  const user = supabaseClient.auth.user();

  useEffect(() => {
    if (selectShortcutsError || selectGroupNamesError) {
      setAlert({
        show: true,
        severity: "error",
        message:
          selectShortcutsError?.message || selectGroupNamesError?.message,
      });
    }
  }, [selectShortcutsError, selectGroupNamesError, setAlert]);

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
            <CreateNewShortcut
              groupNames={(groupNames || []).map(({ name }) => name)}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ShortcutScreen;
