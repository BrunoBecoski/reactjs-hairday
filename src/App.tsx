import { TrashIcon, UserSquareIcon } from "@phosphor-icons/react";

import { Button } from "./components/button";
import { Input } from "./components/input";
import { ButtonIcon } from "./components/buttonIcon";

import LogoImg from "./assets/logo.svg";
import { TimeSelect } from "./components/timeSelect";

export function App() {
  return (
    <div className="bg-gray-800 p-10">
      <img src={LogoImg} />

      <div className="size-12 bg-yellow-light"></div>
      <div className="size-12 bg-yellow-base"></div>
      <div className="size-12 bg-yellow-dark "></div>

      <p className="text-title-lg">Agende um atendimento</p>
      <p className="text-title-md">Agende um atendimento</p>
      <p className="text-title-sm">Agende um atendimento</p>
      <p className="text-text-md">Agende um atendimento</p>
      <p className="text-text-sm">Agende um atendimento</p>

      <Button className="w-full">Agendar</Button>
      <Button className="w-9">Agendar</Button>
      <Button disabled>Agendar</Button>

      <Input icon={UserSquareIcon} placeholder="Nome do cliente" />
      <Input
        icon={UserSquareIcon}
        placeholder="Nome do cliente"
        className="w-32"
      />
      <Input icon={UserSquareIcon} value="Bruno Becoski Alves" />

      <ButtonIcon icon={TrashIcon} />

      <div className="flex gap-2">
        <TimeSelect label="09:00" name="test" disabled />
        <TimeSelect label="10:00" name="test" />
        <TimeSelect label="11:00" name="test" />
        <TimeSelect label="12:00" name="test" />
      </div>
    </div>
  );
}
