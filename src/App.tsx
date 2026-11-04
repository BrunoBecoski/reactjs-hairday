import { useEffect, useState } from "react";

import { Schedule } from "./core-components/schedule";
import { Appointments } from "./core-components/appointments";

import LogoImg from "./assets/logo.svg";

export type ScheduleType = {
  id: string;
  time: string;
  client: string;
};

export type NewScheduleType = Omit<ScheduleType, "id"> & {
  date: string;
};

export type SchedulesListType = Record<string, ScheduleType[]>[];

export function App() {
  const [schedulesList, setSchedulesList] = useState<SchedulesListType>([
    {
      ["2026-12-01"]: [
        {
          id: "1",
          time: "14:00",
          client: "Bruno",
        },
      ],
    },
  ]);

  function addSchedule(newSchedule: NewScheduleType) {
    const objectKey = newSchedule.date;

    const newScheduleFormatted = {
      id: Math.random().toString(36).substring(2, 9),
      time: newSchedule.time,
      client: newSchedule.client,
    };

    const scheduleDateExists = schedulesList.some(
      (schedules) => Object.keys(schedules)[0] === objectKey,
    );

    if (scheduleDateExists) {
      const schedulesListUpdated = schedulesList.map((schedules) => {
        if (Object.keys(schedules)[0] === objectKey) {
          return {
            [objectKey]: [...schedules[objectKey], newScheduleFormatted],
          };
        }

        return schedules;
      });

      setSchedulesList(schedulesListUpdated);
    } else {
      setSchedulesList([
        ...schedulesList,
        { [objectKey]: [newScheduleFormatted] },
      ]);
    }
  }

  return (
    <div className="relative p-3 h-full w-full">
      <div className="bg-gray-600 px-5 py-3 rounded-br-xl absolute top-0 left-0">
        <img src={LogoImg} alt="HairDay" />
      </div>

      <div className="flex gap-3">
        <Schedule schedulesList={schedulesList} addSchedule={addSchedule} />

        <Appointments />
      </div>
    </div>
  );
}
