import { useEffect, useState } from "react";
import {
  CalendarBlankIcon,
  MoonStarsIcon,
  SunHorizonIcon,
} from "@phosphor-icons/react";

import { Input } from "../components/input";
import { ClientItem } from "../components/client-item";

import type { SchedulesListType, ScheduleType } from "../App";

interface AppointmentsProps {
  schedulesList: SchedulesListType;
}

export function Appointments({ schedulesList }: AppointmentsProps) {
  const [dateSelected, setDateSelected] = useState(
    new Date().toLocaleDateString("sv-SE"),
  );
  const [appointments, setAppoitments] = useState<ScheduleType[]>([]);

  useEffect(() => {
    const scheduleDateSelected = schedulesList.find(
      (schedule) => Object.keys(schedule)[0] === dateSelected,
    );

    if (scheduleDateSelected) {
      setAppoitments(
        scheduleDateSelected[dateSelected].sort((a, b) => {
          if (a.time > b.time) {
            return 1;
          } else if (a.time < b.time) {
            return -1;
          }
          return 0;
        }),
      );
    } else {
      setAppoitments([]);
    }
  }, [schedulesList, dateSelected]);

  return (
    <section className="flex-1 py-20 px-28">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-title-lg text-gray-100  mb-4">Sua agenda</h2>
          <p className="text-text-sm text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </p>
        </div>
        <Input
          icon={CalendarBlankIcon}
          defaultValue={new Date().toLocaleDateString("sv-SE")}
          onChange={(event) => setDateSelected(event.target.value)}
          type="date"
        />
      </header>

      <main className="space-y-3">
        {appointments.length ? (
          <>
            {appointments.filter(
              (appointment) => appointment.time >= 9 && appointment.time <= 12,
            ).length ? (
              <div className="border border-gray-600 rounded-lg ">
                <div className="flex py-3 px-5">
                  <SunHorizonIcon size={20} className="text-yellow-base" />
                  <span className="text-text-sm text-gray-300 flex-1 pl-3">
                    Manhã
                  </span>
                  <span className="text-text-sm text-gray-400">09h-12h</span>
                </div>

                <ul className="p-5 border-t border-gray-600">
                  {appointments
                    .filter(
                      (appointment) =>
                        appointment.time >= 9 && appointment.time <= 12,
                    )
                    .map((appointment) => (
                      <ClientItem
                        key={appointment.id}
                        id={appointment.id}
                        time={appointment.time}
                        client={appointment.client}
                      />
                    ))}
                </ul>
              </div>
            ) : null}

            {appointments.filter(
              (appointment) => appointment.time >= 13 && appointment.time <= 18,
            ).length ? (
              <div className="border border-gray-600 rounded-lg ">
                <div className="flex py-3 px-5">
                  <SunHorizonIcon size={20} className="text-yellow-base" />
                  <span className="text-text-sm text-gray-300 flex-1 pl-3">
                    Tarde
                  </span>
                  <span className="text-text-sm text-gray-400">13h-18h</span>
                </div>

                <ul className="p-5 border-t border-gray-600">
                  {appointments
                    .filter(
                      (appointment) =>
                        appointment.time >= 13 && appointment.time <= 18,
                    )
                    .map((appointment) => (
                      <ClientItem
                        key={appointment.id}
                        id={appointment.id}
                        time={appointment.time}
                        client={appointment.client}
                      />
                    ))}
                </ul>
              </div>
            ) : null}

            {appointments.filter(
              (appointment) => appointment.time >= 19 && appointment.time <= 21,
            ).length ? (
              <div className="border border-gray-600 rounded-lg ">
                <div className="flex py-3 px-5">
                  <MoonStarsIcon size={20} className="text-yellow-base " />
                  <span className="text-text-sm text-gray-300 flex-1 pl-3">
                    Noite
                  </span>
                  <span className="text-text-sm text-gray-400">19h-21</span>
                </div>

                <ul className="p-5 border-t border-gray-600">
                  {appointments
                    .filter(
                      (appointment) =>
                        appointment.time >= 19 && appointment.time <= 21,
                    )
                    .map((appointment) => (
                      <ClientItem
                        key={appointment.id}
                        id={appointment.id}
                        time={appointment.time}
                        client={appointment.client}
                      />
                    ))}
                </ul>
              </div>
            ) : null}
          </>
        ) : (
          <h3 className="text-title-md text-gray-200 text-center mt-16">
            Nenhum cliente agendado para
            <br />
            <i>{dateSelected}</i>
          </h3>
        )}
      </main>
    </section>
  );
}
