import { Schedule } from "./core-components/schedule";

import LogoImg from "./assets/logo.svg";

export function App() {
  return (
    <div className="relative p-3 h-full w-full">
      <div className="bg-gray-600 px-5 py-3 rounded-br-xl absolute top-0 left-0">
        <img src={LogoImg} alt="HairDay" />
      </div>

      <Schedule />
    </div>
  );
}
