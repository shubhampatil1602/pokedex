import { CircularProgress } from "@mui/material";
import Pagination from "../Pagination";
import { PaginationProps } from "../Pagination/types";

const Header = ({ nextUrl, prevUrl, isLoading }: PaginationProps) => {
  return (
    <header className='pt-3 px-1 mb-3 sticky top-0 left-0 z-10'>
      <div className='flex items-center justify-between gap-2 w-full  backdrop-blur-3xl border p-5 rounded-md border-gray-300'>
        <div className='flex items-center gap-2'>
          <h1 className='text-2xl font-bold underline'>Pokedex</h1>
          {isLoading && <CircularProgress size={20} sx={{ color: "black" }} />}
        </div>
        <Pagination isLoading={isLoading} nextUrl={nextUrl} prevUrl={prevUrl} />
      </div>
    </header>
  );
};

export default Header;
