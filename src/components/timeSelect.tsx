import type { ComponentProps } from "react";

interface TimeSelectProps extends ComponentProps<"input"> {
  label: string;
}

export function TimeSelect({ label, className, ...props }: TimeSelectProps) {
  return (
    <label
      className={`
        cursor-pointer px-5 py-2 rounded-lg 
        bg-gray-600 text-gray-200 border border-gray-500 
        not-[has-[:disabled]]:hover:bg-gray-500
        has-checked:text-yellow-base has-checked:border-yellow-base
        has-disabled:bg-transparent has-disabled:cursor-not-allowed
        ${className}
      `}
    >
      <span className="text-text-md">{label}</span>
      <input type="radio" className="hidden" {...props} />
    </label>
  );
}
