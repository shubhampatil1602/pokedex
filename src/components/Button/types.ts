export interface ButtonProps {
  disabled?: boolean;
  fullHeight?: boolean;
  varient?: "primary" | "transparent";
  children: React.ReactNode;
  onClick: () => void;
}
