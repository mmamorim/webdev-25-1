import CaixaLegal from "./CaixaLegal.jsx"
import Emoji from "./Emoji.jsx"

function App() {

  return (
    <>
      <h1 className="">
        Oi gente <Emoji/>
      </h1>
      <CaixaLegal label="Oi gente" cor="warning" />
      <CaixaLegal label="Alguma coisa" cor="danger" />
      <CaixaLegal label="nada" cor="primary"/>
    </>
  )
}

export default App
