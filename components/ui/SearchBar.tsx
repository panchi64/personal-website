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
      focus-within:border-light-blue
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
        "
      />
    </div>
  );
};

export default SearchBar;
