import Button from "../../../components/Button";
import { usePokemonListContext } from "../../../context/PokemonListContext/hooks";
import { PokemonListContextActionType } from "../../../context/PokemonListContext/types";
import type { PaginationProps } from "./types";

const Pagination = ({ nextUrl, prevUrl, isLoading }: PaginationProps) => {
  const { dispatch } = usePokemonListContext();
  const handleUpdateUrl = (url: string) => {
    dispatch({ type: PokemonListContextActionType.SET_URL, url });
  };
  return (
    <footer className='flex items-center gap-2'>
      <Button
        disabled={!prevUrl || isLoading}
        onClick={() => handleUpdateUrl(prevUrl!)}
      >
        Previous
      </Button>
      <Button
        disabled={!nextUrl || isLoading}
        onClick={() => handleUpdateUrl(nextUrl!)}
      >
        Next
      </Button>
    </footer>
  );
};

export default Pagination;
