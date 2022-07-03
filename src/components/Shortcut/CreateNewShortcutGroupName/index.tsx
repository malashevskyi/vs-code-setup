import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { useIntl } from "react-intl";
import { useInsert } from "react-supabase";
import commonMessages from "../../../common/messages";
import { SnackbarContext } from "../../Base/SnackbarContext";
import messages from "./messages";
import validationSchema from "./validationSchema";

interface FormikValues {
  newGroupName: string;
}

const initialValues: FormikValues = {
  newGroupName: "",
};

interface CreateNewShortcutGroupNameProps {
  open: boolean;
  onClose: () => void;
}

const CreateNewShortcutGroupName: React.FC<CreateNewShortcutGroupNameProps> = ({
  open,
  onClose,
}) => {
  const { setAlert } = useContext(SnackbarContext);

  const [{ error: insertError }, insertGroupName] = useInsert(
    "shortcut_group_names"
  );

  const intl = useIntl();

  useEffect(() => {
    if (insertError) {
      setAlert({
        show: true,
        severity: "error",
        message: insertError?.message,
      });
    }
  }, [insertError, setAlert]);

  const onSubmit = async (values: FormikValues) => {
    console.log("submit");
    const { newGroupName } = values;
    try {
      await insertGroupName({
        name: newGroupName,
      });

      setAlert({
        show: true,
        severity: "success",
        message: `${intl.formatMessage(messages.success)}`,
      });

      onClose();
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

  const {
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
        <DialogTitle>{intl.formatMessage(messages.title)}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.newGroupName)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newGroupName}
                  error={touched.newGroupName && !!errors.newGroupName}
                  helperText={touched.newGroupName && errors.newGroupName}
                  name="newGroupName"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {intl.formatMessage(messages.submitButton)}
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateNewShortcutGroupName;
