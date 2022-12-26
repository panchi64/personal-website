import {Navbar, Text} from "@nextui-org/react";

import {NextPage} from "next";
import Link from "next/link";

import styles from "styles/components/navbar/customized-navbar.module.css";

import {NavBarLinks} from "../../ts-interfaces/navbar/NavBarLinks";
import {Component} from "../../ts-interfaces/generic/Component";

const CustomizedNavbar: NextPage<{
  links?: Array<NavBarLinks>;
  brand?: String;
  buttons?: Array<Component>;
}> = ({links, brand, buttons}) => {
  function showBrand(brandName: String | undefined) {
    if (typeof brandName !== "undefined") {
      return (
              <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                  {brandName}
                </Text>
              </Navbar.Brand>
            );
    }
  }

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-right"]}>
      {/*The navbar has a blur effect by default*/}
      <Navbar isBordered variant="floating">
        {showBrand(brand)}
        <Navbar.Content>
          {/*TODO: Make this dynamic with firebase docs. This way the website can evolve easily as you go through life*/}

          {/* If links are not falsy then show the links */}
          {links &&
            links.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          {/* If buttons are not falsy then show the component */}
          {buttons &&
            buttons.map((button) => (
              <div key={button.componentID}>{button.component}</div>
            ))}

          {/* TODO: Add the ability to dynamically add buttons to the Navbar as well by using firebase docs */}
        </Navbar.Content>
      </Navbar>
      </div>
    </div>
  );
};

export default CustomizedNavbar;
