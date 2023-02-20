import { ILoginForm } from "../types/auth.types";

export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong..",
}

export const loginInitialValues: ILoginForm = {
  username: "",
  password: "",
};

export const loginFormData = {
  title: "LOGIN",
  inputs: [
    {
      id: 1,
      type: "text",
      label: "Username",
      name: "username",
    },
    {
      id: 2,
      type: "password",
      label: "Password",
      name: "password",
    },
  ],
  buttonText: "Login",
};

export const pages = [
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Profile",
    link: "/profile",
    withAuth: true,
  },
];

export const POSTS_PER_PAGE = 20;

export const NEWS_PER_PAGE = 20;
