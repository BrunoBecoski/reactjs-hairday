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
        className="w-full focus:outline-0 text-text-md text-gray-200 placeholder:text-gray-400 placeholder:text-text-md
          [&::-webkit-calendar-picker-indicator]:invert-67 
          [&::-webkit-calendar-picker-indicator]:sepia-6
          [&::-webkit-calendar-picker-indicator]:saturate-420 
          [&::-webkit-calendar-picker-indicator]:hue-rotate-216 
          [&::-webkit-calendar-picker-indicator]:opacity-[0.85]
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
        "
        {...props}
      />
    </label>
  );
}
