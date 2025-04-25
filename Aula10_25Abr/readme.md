# Aula 10 (25/04) 

# React Router

[https://reactrouter.com/](https://reactrouter.com/)

## Adicionar ao projeto

~~~bash
npm i react-router
~~~

## Criando rotas

> Arquivo routes.jsx

~~~jsx
import { createBrowserRouter } from "react-router";
import Hello from "./components/Hello";
import Algo from "./components/Algo";
import Error from "./components/Error";

const router = createBrowserRouter([
  { path: "/", Component: Hello },
  { path: "/algo", Component: Algo },
  { path: "*", Component: Error },
]);

export default router
~~~

~~~jsx
import { RouterProvider, Link } from "react-router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
~~~

## Adicionando links

~~~jsx
import { Link } from "react-router";

export default function Hello() {

    return (
        <>
            <div>
                Hello World
                <Link to="/algo">Algo</Link>
            </div>
        </>
    )
}
~~~