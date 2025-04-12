import { capitalize } from "../../../../utils/common";
import type { CarouselImageInfoProps } from "./types";

const CarouselImageInfo = ({ image }: CarouselImageInfoProps) => {
  return (
    <div className='flex items-center gap-3 w-fit mx-auto bg-white border border-white/90 rounded-md px-2'>
      {image?.imageType && (
        <>
          <p>{capitalize(image.imageType)}</p>
        </>
      )}
      {image?.imageSize && (
        <>
          <div className='w-1 h-1 rounded-full bg-gray-900'></div>
          <p>{capitalize(image.imageSize)}</p>
        </>
      )}
      {image?.gender && (
        <>
          <div className='w-1 h-1 rounded-full bg-gray-900'></div>
          <p>{capitalize(image.gender)}</p>
        </>
      )}
    </div>
  );
};

export default CarouselImageInfo;
