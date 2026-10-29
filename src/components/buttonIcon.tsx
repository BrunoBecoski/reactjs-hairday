import type { ComponentProps } from "react";
import type { Icon } from "@phosphor-icons/react";

interface ButtonIcon extends ComponentProps<"button"> {
  icon: Icon;
}

export function ButtonIcon({
  className,
  icon: IconComponent,
  ...props
}: ButtonIcon) {
  return (
    <button
      className={` 
        cursor-pointer transition-colors
        text-yellow-base hover:text-yellow-lights
        ${className}
      `}
      {...props}
    >
      <IconComponent size={32} />
    </button>
  );
}
