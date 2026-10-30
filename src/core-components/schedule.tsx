import type { SubmitEvent } from "react";
import { CalendarBlankIcon, UserSquareIcon } from "@phosphor-icons/react";

import { Input } from "../components/input";
import { TimeSelect } from "../components/timeSelect";
import { Button } from "../components/button";

export function Schedule() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 rounded-xl flex flex-col max-w-lg p-20"
    >
      <h2 className="text-title-lg text-gray-100 mb-4">
        Agende um atendimento
      </h2>
      <p className="text-text-sm text-gray-300 mb-6">
        Selecione data, horário e informe o nome do cliente para criar o
        agendamento
      </p>

      <div className="space-y-8">
        <div>
          <div className="text-title-md text-gray-200 mb-2">Data</div>
          <Input
            icon={CalendarBlankIcon}
            type="date"
            defaultValue={new Date().toLocaleDateString("sv-SE")}
            min={new Date().toLocaleDateString("sv-SE")}
          />
        </div>

        <div>
          <span className="text-title-md text-gray-200 mb-2">Horários</span>
          <div className="space-y-3">
            <span className="text-text-sm text-gray-300 mt-2">Manhã</span>
            <div className="flex flex-wrap gap-2">
              <TimeSelect name="time" label="09:00" />
              <TimeSelect name="time" label="10:00" />
              <TimeSelect name="time" label="11:00" />
              <TimeSelect name="time" label="12:00" />
            </div>

            <span className="text-text-sm text-gray-300 mt-2">Tarde</span>
            <div className="flex flex-wrap gap-2">
              <TimeSelect name="time" label="13:00" />
              <TimeSelect name="time" label="14:00" />
              <TimeSelect name="time" label="15:00" />
              <TimeSelect name="time" label="16:00" />
              <TimeSelect name="time" label="17:00" />
              <TimeSelect name="time" label="18:00" />
            </div>

            <span className="text-text-sm text-gray-300 mt-2">Noite</span>
            <div className="flex flex-wrap gap-2">
              <TimeSelect name="time" label="19:00" />
              <TimeSelect name="time" label="20:00" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-title-md text-gray-200 mb-2">Cliente</div>
          <Input icon={UserSquareIcon} placeholder="Nome do cliente" />
        </div>
      </div>

      <Button className="mt-6" type="submit">
        Agendar
      </Button>
    </form>
  );
}
