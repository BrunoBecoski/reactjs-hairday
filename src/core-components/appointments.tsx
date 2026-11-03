import {
  CalendarBlankIcon,
  MoonStarsIcon,
  SunHorizonIcon,
} from "@phosphor-icons/react";

import { Input } from "../components/input";
import { ClientItem } from "../components/client-item";

export function Appointments() {
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
          type="date"
        />
      </header>

      <main className="space-y-3">
        <div className="border border-gray-600 rounded-lg ">
          <div className="flex py-3 px-5">
            <SunHorizonIcon size={20} className="text-yellow-base" />
            <span className="text-text-sm text-gray-300 flex-1 pl-3">
              Manhã
            </span>
            <span className="text-text-sm text-gray-400">09h-12h</span>
          </div>

          <ul className="p-5 border-t border-gray-600">
            <ClientItem time="10:00" name="Bruno" />
          </ul>
        </div>

        <div className="border border-gray-600 rounded-lg ">
          <div className="flex py-3 px-5">
            <SunHorizonIcon size={20} className="text-yellow-base" />
            <span className="text-text-sm text-gray-300 flex-1 pl-3">
              Tarde
            </span>
            <span className="text-text-sm text-gray-400">13h-18h</span>
          </div>

          <ul className="p-5 border-t border-gray-600">
            <ClientItem time="13:00" name="Livia" />
            <ClientItem time="14:00" name="Leon" />
            <ClientItem time="17:00" name="José" />
          </ul>
        </div>

        <div className="border border-gray-600 rounded-lg ">
          <div className="flex py-3 px-5">
            <MoonStarsIcon size={20} className="text-yellow-base " />
            <span className="text-text-sm text-gray-300 flex-1 pl-3">
              Noite
            </span>
            <span className="text-text-sm text-gray-400">19h-21</span>
          </div>

          <ul className="p-5 border-t border-gray-600">
            <ClientItem time="21:00" name="Maria" />
          </ul>
        </div>
      </main>
    </section>
  );
}
