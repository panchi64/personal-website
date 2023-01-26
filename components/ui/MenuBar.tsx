import React from "react";

type MenuProps = {
  children: React.ReactNode;
};
const MenuBar = (props: MenuProps) => {
  return (
    <>
      <div className="bg-light-primary/[.72] dark:bg-dark-primary/[.72] border-r-light-secondary dark:border-r-dark-black border-r-[1px] backdrop-blur-md grid-cols-1 p-4 z-50 h-screen xs:w-screen sm:w-1/3 lg:w-1/6 sm:max-w-md overflow-y-auto">
        {props.children}
      </div>
    </>
  );
};

export default MenuBar;
