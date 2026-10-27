import { Button } from "./components/button";

import LogoImg from "./assets/logo.svg";

export function App() {
  return (
    <div className="bg-gray-800">
      <img src={LogoImg} />

      <div className="size-12 bg-yellow-light"></div>
      <div className="size-12 bg-yellow-base"></div>
      <div className="size-12 bg-yellow-dark "></div>

      <p className="text-title-lg">Agende um atendimento</p>
      <p className="text-title-md">Agende um atendimento</p>
      <p className="text-title-sm">Agende um atendimento</p>
      <p className="text-text-md">Agende um atendimento</p>
      <p className="text-text-sm">Agende um atendimento</p>

      <Button>Agendar</Button>
      <Button className="w-9">Agendar</Button>
      <Button disabled>Agendar</Button>
    </div>
  );
}
