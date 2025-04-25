import { createBrowserRouter } from "react-router";
import Hello from "./Hello";
import Algo from "./Algo";
import Error from "./Error";

const router = createBrowserRouter([
  { path: "/", Component: Hello },
  { path: "/algo", Component: Algo },
  { path: "*", Component: Error },
]);

export default router