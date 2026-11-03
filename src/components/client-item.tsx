import { TrashIcon } from "@phosphor-icons/react";

import { ButtonIcon } from "./buttonIcon";

interface ClientItemProps {
  time: string;
  name: string;
}

export function ClientItem({ time, name }: ClientItemProps) {
  return (
    <li className="flex items-center py-1">
      <strong className="text-title-md text-gray-200 mr-5">{time}</strong>
      <span className="text-text-md text-gray-200 flex-1">{name}</span>
      <ButtonIcon icon={TrashIcon} />
    </li>
  );
}
