import { NextPage } from "next";
import Head from "next/head";

import { useTheme as useNextTheme } from "next-themes";
import styles from "styles/Home.module.css";

import { Card, Row, Text, Container } from "@nextui-org/react";
import { useEffect } from "react";

const NotFound: NextPage = () => {
  const { setTheme } = useNextTheme();
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <div className={styles.welcome_card_container}>
        <Container fluid>
          <Card isPressable isHoverable variant="bordered">
            <Card.Divider />
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://media.giphy.com/media/Ta3v3I4GI1gH7Rqek6/giphy.gif"
                objectFit="cover"
                width="100%"
                height={264}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="center">
                <Text
                  h3
                  css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }}
                >
                  404 - Page Not Found
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
