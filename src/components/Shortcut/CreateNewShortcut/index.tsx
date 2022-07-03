import {
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useInsert, useSelect } from "react-supabase";
import commonMessages from "../../../common/messages";
import { SnackbarContext } from "../../Base/SnackbarContext";
import messages from "./messages";
import validationSchema from "./validationSchema";

const CreateNewShortcut: React.FC = () => {
  const { setAlert } = useContext(SnackbarContext);
  const [{ error }] = useSelect("vs_code_shortcuts");
  const [{ error: insertError }, insertShortcut] =
    useInsert("vs_code_shortcuts");
  const [dialogOpen, setDialogOpen] = useState(false);

  const intl = useIntl();

  interface Kbd {
    id: number;
    name: string;
  }

  interface FormikValues {
    name: string;
    kbds: Kbd[];
    appId: string;
    groupName: string;
    extensionLink: string;
    modified: boolean;
  }

  const initialValues: FormikValues = {
    name: "",
    kbds: [],
    appId: "",
    groupName: "",
    extensionLink: "",
    modified: false,
  };

  useEffect(() => {
    if (error) {
      setAlert({
        show: true,
        severity: "error",
        message: error.message,
      });
    }
  }, [error, setAlert]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const onSubmit = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<FormikValues>
  ) => {
    const { name, kbds, appId, groupName, extensionLink, modified } = values;
    try {
      await insertShortcut({
        name,
        kbds: kbds.map(({ name }) => name),
        app_id: appId || null,
        group_name: groupName,
        extension_link: extensionLink || null,
        modified,
      });

      setAlert({
        show: true,
        severity: "success",
        message: `${intl.formatMessage(messages.success)}`,
      });

      resetForm();
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
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: onSubmit,
    validationSchema,
  });

  useEffect(() => {
    if (insertError) {
      setAlert({
        show: true,
        severity: "error",
        message: insertError.message,
      });
    }
  }, [insertError, setAlert]);

  const handleKbdsKeyDown = ({ code }: React.KeyboardEvent<HTMLDivElement>) => {
    let key = code.replace("Key", "");

    if (key === "MetaLeft" || key === "MetaRight") key = "Cmd";
    if (key === "ControlLeft" || key === "ControlRight") key = "Ctrl";
    if (key === "ShiftLeft" || key === "ShiftRight") key = "Shift";
    if (key === "AltLeft" || key === "AltRight") key = "Alt";

    setFieldValue("kbds", [
      ...values.kbds,
      { id: values.kbds.length, name: key },
    ]);
  };

  return (
    <>
      <Button variant="contained" onClick={handleDialogOpen}>
        {intl.formatMessage(messages.createNew)}
      </Button>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{intl.formatMessage(messages.title)}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.formName)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  name="name"
                  variant="standard"
                />
              </Grid>
              <Grid container item xs={12} spacing={0.7}>
                {values.kbds.map(({ id, name }) => (
                  <Grid item>
                    <Chip
                      key={id}
                      label={name}
                      color="primary"
                      onDelete={() => {
                        setFieldValue("kbds", [
                          ...values.kbds.filter((kbd) => kbd.id !== id),
                        ]);
                      }}
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={intl.formatMessage(messages.formKbds)}
                    type="text"
                    error={touched.kbds && !!errors.kbds}
                    helperText={touched.kbds && (errors.kbds as string)}
                    onKeyDown={handleKbdsKeyDown}
                    value=""
                    name="kbds"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.formAppId)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.appId}
                  error={touched.appId && !!errors.appId}
                  helperText={touched.appId && errors.appId}
                  name="appId"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.formGroupName)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.groupName}
                  error={touched.groupName && !!errors.groupName}
                  helperText={touched.groupName && errors.groupName}
                  name="groupName"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={intl.formatMessage(messages.formExtensionLink)}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.extensionLink}
                  error={touched.extensionLink && !!errors.extensionLink}
                  helperText={touched.extensionLink && errors.extensionLink}
                  name="extensionLink"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="modified"
                      checked={values.modified}
                      onChange={handleChange}
                    />
                  }
                  label={intl.formatMessage(messages.formModified)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    console.log("click");
                  }}
                >
                  {intl.formatMessage(messages.create)}
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateNewShortcut;
