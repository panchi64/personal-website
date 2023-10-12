import {Input} from "@nextui-org/react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
const SearchBar = () => {
    return <Input
        classNames={{
            base: "min-w-[120px] max-w-[480px] w-1/6 mx-1.5 my-4",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal bg-mac-light-item-bg rounded",
        }}
        startContent={
            <MagnifyingGlassIcon className="h-6 w-6 text-mac-light-tertiary"/>
        }
        placeholder="Type to search"
        size="sm"
        type="search"
        isClearable
    />

}

export default SearchBar;