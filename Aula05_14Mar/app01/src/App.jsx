import CaixaLegal from "./CaixaLegal.jsx"

function App() {

  return (
    <>
      <h1 className="alert alert-danger">
        Oi gente
      </h1>
      <CaixaLegal label="Oi gente" cor="warning" />
      <CaixaLegal label="Alguma coisa" cor="danger" />
      <CaixaLegal/>
    </>
  )
}

export default App
