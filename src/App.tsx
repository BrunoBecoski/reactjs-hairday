import { useEffect, useState } from "react";

import { Schedule } from "./core-components/schedule";

import LogoImg from "./assets/logo.svg";

export type ScheduleType = {
  id: string;
  time: string;
  client: string;
};

export type NewScheduleType = Omit<ScheduleType, "id"> & {
  date: string;
};

export type SchedulesType = Record<string, ScheduleType[]>[];

export function App() {
  const [schedules, setSchedules] = useState<SchedulesType>([
    {
      ["2026-11-01"]: [
        {
          id: "1",
          time: "14:00",
          client: "Bruno",
        },
      ],
    },
  ]);

  function addSchedule(newSchedule: NewScheduleType) {
    // const findDay = schedules.find((schedule) => {
    //   const [key] = Object.keys(schedule);

    //   return key === newSchedule.date;
    // });

    const newScheduleFormatted = {
      id: Math.random().toString(36).substring(2, 9),
      time: newSchedule.time,
      client: newSchedule.client,
    };

    // if (findDay) {

    // } else {
    setSchedules((prevState) => [
      ...prevState,
      {
        [newSchedule.date]: [newScheduleFormatted],
      },
    ]);
    // }
  }

  useEffect(() => {
    console.log(schedules);
  }, [schedules]);

  return (
    <div className="relative p-3 h-full w-full">
      <div className="bg-gray-600 px-5 py-3 rounded-br-xl absolute top-0 left-0">
        <img src={LogoImg} alt="HairDay" />
      </div>

      <Schedule schedules={schedules} addSchedule={addSchedule} />
    </div>
  );
}
