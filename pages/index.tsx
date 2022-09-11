import {
  Card,
  Link,
  Loading,
  Row,
  Spacer,
  Text,
  Container,
} from "@nextui-org/react";
import type { NextPage } from "next";
import { useTheme as useNextTheme } from "next-themes";
import Head from "next/head";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  setTheme("dark");

  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.welcome_card_container}>
        <Container fluid>
          <Card isPressable isHoverable variant="bordered">
            <Card.Header>
              <Row justify="center">
                <Text
                  h1
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                >
                  Welcome!
                </Text>
              </Row>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Row justify="center">
                <Text blockquote lang="en-US">
                  <h3>The website is under development.</h3>
                </Text>
              </Row>
              <Loading type="points-opacity" />
              <Row justify="center">
                <Text blockquote lang="en-US">
                  Please check back later!
                </Text>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row justify="center">
                <Link
                  color="primary"
                  target="_blank"
                  href="https://github.com/panchi64"
                >
                  GitHub
                </Link>
                <Spacer x={2} />
                <Link
                  color="primary"
                  target="_blank"
                  href="https://www.linkedin.com/in/francisco-a-casiano-rosado/"
                >
                  LinkedIn
                </Link>
              </Row>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Home;
