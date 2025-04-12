import { useState } from "react";
import { getPokemonImages } from "../../utils";
import type { PokemonSprites } from "../../types";

const useCarouselPagination = (sprites: PokemonSprites) => {
  const images = getPokemonImages(sprites);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const image = images?.[selectedImageIndex];

  const onImageChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + (images?.length ?? 0)) % (images?.length ?? 0)
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prev) => (prev + 1) % (images?.length ?? 0));
  };

  return {
    image,
    images,
    selectedImageIndex,
    onImageChange,
    handlePrevClick,
    handleNextClick,
  };
};

export default useCarouselPagination;
