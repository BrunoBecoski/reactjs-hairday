import type { Icon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  icon: Icon;
}

export function Input({
  icon: IconComponent,
  className,
  ...props
}: InputProps) {
  return (
    <label
      className={`
        cursor-text border border-gray-500 p-3 rounded-lg focus-within:border-yellow-dark flex items-center gap-2 group
        ${className}
      `}
    >
      <IconComponent size={20} className="text-yellow-base" />
      <input
        className="w-full focus:outline-0 text-text-md text-gray-200 placeholder:text-gray-400 placeholder:text-text-md focus:gro"
        {...props}
      />
    </label>
  );
}
