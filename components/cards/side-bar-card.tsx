import { Card, Container, Grid, Text } from "@nextui-org/react";

import styles from "../../styles/components/cards/SideBarCard.module.css";

import { NextPage } from "next";
import React from "react";
import { Component } from "../../ts-interfaces/generic/Component";

const SideBarCard: NextPage<{
  header?: Array<Component>;
  body: Array<Component>;
  footer?: Array<Component>;
}> = ({ header, body, footer }) => {
  // TODO: Add the capability of making the information in the sidebar dynamic by using firebase docs
  // this means enabling the capacity of changing text, images, and links within the sidebar as well as its position on the page (left or right or bottom)

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-right"]}>
        {/* TODO: Add the capacity to alter the card props/variants via props to this component */}
        <Card variant="bordered">
          <Card.Header>
            {header && (
              <>
                {header.map((item) => (
                  <Container key={item.id}>{item.component}</Container>
                ))}
              </>
            )}
          </Card.Header>
          <Card.Body>
            {body &&
              body.map((item) => (
                <Container key={item.id}>{item.component}</Container>
              ))}
          </Card.Body>
          <Card.Footer>
            {footer && (
              <>
                {footer.map((item) => (
                  <Container key={item.id}>{item.component}</Container>
                ))}
              </>
            )}
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default SideBarCard;
