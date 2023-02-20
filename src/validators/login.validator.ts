import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "username.short")
    .max(50, "username.long")
    .required("username.required"),
  password: Yup.string()
    .min(3, "password.short")
    .max(50, "password.long")
    .required("password.required"),
});
