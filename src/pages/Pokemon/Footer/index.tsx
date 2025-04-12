import Chip from "../../../components/Chip";
import { ChipVariant } from "../../../components/Chip/types";
import { capitalize } from "../../../utils/common";
import InfoRow from "./InfoRow";

import type { FooterProps } from "./types";

const Footer = ({ pokemon }: FooterProps) => {
  return (
    <footer className='flex gap-5'>
      <section className='flex-1 bg-white/20 border-white rounded-md p-5'>
        {/* <div className='flex items-center justify-between gap-2 text-lg font-md text-gray-900'> */}
        <InfoRow
          label='Type'
          children={
            <div className='flex items-center gap-2'>
              {pokemon?.types.map((t) => (
                <Chip
                  key={t.type.name}
                  label={capitalize(t.type.name)}
                  variant={t.type.name as ChipVariant}
                />
              ))}
            </div>
          }
        />
        {/* </div> */}

        <InfoRow label='Experience' value={pokemon?.base_experience} />
        <InfoRow label='Height' value={pokemon?.height} />
        <InfoRow label='Weight' value={pokemon?.weight} />
      </section>
      <section className='flex-1 bg-white/20 border-white rounded-md p-5'>
        {pokemon?.stats.map((stat) => (
          <div className='flex items-center justify-between gap-2 text-lg font-md text-gray-900'>
            <InfoRow
              key={stat.stat.name}
              label={capitalize(stat.stat.name.replace("-", " "))}
              children={
                <p>
                  {stat.base_stat}
                  <sup>{stat.effort ? `+${stat.effort}` : ""}</sup>
                </p>
              }
            />
          </div>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
