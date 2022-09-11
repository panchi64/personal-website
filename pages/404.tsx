import {NextPage} from "next";
import {useTheme as useNextTheme} from "next-themes";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/404.module.css";
import {Card, Row, Text} from "@nextui-org/react";

const NotFound: NextPage = () => {
  const {setTheme} = useNextTheme();
  setTheme("dark");

  return (
      <>
        <Head>
          <title>Page Not Found</title>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className={styles.welcome_card}>
          <Card isPressable isHoverable variant="bordered" css={{mw: "50vw"}}>
            <Card.Header>
              <Row justify="center">
                <Text h1 css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}>404 - Page Not Found</Text>
              </Row>
            </Card.Header>
            <Card.Divider/>
            <Card.Body>
              <Row justify="center">
                <Image src="https://media.giphy.com/media/Ta3v3I4GI1gH7Rqek6/giphy.gif" width="480" height="264" />
              </Row>
            </Card.Body>
          </Card>
        </div>
      </>
  );
}

export default NotFound;