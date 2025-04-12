import { twMerge } from "tailwind-merge";
import { ChipProps } from "./types";
import { CHIP_VARIANTS } from "./constants";

const Chip = ({ label, variant = "normal" }: ChipProps) => {
  return (
    <div
      className={twMerge(
        "border rounded-full px-2.5 py-0.5",
        CHIP_VARIANTS[variant]
      )}
    >
      <p>{label}</p>
    </div>
  );
};

export default Chip;
