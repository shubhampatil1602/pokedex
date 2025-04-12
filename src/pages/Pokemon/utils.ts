import { fetchPokemonDataService } from "./services";
import type { PokemonImage, PokemonSprites } from "./types";

export const fetchPokemonData = async (id: string) => {
  const response = await fetchPokemonDataService(id);
  return response.data;
};

export const getPokemonImages = (
  sprites: PokemonSprites | undefined
): PokemonImage[] | undefined => {
  if (!sprites) return [];

  const images: PokemonImage[] = [];

  const homeImages = sprites.other.home;
  const dreamWorldImages = sprites.other.dream_world;
  const officialArtworkImages = sprites.other["official-artwork"];

  if (dreamWorldImages.front_default) {
    images.push({
      image: dreamWorldImages.front_default,
      imageSize: "normal",
      gender: "male",
      imageType: "dreamWorld",
    });
  }

  if (dreamWorldImages.front_female) {
    images.push({
      image: dreamWorldImages.front_female,
      imageSize: "normal",
      gender: "female",
      imageType: "dreamWorld",
    });
  }

  if (officialArtworkImages.front_default) {
    images.push({
      image: officialArtworkImages.front_default,
      imageSize: "normal",
      gender: null,
      imageType: "official",
    });
  }

  if (officialArtworkImages.front_shiny) {
    images.push({
      image: officialArtworkImages.front_shiny,
      imageSize: "shiny",
      gender: null,
      imageType: "official",
    });
  }

  if (homeImages.front_default) {
    images.push({
      image: homeImages.front_default,
      imageSize: "normal",
      gender: "male",
      imageType: "home",
    });
  }

  if (homeImages.front_female) {
    images.push({
      image: homeImages.front_female,
      imageSize: "normal",
      gender: "female",
      imageType: "home",
    });
  }

  if (homeImages.front_shiny) {
    images.push({
      image: homeImages.front_shiny,
      imageSize: "shiny",
      gender: "male",
      imageType: "home",
    });
  }

  if (homeImages.front_shiny_female) {
    images.push({
      image: homeImages.front_shiny_female,
      imageSize: "shiny",
      gender: "female",
      imageType: "home",
    });
  }

  return images;
};
