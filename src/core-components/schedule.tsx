import { useState, type SubmitEvent } from "react";
import { CalendarBlankIcon, UserSquareIcon } from "@phosphor-icons/react";

import { Input } from "../components/input";
import { TimeSelect } from "../components/timeSelect";
import { Button } from "../components/button";

import type { NewScheduleType, SchedulesListType } from "../App";

const timesArray = [
  { value: 9, disabled: false },
  { value: 10, disabled: false },
  { value: 11, disabled: false },
  { value: 12, disabled: false },
  { value: 13, disabled: false },
  { value: 14, disabled: false },
  { value: 15, disabled: false },
  { value: 16, disabled: false },
  { value: 17, disabled: false },
  { value: 18, disabled: false },
  { value: 19, disabled: false },
  { value: 20, disabled: false },
  { value: 21, disabled: false },
];

interface ScheduleProps {
  schedulesList: SchedulesListType;
  addSchedule: (newSchedule: NewScheduleType) => void;
}

export function Schedule({ schedulesList, addSchedule }: ScheduleProps) {
  const [dateSelected, setDateSelected] = useState(
    new Date().toLocaleDateString("sv-SE"),
  );
  const [times, setTimes] = useState(timesArray);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addSchedule({
      date: formData.get("date").toString(),
      time: formData.get("time").toString(),
      client: formData.get("client").toString(),
    });
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
            name="date"
            type="date"
            icon={CalendarBlankIcon}
            defaultValue={new Date().toLocaleDateString("sv-SE")}
            min={new Date().toLocaleDateString("sv-SE")}
            onChange={(event) =>
              setDateSelected(
                new Date(event.target.value).toLocaleDateString("sv-SE"),
              )
            }
            required
          />
        </div>

        <div>
          <span className="text-title-md text-gray-200 mb-2">Horários</span>
          <div className="space-y-3">
            <span className="text-text-sm text-gray-300 mt-2">Manhã</span>
            <div className="flex flex-wrap gap-2">
              {times
                .filter((time) => time.value >= 9 && time.value <= 12)
                .map((time) => (
                  <TimeSelect
                    key={time.value}
                    value={time.value}
                    disabled={time.disabled}
                  />
                ))}
            </div>

            <span className="text-text-sm text-gray-300 mt-2">Tarde</span>
            <div className="flex flex-wrap gap-2">
              {times
                .filter((time) => time.value >= 13 && time.value <= 18)
                .map((time) => (
                  <TimeSelect
                    key={time.value}
                    value={time.value}
                    disabled={time.disabled}
                  />
                ))}
            </div>

            <span className="text-text-sm text-gray-300 mt-2">Noite</span>
            <div className="flex flex-wrap gap-2">
              {times
                .filter((time) => time.value >= 19 && time.value <= 21)
                .map((time) => (
                  <TimeSelect
                    key={time.value}
                    value={time.value}
                    disabled={time.disabled}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-title-md text-gray-200 mb-2">Cliente</div>
          <Input
            name="client"
            icon={UserSquareIcon}
            placeholder="Nome do cliente"
            required
          />
        </div>
      </div>

      <Button className="mt-6" type="submit">
        Agendar
      </Button>
    </form>
  );
}
