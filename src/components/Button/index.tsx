import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./types";

const Button = ({
  children,
  onClick,
  disabled,
  varient = "primary",
  fullHeight,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "border rounded-sm cursor-pointer px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed",
        fullHeight && "h-full",
        varient == "primary" && "border-gray-300 bg-white",
        varient === "transparent" && "bg-transparent border-none"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
