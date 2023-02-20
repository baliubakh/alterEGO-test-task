import React from "react";
import { useFormikContext, Field } from "formik";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

interface ILoginInputProps {
  label: string;
  name: string;
  type: string;
  error?: string | null;
  touched?: boolean;
}

const LoginInput = ({
  name,
  error,
  touched,
  label,
  type,
}: ILoginInputProps) => {
  const { handleChange } = useFormikContext();

  return (
    <Box
      sx={{
        mb: 2,
        "& label": {
          color: "text.disabled",
        },
      }}
    >
      <Field
        as={TextField}
        type={type}
        variant="outlined"
        fullWidth
        label={label}
        name={name}
        error={Boolean(error && touched)}
        onChange={handleChange}
        helperText={error && touched && String(error)}
        style={{ color: "black" }}
      />
    </Box>
  );
};

export default LoginInput;
