import styles from '../../styles/components/ui/MenuBar.module.css'
import React from "react";

type MenuProps = {
  children: React.ReactNode;
};
const MenuBar = (props: MenuProps) => {
  return (
    <>
      <div className={styles["menu-bar"]}>
        {props.children}
      </div>
    </>
  );
}

export default MenuBar;