const PokemonCardShimmer = () => {
  return (
    <section className='bg-gray-50 text-transparent flex-none rounded-lg h-fit border border-gray-300 w-96 select-none'>
      <header className='p-2 h-60'>
        <div className='w-full h-full border border-gray-300 bg-gray-100 rounded-lg animate-pulse' />
      </header>

      <footer className='p-2 bg-white rounded-b-lg'>
        <div className='flex items-center gap-2 font-bold mb-2.5'>
          <div className='bg-black/50 animate-pulse rounded-full px-2 py-1 grid place-items-center'>
            <p className='text-sm'>#123</p>
          </div>
          <h3 className='underline text-lg bg-gray-200 rounded-full animate-pulse'>
            Pikachu
          </h3>
        </div>

        <div className='flex items-center flex-col gap-2 justify-between'>
          <div className='flex items-center justify-between gap-2 w-full'>
            <p className='bg-gray-200 rounded-full animate-pulse'>Experience</p>
            <p className='font-medium bg-gray-200 rounded-full animate-pulse'>
              100
            </p>
          </div>
          <div className='flex items-center justify-between gap-2 w-full'>
            <p className='bg-gray-200 rounded-full animate-pulse'>
              Height (decimeters)
            </p>
            <p className='font-medium bg-gray-200 rounded-full animate-pulse'>
              100
            </p>
          </div>
          <div className='flex items-center justify-between gap-2 w-full'>
            <p className='bg-gray-200 rounded-full animate-pulse'>
              Width (hectograms)
            </p>
            <p className='font-medium bg-gray-200 rounded-full animate-pulse'>
              100
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default PokemonCardShimmer;
