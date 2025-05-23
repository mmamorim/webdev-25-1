import { Icon } from "@iconify/react";
import Card from "./Card/Card";
import CardTitle from "./Card/CardTitle"
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [ dialog, setDialog ] = useState(false)

  return (
    <>    

      <Modal show={dialog} >
        <div className="p-1">
          <div className="p-1 text-lg font-bold">
            Um erro aconteceu
          </div>
          <hr />
          <div className="mt-3 mx-2">
            Alguma coisa não funcionou!
          </div>
        </div>
      </Modal>

      <div className="bg-gray-300 m-1 p-2 rounded">
        App template - Vite + React + WindCSS + Iconify
      </div>
      <hr />


      <div>
        <Card>
          <CardTitle>
            Oi Gente
          </CardTitle>
          <CardBody>
            Mussum Ipsum, cacilds vidis litro abertis.
            Mauris nec dolor in eros commodo tempor.
          </CardBody>
          <CardFooter>
            <div className="flex items-center justify-end gap-2">
              <button className="border bg-gray-400 rounded px-1 text-white text-lg">
                Ação 1
              </button>
              <button className="border bg-gray-400 rounded px-1 text-white text-lg">
                Ação 1
              </button>
            </div>
          </CardFooter>
        </Card>


      </div>
    </>
  )
}

export default App
