import React from "react";

type MenuProps = {
  children: React.ReactNode;
};
const MenuBar = (props: MenuProps) => {
  return (
    <>
      <div
        className="
      bg-light-primary/[.72]
      dark:bg-dark-primary/[.72]

      border-r-light-secondary
      dark:border-r-dark-black
      border-r-[1px]
      
      backdrop-blur-md

      md:w-1/4
      lg:w-1/6
      
      max-w-120
      h-screen
      
      grid-cols-1
      p-4
      
      z-50"
      >
        {props.children}
      </div>
    </>
  );
};

export default MenuBar;
