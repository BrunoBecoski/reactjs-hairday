import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`
        cursor-pointer text-title-sm font-bold text-gray-900 bg-yellow-base rounded-lg p-4.5 not-disabled:hover:bg-yellow-light disabled:bg-yellow-dark disabled:cursor-not-allowed transition-colors
        ${className}
       `}
      {...props}
    />
  );
}
