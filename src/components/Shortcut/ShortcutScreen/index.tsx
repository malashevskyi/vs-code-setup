import { Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useSelect } from "react-supabase";
import { SnackbarContext } from "../../Base/SnackbarContext";

const ShortcutScreen: React.FC = () => {
  const { setAlert } = useContext(SnackbarContext);
  const [{ error }] = useSelect("vs_code_shortcuts");

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
            VS Code Shortcuts cheatsheet
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShortcutScreen;
