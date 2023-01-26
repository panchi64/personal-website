const SearchBar = () => {
  return (
    <div className='bg-light-item-bg/[.72] dark:bg-dark-item-bg/[.72] border-light-item-border dark:border-dark-item-border border-[1px] rounded flex mb-4 focus-within:outline focus-within:outline-2 focus-within:outline-light-blue dark:focus-within:outline-dark-blue focus-within:outline-offset-[-2px]'>
      <div className='mx-1 h-full'>
        <i className='bi-search text-light-black dark:text-dark-white place-self-center' />
      </div>
      {/* The bg-transparent flag did not seem to work unless I put it under brackets :shrug_emoji: */}
      <input
        type='text'
        placeholder='Search'
        className='bg-[transparent] placeholder-light-tertiary dark:placeholder-dark-tertiary text-light-black dark:text-dark-white rounded w-full outline-none selection:bg-light-blue dark:selection:bg-dark-blue px-1'
      />
    </div>
  );
};

export default SearchBar;
