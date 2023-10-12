import {Input} from "@nextui-org/react";
import {Search} from "@styled-icons/bootstrap/Search";

const SearchBar = () => {
  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[10rem] h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Type to search..."
      size="sm"
      startContent={<Search size={18} />}
      type="search"
    />
    )
}

export default SearchBar;