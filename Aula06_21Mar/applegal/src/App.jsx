import { Icon } from "@iconify/react";
import MeuBotao from "./MeuBotao";
import CaraCoroa from "./CaraCoroa";

function App() {

  return (
    <>
      <h1>Meu app legal</h1>
      <span className="flex items-center">
        <span>Alguma coisa</span>
        <Icon icon="mi:log-in" className="text-xs ml-1"/>
      </span>
      
      <MeuBotao label="Sair"/>
      <MeuBotao label="Saiba mais" />
      <MeuBotao label="Perfil" />

      <CaraCoroa />
    </>
  )
}

export default App
