import { Card } from "@nextui-org/react";

import styles from "../../styles/components/cards/SideBarCard.module.css";

import { NextPage } from "next";
import React from "react";
import { Component } from "../../ts-interfaces/generic/Component";

const SideBarCard: NextPage<{
  header?: Array<Component>;
  body: Array<Component>;
  footer?: Array<Component>;
  headerDivider?: boolean;
  footerDivider?: boolean;
}> = ({ header, headerDivider, body, footer, footerDivider }) => {
  // TODO: Add the capability of making the information in the sidebar dynamic by using firebase docs
  // this means enabling the capacity of changing text, images, and links within the sidebar as well as its position on the page (left or right or bottom)

  const showDivider = (divider: boolean) => {
    if (divider) {
      return <Card.Divider />;
    }
  };

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-right"]}>
        {/* TODO: Add the capacity to alter the card props/variants via props to this component */}
        <Card variant="bordered">
          {header &&
            header.map((item) => (
                <Card.Header key={item.id}>{item.component}</Card.Header>
            ))}
          {headerDivider && showDivider(headerDivider)}
          {body &&
            body.map((item) => (
                <Card.Body key={item.id}>{item.component}</Card.Body>
            ))}
          {footerDivider && showDivider(footerDivider)}
          {footer &&
            footer.map((item) => (
                <Card.Footer key={item.id}>{item.component}</Card.Footer>
            ))}
        </Card>
      </div>
    </div>
  );
};

export default SideBarCard;
