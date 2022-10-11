import { Navbar, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { Links } from "./interfaces/Links";

const CustomizedNavbar: NextPage<Links> = ({links}) => {
  return (
    <>
      {/*The navbar has a blur effect by default*/}
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Francisco
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {/*TODO: Make this dynamic with firebase docs. This way the website can evolve easily as you go through life*/}
          {links.map((link) => {
            return (
              <Navbar.Link href={link.href} key={link.name}>
                {link.name}
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default CustomizedNavbar;
