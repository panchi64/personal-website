import { Button, Navbar, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { NavBarLinks } from "../ts-interfaces/navbar/NavBarLinks";
import { NavBarButtons } from "../ts-interfaces/navbar/NavBarButtons";

const CustomizedNavbar: NextPage<{
  links?: Array<NavBarLinks>;
  brand?: String;
  buttons?: Array<NavBarButtons>;
}> = ({ links, brand, buttons }) => {
  return (
    <>
      {/*The navbar has a blur effect by default*/}
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            {brand}
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {/*TODO: Make this dynamic with firebase docs. This way the website can evolve easily as you go through life*/}

          {/* If links are not falsy then show the links */}
          {links && (
            <>
              {links.map((link) => (
                <Navbar.Link href={link.href} key={link.name}>
                  {link.name}
                </Navbar.Link>
              ))}
            </>
          )}
          {/* If buttons are not falsy then show the component */}
          {buttons && (
            <>
              {buttons.map((button) => (
                <Navbar.Item key={button.id}>{button.component}</Navbar.Item>
              ))}
            </>
          )}

          {/* TODO: Add the ability to dynamically add buttons to the Navbar as well by using firebase docs */}
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default CustomizedNavbar;
