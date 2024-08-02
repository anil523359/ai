import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";

export const authRoutes = [
  { path: `/login/:email`, Component: <Login /> },
  { path: `/login`, Component: <Login /> },
  { path: `/signup`, Component: <SignUp /> },
];
