import {NextPage} from "next";

import styles from "styles/Home.module.css";
import {useTheme as useNextTheme} from "next-themes";

import {Card, Container, Link, Loading, Row, Spacer, Text} from "@nextui-org/react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Head from "next/head";

const PageInDevCard: NextPage = () => {
  const {setTheme} = useNextTheme();
  setTheme("dark");

  return (<>
    <Head>
      <title>Whoops!</title>
      <link rel="shortcut icon" href="/favicon.ico"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
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
                Whoops
              </Text>
            </Row>
          </Card.Header>
          <Card.Divider/>
          <Card.Body>
            <Row justify="center">
              <Text blockquote lang="en-US">
                <h3>The page is currently under development.</h3>
              </Text>
            </Row>
            <Loading type="points-opacity"/>
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
                <FaGithub/>
                GitHub
              </Link>
              <Spacer x={2}/>
              <Link
                  color="primary"
                  target="_blank"
                  href="https://www.linkedin.com/in/francisco-a-casiano-rosado/"
              >
                <FaLinkedin/>
                LinkedIn
              </Link>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  </>);
}

export default PageInDevCard;