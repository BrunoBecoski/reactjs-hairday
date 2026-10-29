import type { Icon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  icon: Icon;
}

export function Input({
  className,
  icon: IconComponent,
  ...props
}: InputProps) {
  return (
    <label
      className={`
        flex items-center gap-2 cursor-text p-3 rounded-lg border 
        border-gray-500  focus-within:border-yellow-dark
        ${className}
      `}
    >
      <IconComponent size={20} className="text-yellow-base" />
      <input
        className="w-full focus:outline-0 text-text-md text-gray-200 placeholder:text-gray-400 placeholder:text-text-md"
        {...props}
      />
    </label>
  );
}
