import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <div
      className="
      bg-light-item-bg 
      dark:bg-dark-item-bg
      
      border-light-item-border
      dark:border-dark-item-border
      
      border-[1px]
      rounded
      
      flex
      mb-4

      focus-within:outline
      focus-within:outline-4
    focus-within:outline-light-blue
    "
    >
      <div className="m-1">
        <GoSearch className="text-light-black dark:text-dark-white" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="
        bg-light-item-bg 
        dark:bg-dark-item-bg

        placeholder-light-tertiary 
        dark:placeholder-dark-tertiary

        text-light-black
        dark:text-dark-white

        rounded 
        w-full

        outline-none
        
        selection:bg-light-blue
        dark:selection:bg-dark-blue
        "
      />
    </div>
  );
};

export default SearchBar;
