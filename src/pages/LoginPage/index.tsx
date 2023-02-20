import { Container, Box, Typography, Alert, Button } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../../common/LoginInput";
import { loginFormData, loginInitialValues } from "../../constants";
import { ILoginForm } from "../../types/auth.types";
import { LoginSchema } from "../../validators/login.validator";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isIncorrectData, setIsIncorrectData] = useState<boolean>(false);

  const handleSubmit = (
    values: ILoginForm,
    { resetForm }: FormikHelpers<ILoginForm>
  ) => {
    if (
      process.env.REACT_APP_USERNAME === values.username &&
      process.env.REACT_APP_PASSWORD === values.password
    ) {
      isIncorrectData && setIsIncorrectData(false);
      localStorage.setItem("USERNAME", values.username);
      localStorage.setItem("PASSWORD", values.password);
      navigate("/profile");
      resetForm();
    }
    setIsIncorrectData(true);
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          width: 470,
          px: 4,
          py: 3,
          boxShadow: 5,
          position: "relative",
          borderRadius: 3,
        }}
      >
        <Typography sx={{ fontSize: 30, mb: "35px" }}>
          {loginFormData.title}
        </Typography>
        <Formik
          initialValues={loginInitialValues}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
          validateOnBlur
        >
          {({ errors, touched }) => (
            <Form>
              {loginFormData.inputs.map((input) => (
                <LoginInput
                  key={input.id}
                  type={input.type}
                  name={input.name}
                  label={input.label}
                  error={errors[input.name as keyof ILoginForm]}
                  touched={touched[input.name as keyof ILoginForm]}
                />
              ))}
              {isIncorrectData && (
                <Alert severity="error">Incorrect Username or Password</Alert>
              )}
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "30px",
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    py: 1,
                    px: 3,
                    backgroundColor: "secondary.main",
                    color: "text.secondary",
                    fontWeight: 700,
                    transition: "background-color 0.3s",
                    ":hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  {loginFormData.buttonText}
                </Button>
              </Container>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginPage;
