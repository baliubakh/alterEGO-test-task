import { Container, Box, Typography, Alert, Button } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LoginInput from "../../common/LoginInput";
import { loginFormData, loginInitialValues } from "../../constants";
import { ILoginForm } from "../../types/auth.types";
import { LoginSchema } from "../../validators/login.validator";

const LoginPage = () => {
  const { t } = useTranslation();
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

  const inputs = t("login.inputs", { returnObjects: true });

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
          {t("login.title")}
        </Typography>
        <Formik
          initialValues={loginInitialValues}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
          validateOnBlur
        >
          {({ errors, touched }) => (
            <Form>
              {Object.values(inputs).map((input, idx) => (
                <LoginInput
                  key={loginFormData.inputs[idx].id}
                  type={loginFormData.inputs[idx].type}
                  name={loginFormData.inputs[idx].name}
                  label={input}
                  error={
                    errors[loginFormData.inputs[idx].name as keyof ILoginForm]
                      ? t(
                          `login.errors.${
                            errors[
                              loginFormData.inputs[idx].name as keyof ILoginForm
                            ]
                          }`
                        )
                      : undefined
                  }
                  touched={
                    touched[loginFormData.inputs[idx].name as keyof ILoginForm]
                  }
                />
              ))}
              {isIncorrectData && (
                <Alert severity="error">{t("login.incorrect")}</Alert>
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
                  {t("login.button")}
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
