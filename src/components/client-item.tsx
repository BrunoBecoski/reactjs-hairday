import { TrashIcon } from "@phosphor-icons/react";

import { ButtonIcon } from "./buttonIcon";

interface ClientItemProps {
  id: string;
  time: number;
  client: string;
  handleRemoveSchedule: (id: string) => void;
}

export function ClientItem({
  id,
  time,
  client,
  handleRemoveSchedule,
}: ClientItemProps) {
  return (
    <li className="flex items-center py-1">
      <strong className="text-title-md text-gray-200 mr-5">{`${time.toString().padStart(2, "0").padEnd(5, ":00")}`}</strong>
      <span className="text-text-md text-gray-200 flex-1">{client}</span>
      <ButtonIcon icon={TrashIcon} onClick={() => handleRemoveSchedule(id)} />
    </li>
  );
}
