import type { InfoRowProps } from "./types";

const InfoRow = ({ label, children, value }: InfoRowProps) => {
  return (
    <div className='flex items-center justify-between gap-2 text-lg font-md text-gray-900'>
      <p>{label}</p>
      {children ? children : <p>{value}</p>}
    </div>
  );
};

export default InfoRow;
