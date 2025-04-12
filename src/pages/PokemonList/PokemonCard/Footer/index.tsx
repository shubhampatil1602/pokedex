import { capitalize } from "@mui/material";
import { FooterProps } from "./types";
import InfoRow from "./InfoRow";

const Footer = ({ pokemon }: FooterProps) => {
  const { base_experience, height, name, weight, order } = pokemon ?? {};

  return (
    <footer className='p-2 bg-white group-hover:bg-transparent z-10'>
      <div className='flex items-center gap-2 font-bold mb-2.5'>
        <div className='bg-black rounded-full px-2 py-1 grid place-items-center'>
          <p className='text-white text-sm'>#{order}</p>
        </div>
        <h3 className='underline text-lg'>{capitalize(name ?? "")}</h3>
      </div>

      <div className='flex items-center flex-col gap-2 justify-between'>
        {base_experience && (
          <InfoRow label='Experience' value={base_experience} />
        )}
        {height && <InfoRow label='Height (decimeters)' value={height} />}
        {weight && <InfoRow label='Width (hectograms)' value={weight} />}
      </div>
    </footer>
  );
};

export default Footer;
