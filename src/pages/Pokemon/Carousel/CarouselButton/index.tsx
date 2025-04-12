import Button from "../../../../components/Button";
import type { CarouselButtonProps } from "./types";

const CarouselButton = ({ onClick, icon }: CarouselButtonProps) => {
  return (
    <div className='border bg-white/20 border-white rounded-md flex self-stretch'>
      <Button varient='transparent' fullHeight onClick={onClick}>
        &nbsp;
        {icon}
        &nbsp;
      </Button>
    </div>
  );
};

export default CarouselButton;
