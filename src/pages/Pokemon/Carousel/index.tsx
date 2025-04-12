import type { CarouselProps } from "./types";
import { twMerge } from "tailwind-merge";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { POKEBALL } from "../../PokemonList/PokemonCard/constants";
import CarouselButton from "./CarouselButton";
import CarouselImageInfo from "./CarouselImageInfo";
import CarouselPagination from "./CarouselPagination";
import useCarouselPagination from "./hooks/useCarouselPagination";

const Carousel = ({ isLoading, sprites }: CarouselProps) => {
  const {
    handleNextClick,
    handlePrevClick,
    image,
    images,
    onImageChange,
    selectedImageIndex,
  } = useCarouselPagination(sprites);

  return (
    <>
      <img
        src={image?.image ?? POKEBALL}
        alt={image?.imageType}
        className='max-w-screen w-full h-full object-cover absolute top-0 left-0 scale-200 opacity-30 -z-10 blur-2xl'
      />
      <section
        className={twMerge(
          "flex items-center justify-center max-w-screen gap-5 w-full",
          isLoading && "bg-gray-100 animate-pulse border border-gray-300"
        )}
      >
        <>
          <CarouselButton
            onClick={handlePrevClick}
            icon={
              <ArrowBackIosNewRoundedIcon className='h-4 w-4 text-gray-900' />
            }
          />

          <div className='flex flex-col relative gap-7 w-full min-w-96 p-5 border border-white/90 rounded-md bg-white/20'>
            <div className='h-96'>
              <img
                src={image?.image ?? POKEBALL}
                alt={image?.imageType}
                className='w-full h-full object-contain drop-shadow-lg'
              />
            </div>

            {image && <CarouselImageInfo image={image} />}

            {image && (
              <CarouselPagination
                images={images ?? []}
                selectedImageIndex={selectedImageIndex}
                onImageChange={onImageChange}
              />
            )}
          </div>

          <CarouselButton
            onClick={handleNextClick}
            icon={
              <ArrowForwardIosRoundedIcon className='h-4 w-4 text-gray-900' />
            }
          />
        </>
      </section>
    </>
  );
};

export default Carousel;
