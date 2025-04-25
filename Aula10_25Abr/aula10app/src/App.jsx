import { Icon } from "@iconify/react";
import { RouterProvider } from "react-router";
import rotas from "./routes"
import { Link } from "react-router"

function App() {

  return (
    <>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
