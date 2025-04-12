import { twMerge } from "tailwind-merge";
import type { CarouselPaginationProps } from "./types";

const CarouselPagination = ({
  images,
  onImageChange,
  selectedImageIndex,
}: CarouselPaginationProps) => {
  return (
    images.length && (
      <div className='flex items-center gap-2 justify-center w-fit mx-auto'>
        <div className='flex items-center gap-2 h-7 bg-white py-2 px-4 rounded-full'>
          {Array(images?.length)
            .fill(1)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => onImageChange(index)}
                className={twMerge(
                  "rounded-full cursor-pointer transition-all duration-300",
                  index === selectedImageIndex
                    ? "bg-black h-3 w-3"
                    : "bg-gray-400 h-2 w-2"
                )}
              />
            ))}
        </div>
        <div className='py-2 px-4 bg-white h-7 w-fit rounded-full grid place-items-center'>
          <p className='text-sm font-medium -mt-1'>
            {`${selectedImageIndex + 1} of ${images?.length}`}
          </p>
        </div>
      </div>
    )
  );
};

export default CarouselPagination;
