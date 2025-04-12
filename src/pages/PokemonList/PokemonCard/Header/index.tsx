import { HeaderProps } from "./types";

const Header = ({ image, name }: HeaderProps) => {
  return (
    <>
      <img
        src={image}
        alt={name}
        className='w-full blur-sm h-full object-cover opacity-0 group-hover:opacity-15 absolute top-0 left-0 scale-200 z-0 transition-all duration-500'
      />
      <header className='p-2 h-60 group-hover:p-0 transition-all duration-500 relative'>
        <img
          src={image}
          alt={name}
          className='p-5 w-full h-full object-contain border border-gray-300 bg-white rounded-lg group-hover:bg-transparent group-hover:border-transparent group-hover:rounded-none'
        />
      </header>
    </>
  );
};

export default Header;
