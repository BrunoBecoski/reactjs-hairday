import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`
        cursor-pointer rounded-lg p-4.5 text-title-sm font-bold border-2
        text-gray-900 bg-yellow-base border-yellow-base
        not-disabled:hover:border-yellow-light 
        disabled:opacity-30 disabled:cursor-not-allowed 
        transition-colors
        ${className}
       `}
      {...props}
    />
  );
}
