import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikValues, useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-supabase";
import { SnackbarContext } from "../../Base/SnackbarContext";
import messages from "./messages";
import commonMessages from "../../../common/messages";
import validationSchema from "./validationSchema";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen: React.FC = () => {
  const intl = useIntl();
  const { setAlert } = useContext(SnackbarContext);
  const navigate = useNavigate();
  const [{ user }, signIn] = useSignIn();

  const onSubmit = async (values: FormikValues) => {
    const { email, password } = values;
    try {
      await signIn({
        email,
        password,
      });

      setAlert({
        show: true,
        severity: "success",
        message: `${intl.formatMessage(messages.loginSuccess)}`,
      });
    } catch (error) {
      setAlert({
        show: true,
        severity: "error",
        message:
          error instanceof Error
            ? error.message
            : intl.formatMessage(commonMessages.defaultError),
      });
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      mx="auto"
    >
      <Grid container component={Container} justifyContent="center">
        <Grid item xs={12} sm={5} lg={4}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} my={5}>
              <Grid item xs={12}>
                <Typography variant="h4" component="h1">
                  {intl.formatMessage(messages.loginTitle)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.email)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  name="email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.password)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  name="password"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit">
                  {intl.formatMessage(messages.loginButton)}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
